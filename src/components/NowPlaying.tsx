"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { buttonVariants, Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Record from "@/components/RecordPlayer";
import { findLyricsByTrackId, findTrackInPlaylist } from "@/lib/helper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaylistLyrics, Tracks, Queue } from "@/lib/data";
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

    if (fromIndex === currentTrackIndex) {
      setCurrentTrackIndex(toIndex);
    } else if (fromIndex < currentTrackIndex && toIndex >= currentTrackIndex) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else if (fromIndex > currentTrackIndex && toIndex <= currentTrackIndex) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }

    setQueue({ ...queue, tracks: updatedQueue });
  };

  const removeTrack = (index: number) => {
    const updatedQueue = [...queue.tracks];
    updatedQueue.splice(index, 1);

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
            <CardContent className="py-2">
              <ul>
                {findLyricsByTrackId(
                  PlaylistLyrics,
                  queue.tracks[currentTrackIndex]?.trackId!,
                ).map((line: string, index: number) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="queue">
          <Card>
            <CardContent className="py-2">
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
