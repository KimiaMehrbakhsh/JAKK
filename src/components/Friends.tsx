"use client";
import { FriendsProps, User } from "@/lib/def";
import { Ref, forwardRef, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Person, Plus, XCircle } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const Friends = forwardRef(
  (
    { Users, CurrUser, Tracks, className, changeCurr, ...props }: FriendsProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const [open, setOpen] = useState(false);

    function findUser(username: string): User | undefined {
      const found = Users.find((user) => user.username === username);

      if (found) {
        return found;
      }

      return undefined;
    }

    function RandomTrack() {
      const randomIndex = Math.floor(Math.random() * Tracks.length);
      const randomTrack = Tracks[randomIndex];

      return (
        <>
          <h3 className="line-clamp-1 h-max overflow-hidden font-medium">
            {randomTrack!.name}
          </h3>
          <p className="text-muted-foreground line-clamp-1 h-max overflow-hidden font-light">
            {randomTrack!.artist}
          </p>
        </>
      );
    }

    useEffect(() => {
      if (!open) {
        changeCurr!("main");
      }
    }, [open]);
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger className={cn(className)} ref={ref}>
          <>
            <Person className="h-4 w-4" />
            Friends
          </>
        </AlertDialogTrigger>
        <AlertDialogContent className="flex h-3/4 w-3/4 max-w-none flex-col rounded-3xl">
          <AlertDialogHeader className="flex h-fit w-full flex-row items-center justify-between space-y-0 ">
            <AlertDialogTitle className="text-2xl font-bold">
              Your Friends
            </AlertDialogTitle>
            <AlertDialogCancel className="mt-0 bg-tree-poppy-500 hover:bg-tree-poppy-600">
              <XCircle className="h-4 w-4 text-white" />
            </AlertDialogCancel>
          </AlertDialogHeader>
          <div className="flex flex-wrap overflow-x-auto">
            {CurrUser.following.map((username, index) =>
              findUser(username) !== undefined ? (
                <div
                  key={index}
                  className="h-30 m-2 flex flex-auto items-center justify-between space-x-4 rounded-lg border p-6"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={findUser(username)!.avatar} />
                      <AvatarFallback>
                        <Person />
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="h-max overflow-hidden text-xl font-extrabold">
                        {findUser(username)!.first_name}{" "}
                        {findUser(username)!.last_name}
                      </h3>
                      <RandomTrack />
                    </div>
                  </div>
                  <Button
                    className="h-16 w-auto bg-tree-poppy-500 font-bold text-white hover:bg-tree-poppy-600 hover:text-white"
                    variant="outline"
                  >
                    <Plus className="mr-2 h-4 w-4" /> React
                  </Button>
                </div>
              ) : null,
            )}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
);

export default Friends;
