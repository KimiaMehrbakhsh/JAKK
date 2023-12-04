// // playlist array pop and push , (Fifo) (qUue .append )
// // implement a helper .ts file that will help with adding and removing the songs from playlist
// import { Playlist, Track } from '@/lib/def'; // Replace with the actual path to your interface file

// export class PlaylistHelper {
//   // Add a track to the playlist
//   static addTrackToPlaylist(playlist: Playlist, track: Track): Playlist {
//     const newPlaylist: Playlist = { ...playlist };

//     newPlaylist.tracks.push(track);

//     return newPlaylist;
//   }

//   // Remove the first track from the playlist
//   static removeFirstTrackFromPlaylist(playlist: Playlist): Playlist {
//     const newPlaylist: Playlist = { ...playlist };

//     // im  using .shift to remove the first track from the playlist
//     newPlaylist.tracks.shift();

//     return newPlaylist;
//   }
// }

import { PlaylistArtworkProps, Track } from "@/lib/def";

export function formatDuration(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Use padStart to ensure two digits for seconds and one digit for minutes
  const formattedMinutes = String(minutes).padStart(1, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

export function findTrackInPlaylist(
  tracks: Track[],
  trackId: string,
): Track | undefined {
  const foundTrack = tracks.find((track) => track.id === trackId);
  if (foundTrack) {
    return foundTrack;
  }

  return undefined;
}
