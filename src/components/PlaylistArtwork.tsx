import { cn } from "@/lib/utils";
import { PlaylistArtworkProps } from "@/lib/def";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlbumArtwork } from "@/components/Artwork";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { formatDuration, findTrackInPlaylist } from "@/lib/helper";
import { XCircle, Play } from "@phosphor-icons/react";

import Image from "next/image";

export function PlaylistArtwork({
  tracks,
  playlist,
  width = 150,
  height = 150,
  className,
  ...props
}: PlaylistArtworkProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <AlbumArtwork key={playlist.id} album={playlist} />
      </AlertDialogTrigger>
      <AlertDialogContent className=" h-3/4 w-3/4 max-w-none rounded-3xl">
        <div className="flex justify-between overflow-hidden">
          <AlertDialogHeader>
            <AlertDialogTitle className=" overflow-hidden rounded-md">
              <Image
                src={playlist.cover.url}
                alt={playlist.name}
                width={width!}
                height={height!}
                className="object-fit h-auto w-auto transition-all hover:scale-105"
              />
              {playlist.name}
            </AlertDialogTitle>
            <AlertDialogDescription>
              by: {playlist.artist}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <ScrollArea className="m-4 mt-0 h-full w-full rounded-md border p-2">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tracks</h4>
              {playlist.tracks.map((track) =>
                findTrackInPlaylist(tracks, track.trackId) !== undefined ? (
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
                        {findTrackInPlaylist(tracks, track.trackId)!.name}
                      </p>
                      <p>
                        {formatDuration(
                          findTrackInPlaylist(tracks, track.trackId)!
                            .duration_ms,
                        )}
                      </p>
                    </div>
                    <Separator className="my-2" />
                  </div>
                ) : null,
              )}
            </div>
          </ScrollArea>
          <AlertDialogCancel className=" bg-tree-poppy-500 font-bold hover:bg-tree-poppy-600">
            <XCircle className="h-4 w-4 text-white" />
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
