"use client";
import { AppProps } from "@/lib/def";
import { useState } from "react";
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
import { buttonVariants, Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { AlbumArtwork } from "~/components/Artwork";
import {
  CrossCircledIcon,
  GridIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

export default function SearchBar({ Albums, Playlists, Tracks }: AppProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="mb-6">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-15% justify-between"
          >
            <p>Browse</p>
            <GridIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className=" h-3/4 w-3/4 max-w-none rounded-3xl">
          <AlertDialogHeader>
            <div className="flex w-full items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button variant="outline" size="icon">
                <MagnifyingGlassIcon className="h-4 w-4" />
              </Button>

              <AlertDialogCancel className="bg-tree-poppy-600">
                <CrossCircledIcon className="h-4 w-4 text-white" />
              </AlertDialogCancel>
            </div>
          </AlertDialogHeader>
          <div className="overflow-x-auto">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Made for You
              </h2>
            </div>

            <Separator className="my-4" />
            <div className="relative ">
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
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
