import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";

import { AlbumArtwork } from "~/components/Artwork";
import { fetchAlbums, fetchPlaylists } from "~/lib/data";

export default async function Home() {
  const Albums = await fetchAlbums();
  const Playlists = await fetchPlaylists();
  return (
    <main className="h-full px-4 py-6 lg:px-8">

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
              <AlbumArtwork
                key={playlist.name}
                album={playlist}
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
