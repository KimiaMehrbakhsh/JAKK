//DjTOOL
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AlbumArtwork } from "@/components/Artwork";
import { Albums, Playlists } from "@/lib/data";

export default function DJTool() {
  return (
    <main className="h-full px-4 py-6 lg:px-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          Your Own DJ Tool
        </h2>
        <p className="text-muted-foreground text-sm">
          All Your DJ essentials in One Place.
        </p>
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
    </main>
  );
}
