"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { buttonVariants, Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Record from "@/components/RecordPlayer";
import { findTrackInPlaylist } from "@/lib/helper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tracks, Queue } from "@/lib/data";
import { CaretUp, CaretDown, XCircle, Play } from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function NowPlaying() {
  const [queue, setQueue] = useState(Queue);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const moveTrack = (fromIndex: number, toIndex: number) => {
    const updatedQueue = [...queue.tracks];
    const [movedTrack] = updatedQueue.splice(fromIndex, 1);
    updatedQueue.splice(toIndex, 0, movedTrack!);

    // Update the currently playing index if the moved track is currently playing
    if (fromIndex === currentTrackIndex) {
      setCurrentTrackIndex(toIndex);
    } else if (fromIndex < currentTrackIndex && toIndex >= currentTrackIndex) {
      // If a track was moved before the currently playing track, adjust the index
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else if (fromIndex > currentTrackIndex && toIndex <= currentTrackIndex) {
      // If a track was moved after the currently playing track, adjust the index
      setCurrentTrackIndex(currentTrackIndex + 1);
    }

    setQueue({ ...queue, tracks: updatedQueue });
  };

  const removeTrack = (index: number) => {
    const updatedQueue = [...queue.tracks];
    updatedQueue.splice(index, 1);

    // Adjust the currently playing index if needed
    if (index === currentTrackIndex) {
      setCurrentTrackIndex(0);
    } else if (index < currentTrackIndex) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }

    setQueue({ ...queue, tracks: updatedQueue });
  };

  const playNext = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex < queue.tracks.length - 1 ? prevIndex + 1 : 0,
    );
  };

  const playPrevious = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : queue.tracks.length - 1,
    );
  };

  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <Record
        Tracks={Tracks}
        onPlayNext={playNext}
        onPlayPrevious={playPrevious}
        currentTrack={queue.tracks[currentTrackIndex]}
      />
      <Tabs defaultValue="lyrics" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="lyrics">Lyrics</TabsTrigger>
          <TabsTrigger value="queue">Queue</TabsTrigger>
        </TabsList>
        <TabsContent value="lyrics">
          <Card>
            <CardContent className="space-y-2"></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="queue">
          <Card>
            <CardHeader>
              <CardTitle>Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea>
                {queue.tracks.map((track, index) =>
                  findTrackInPlaylist(Tracks, track.trackId) !== undefined ? (
                    <div key={track.trackId}>
                      <div className="flex items-center justify-between text-sm">
                        <p className="inline-flex items-center gap-3">
                          <span
                            className={cn(
                              buttonVariants({ variant: "outline" }),
                              " bg-tree-poppy-500 font-bold hover:bg-tree-poppy-600",
                            )}
                          >
                            <Play className="h-4 w-4 text-white" />
                          </span>
                          {findTrackInPlaylist(Tracks, track.trackId)!.name}
                        </p>
                        <div>
                          <Button
                            variant={"ghost"}
                            onClick={() => moveTrack(index, index - 1)}
                            disabled={index === 0}
                            className="px-2 py-0"
                          >
                            <CaretUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant={"ghost"}
                            onClick={() => moveTrack(index, index + 1)}
                            disabled={index === queue.tracks.length - 1}
                            className="px-2 py-0"
                          >
                            <CaretDown className="h-4 w-4" />
                          </Button>
                          <Button
                            variant={"ghost"}
                            onClick={() => removeTrack(index)}
                            className="px-2 py-0"
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Separator className="my-2" />
                    </div>
                  ) : null,
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
