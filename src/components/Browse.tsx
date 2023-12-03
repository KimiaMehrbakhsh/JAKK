"use client";
import { BrowseProps } from "@/lib/def";
import {Ref, forwardRef, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { AlbumArtwork } from "~/components/Artwork";
import { GridFour, MagnifyingGlass, XCircle } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";


const Browse =
forwardRef(({
  Albums,
  Playlists,
  Tracks,
  className,
  changeCurr,
  ...props
}: BrowseProps, ref: Ref<HTMLButtonElement>) => {
  // const [value, setValue] = useState("Search...");
  const [open, setOpen] = useState(false);

  useEffect(() => {if(!open) {
    changeCurr!("main")
  }},[open])
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen} >
        <AlertDialogTrigger className={cn(className)} ref={ref}>
          <>
            <GridFour className="h-4 w-4" />
            Browse
          </>
        </AlertDialogTrigger>
        <AlertDialogContent className=" h-3/4 w-3/4 max-w-none rounded-3xl">
          <AlertDialogHeader>
            <div className="flex w-full items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button variant="outline" size="icon">
                <MagnifyingGlass className="h-4 w-4" />
              </Button>

              <AlertDialogCancel className="bg-tree-poppy-600">
                <XCircle className="h-4 w-4 text-white" />
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
    </>
  );
}
)
export default Browse;
