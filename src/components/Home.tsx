import { AppProps } from "@/lib/def";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { AlbumArtwork } from "~/components/Artwork";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { PlayIcon, CrossCircledIcon } from "@radix-ui/react-icons";

function formatDuration(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Use padStart to ensure two digits for seconds and one digit for minutes
  const formattedMinutes = String(minutes).padStart(1, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

export default function Home({ Albums, Playlists }: AppProps) {
  return (
    <main className="h-full">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
      </div>

      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex gap-2 space-x-4 pb-4">
            {Albums.map((album) => (
              <AlbumArtwork
                playlists={Playlists}
                key={album.name}
                album={album}
                className="w-[150px]"
                width={150}
                height={150}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          Recently Played
        </h2>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex gap-2 space-x-4 pb-4">
            {Albums.slice()
              .reverse()
              .map((album) => (
                <AlbumArtwork
                  playlists={Playlists}
                  key={album.name}
                  album={album}
                  className="w-[150px]"
                  width={150}
                  height={150}
                />
              ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Playlists</h2>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex gap-2 space-x-4 pb-4">
            {Playlists.map((playlist) => (
              <AlertDialog>
                <AlertDialogTrigger>
                  <AlbumArtwork
                    key={playlist.name}
                    album={playlist}
                    className="w-[150px]"
                    width={150}
                    height={150}
                  />
                </AlertDialogTrigger>
                <AlertDialogContent className=" h-3/4 w-3/4 max-w-none rounded-3xl">
                  <div className="flex justify-between overflow-hidden">
                    <AlertDialogHeader>
                      <AlertDialogTitle className=" overflow-hidden rounded-md">
                        <Image
                          src={playlist.cover.url}
                          alt={playlist.name}
                          width={150}
                          height={150}
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
                        <h4 className="mb-4 text-sm font-medium leading-none">
                          Tracks
                        </h4>
                        {playlist.tracks.map((tracks) => (
                          <>
                            <div
                              key={tracks.id}
                              className="flex items-center justify-between text-sm"
                            >
                              <p className="inline-flex items-center gap-3">
                                <span
                                  className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    " bg-tree-poppy-600 ",
                                  )}
                                >
                                  <PlayIcon className="h-4 w-4 text-white" />
                                </span>
                                {tracks.name}
                              </p>
                              <p>{formatDuration(tracks.duration_ms)}</p>
                            </div>
                            <Separator className="my-2" />
                          </>
                        ))}
                      </div>
                    </ScrollArea>
                    <AlertDialogCancel className=" bg-tree-poppy-600">
                      <CrossCircledIcon className="h-4 w-4 text-white" />
                    </AlertDialogCancel>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </main>
  );
}
