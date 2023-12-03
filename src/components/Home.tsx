import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBar from "@/components/SearchBar";
import Browse from "@/components/Browse";
import { Albums, Playlists, Tracks } from "@/lib/data";

export default function Home() {
  return (
    <>
      <SearchBar Albums={Albums} Playlists={Playlists} Tracks={Tracks} />
      <Browse Albums={Albums} Playlists={Playlists} Tracks={Tracks} />
    </>
  );
}
