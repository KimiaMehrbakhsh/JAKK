export interface Album {
  mbid: string;
  name: string;
  artist: string;
  cover: ClientCover;
}

export interface ClientCover {
  url: string;
  width?: number | null;
  height?: number | null;
}

export interface Cover {
  size: string;
  "#text": string;
}

export interface AlbumArtworkProps
  extends React.HTMLAttributes<HTMLDivElement> {
  album: Album | Playlist | Track;
  width?: number | null;
  height?: number | null;
  playlists?: Playlist[];
}
export interface PlaylistArtworkProps
  extends React.HTMLAttributes<HTMLDivElement> {
  playlist: Playlist;
  width?: number | null;
  height?: number | null;
  tracks: Track[];
}

export interface AppProps extends React.HTMLAttributes<HTMLDivElement> {
  Albums: Album[];
  Playlists: Playlist[];
  Tracks: Track[];
}

export interface BrowseProps extends React.HTMLAttributes<HTMLButtonElement> {
  Albums: Album[];
  Playlists: Playlist[];
  Tracks: Track[];
  changeCurr?: (v: string) => void;
}

export interface RecordProps {
  radiusPercentage: number;
}

export interface Playlist {
  id: string;
  name: string;
  artist: string;
  cover: ClientCover;
  tracks: PlaylistTracks[];
}

export interface PlaylistTracks {
  trackId: string;
  added_at?: string;
}

export interface Track {
  added_at?: string;
  id: string;
  name: string;
  explicit: boolean;
  duration_ms: number;
  url?: string;
  artist: string;
  cover: ClientCover;
}

export interface User {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  sex: string;
  avatar: string;
  following: string[];
}
