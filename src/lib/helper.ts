// playlist array pop and push , (Fifo) (qUue .append )
// implement a helper .ts file that will help with adding and removing the songs from playlist 
import { Playlist, Track } from '@/lib/def'; // Replace with the actual path to your interface file

export class PlaylistHelper {
  // Add a track to the playlist
  static addTrackToPlaylist(playlist: Playlist, track: Track): Playlist {
    const newPlaylist: Playlist = { ...playlist };

    newPlaylist.tracks.push(track);

    return newPlaylist;
  }

  // Remove the first track from the playlist
  static removeFirstTrackFromPlaylist(playlist: Playlist): Playlist {
    const newPlaylist: Playlist = { ...playlist };

    // im  using .shift to remove the first track from the playlist
    newPlaylist.tracks.shift();

    return newPlaylist;
  }
}
