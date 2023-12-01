export interface Album {
  name: string;
  artist: string;
  cover: ClientCover;
}

export interface ClientCover {
  url: string;
  height?: number;
  width?: number;
}

export interface Cover {
  size: string;
  "#text": string;
}

export interface AlbumArtworkProps
  extends React.HTMLAttributes<HTMLDivElement> {
  album: Album | Playlist;
  width?: number;
  height?: number;
  playlists?: Playlist[];
}

export interface Playlist {
  id: string;
  name: string;
  artist: string;
  cover: ClientCover;
  tracks: Track[];
}

export interface Track {
  id: string;
  name: string;
  explicit: boolean;
  duration_ms: number;
  preview_url: string;
  artists: string;
  added_at: string;
}
