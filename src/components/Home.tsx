"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Browse from "@/components/Browse";
import Friends from "@/components/Friends";
import Main from "@/components/Main";
import DJTool from "@/components/DJTool";
import { Albums, Playlists, Tracks, Users } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Person, VinylRecord } from "@phosphor-icons/react";

export default function Home() {
  const [curr, setCurr] = useState("main");

  function changeCurr(value: string) {
    setCurr(value);
  }

  return (
    <Tabs value={curr} onValueChange={changeCurr}>
      <div className="flex h-fit w-full justify-between">
        <TabsList>
          <TabsTrigger
            value="main"
            className="data-[state=active]:bg-tree-poppy-600 data-[state=active]:text-white"
          >
            Main
          </TabsTrigger>
          <TabsTrigger value="browse" asChild>
            <Browse
              Albums={Albums}
              Playlists={Playlists}
              Tracks={Tracks}
              changeCurr={(value: string) => setCurr(value)}
              className="data-[state=active]:bg-tree-poppy-600 data-[state=active]:text-white"
            />
          </TabsTrigger>
          <TabsTrigger value="friends" asChild>
            <Friends
              Users={Users}
              Tracks={Tracks}
              CurrUser={Users[0]!}
              changeCurr={(value: string) => setCurr(value)}
              className="data-[state=active]:bg-tree-poppy-600 data-[state=active]:text-white"
            />
          </TabsTrigger>
          <TabsTrigger
            value="dj"
            className="data-[state=active]:bg-tree-poppy-600 data-[state=active]:text-white"
          >
            <VinylRecord className="h-4 w-4" />
            DJ
          </TabsTrigger>
        </TabsList>
        <Avatar>
          <AvatarImage className="object-fit" src="/pfp.jpeg" />
          <AvatarFallback>
            <Person />
          </AvatarFallback>
        </Avatar>
      </div>

      <TabsContent value="main">
        <Main Albums={Albums} Playlists={Playlists} Tracks={Tracks} />
      </TabsContent>
      <TabsContent value="dj">
        <div className="container mx-auto p-7">
          <h1 className="mb-5 text-5xl font-bold">AI-Powered DJ </h1>
          <DJTool />

          {/* Button at the bottom middle */}
          <div className="mt-8 flex justify-center">
            <button className="rounded-full bg-yellow-500 px-6 py-3 text-white">
              Light Em Up
            </button>
          </div>
        </div>{" "}
      </TabsContent>
    </Tabs>
  );
}
