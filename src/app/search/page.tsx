import React from 'react';
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { AlbumArtwork } from "~/components/Artwork";
import { Albums } from "~/components/albums";
import Search from "@/components/search-bar";
import { Button } from './ui/button';

export default function SearchPage() {
  return (
    <main className="grid h-screen w-screen grid-cols-[30%,1fr] gap-4 p-8 relative">
      {/* Left section */}
      <section className="h-full rounded-3xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
        {/* Add content for the left section if needed */}
      </section>

      {/* Right section - Search results */}
      <section className="h-full overflow-x-auto rounded-3xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
        <Search />

        {/* Indicate that these are search results */}
        <h2 className="text-2xl font-semibold my-4">Search Results</h2>

        {/* Display two rows of albums */}
        <ScrollArea>
  <div className="flex gap-2 space-x-4">
    {Albums.map((album) => (
      <AlbumArtwork
        key={album.name}
        album={album}
        className="w-[100px]"
        aspectRatio="square"
        width={150}
        height={150}
      />
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>

<div className="space-y-4 mt-8"> {/* Reduced margin to decrease the gap */}
</div>

<h1 className="text-0.5xl font-semibold my-2">Featured For You : </h1> {/* Reduced margin to decrease the gap */}

<ScrollArea>
  <div className="flex gap-2 space-x-4">
    {Albums.map((album) => (
      <AlbumArtwork
        key={album.name}
        album={album}
        className="w-[100px]"
        aspectRatio="square"
        width={150}
        height={150}
      />
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
      </section>
    </main>
  );
}
