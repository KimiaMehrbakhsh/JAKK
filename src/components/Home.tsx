"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Browse from "@/components/Browse";
import Main from "~/components/Main";
import { Albums, Playlists, Tracks } from "@/lib/data";
import { VinylRecord, Person } from "@phosphor-icons/react";

export default function Home() {
  const [curr, setCurr] = useState("main");

  function changeCurr(value: string) {
    setCurr(value);
  }

  return (
    <Tabs value={curr} onValueChange={changeCurr}>
      <TabsList>
        <TabsTrigger value="main" className="data-[state=active]:bg-tree-poppy-600 data-[state=active]:text-white">Main</TabsTrigger>
        <TabsTrigger value="browse" asChild>
          <Browse
            Albums={Albums}
            Playlists={Playlists}
            Tracks={Tracks}
            changeCurr={(value) => setCurr(value)}
            className="data-[state=active]:bg-tree-poppy-600 data-[state=active]:text-white"
          />
        </TabsTrigger>
        <TabsTrigger value="test" className="data-[state=active]:bg-tree-poppy-600 data-[state=active]:text-white">
          <Person className="h-4 w-4" />
          Friends
        </TabsTrigger>
        <TabsTrigger value="test" className="data-[state=active]:bg-tree-poppy-600 data-[state=active]:text-white">
          <VinylRecord className="h-4 w-4" />
          DJ
        </TabsTrigger>
      </TabsList>

      <TabsContent value="main">
        <Main Albums={Albums} Playlists={Playlists} Tracks={Tracks} />
      </TabsContent>
    </Tabs>
  );
}
