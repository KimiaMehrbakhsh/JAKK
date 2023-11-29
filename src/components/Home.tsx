import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";

import { AlbumArtwork } from "~/components/Artwork";
import { Albums } from "~/components/albums";

export default function Home() {
  return (
    <main className="h-full px-4 py-6 lg:px-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
        <p className="text-muted-foreground text-sm">
          Your personal playlists. Updated daily.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex gap-2 space-x-4">
            {Albums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[150px]"
                aspectRatio="square"
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
