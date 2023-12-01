"use client";
import { AppProps } from "@/lib/def";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { AlbumArtwork } from "~/components/Artwork";
import { GridIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Portal } from "@radix-ui/react-popover";

export default function SearchBar({ Albums, Playlists }: AppProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="mb-6">
      <Popover open={open} onOpenChange={setOpen} modal={true}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-15% justify-between"
          >
            <p>Browse</p>
            <GridIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent className="max-w-2/4 w-1/4" align="start">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button variant="outline" size="icon">
                <MagnifyingGlassIcon className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Made for You
              </h2>
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
          </PopoverContent>
        </Portal>
      </Popover>
    </div>
  );
}
