import { AppProps } from "@/lib/def";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AlbumArtwork } from "@/components/Artwork";
import { PlaylistArtwork } from "@/components/PlaylistArtwork";

export default function Main({ Albums, Playlists, Tracks }: AppProps) {
  return (
    <div className="h-full">
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
      </div>

      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex gap-2 space-x-4 pb-4">
            {Albums.map((album, idx) => (
              <AlbumArtwork playlists={Playlists} key={idx} album={album} />
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
            {Playlists.map((playlist, idx) => (
              <PlaylistArtwork tracks={Tracks} playlist={playlist} key={idx} />
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
            {Tracks.map((track) => (
              <AlbumArtwork
                playlists={Playlists}
                key={track.id}
                album={track}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
