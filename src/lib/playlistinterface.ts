import { PlaylistHelper } from './helper'; 
import { Playlist, Track } from './def';

// Assuming we have a playlist and a track
const myPlaylist: Playlist = {
  id: '123',
  name: 'My Playlist',
  artist: 'Awesome Artist',
  cover: { url: 'cover-url' },
  tracks: [],
};

const myTrack: Track = {
  id: '456',
  name: 'Awesome Song',
  explicit: false,
  duration_ms: 300000,
  preview_url: 'song-preview-url',
  artists: 'Awesome Artist',
  added_at: '2023-12-01',
};

// Add a track to the playlist
const playlistWithAddedTrack = PlaylistHelper.addTrackToPlaylist(myPlaylist, myTrack);

// Remove the first track from the playlist
const playlistWithRemovedTrack = PlaylistHelper.removeFirstTrackFromPlaylist(myPlaylist);
