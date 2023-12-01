import React from 'react';
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { AlbumArtwork } from "~/components/Artwork";
import { Albums } from "~/components/albums";
import SearchBar from "@/components/search-bar";
import { Button } from './ui/button';
import Link from 'next/link';

export default function Search() {
  return (
    <main className="h-full px-4 py-12 lg:px-8 relative">

    
      {/* SearchBar above the album section */}
      <div className="absolute top-4 left-8">
        <SearchBar />
      </div>
    
    </main>
  );
}
