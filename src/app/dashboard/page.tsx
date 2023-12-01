import Home from "@/components/Home";
import RecordDisk from "~/components/RecordPlayer";
import SearchBar from "~/components/SearchBar";
import { fetchAlbums, fetchPlaylists } from "~/lib/data";

export default async function dashboard() {
  const Albums = await fetchAlbums();
  const Playlists = await fetchPlaylists();

  return (
    <main className="grid h-screen w-screen grid-cols-[30%,1fr] gap-4 p-8">
      <section className="h-full rounded-3xl border border-slate-200 bg-white px-4 py-6 text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 lg:px-8">
        <RecordDisk />
      </section>
      <section className="h-full overflow-x-auto rounded-3xl border border-slate-200 bg-white px-4 py-6 text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 lg:px-8">
        {/* <SearchBar Albums={Albums} Playlists={Playlists} /> */}
        {/* <Home Albums={Albums} Playlists={Playlists} /> */}
      </section>
    </main>
  );
}
