import {
  Album,
  Cover,
  Playlist,
  Track,
  ClientCover,
  PlaylistTracks,
} from "./def";
const LAST_FM_USERNAME = "NemoCatalog";
const SPOTIFY_USER_ID = "12184655026";
const LAST_FM_API_KEY = "ADD";
const SPOTIFY_CLIENT_ID = "ADD";
const SPOTIFY_CLIENT_SECRET = "ADD";
export const fetchedTracks: Track[] = [];

async function getSpotifyToken(): Promise<string> {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET,
      ).toString("base64")}`,
    },
  });

  const { access_token } = await response.json();
  return access_token;
}

export async function fetchAlbums(): Promise<Album[]> {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${LAST_FM_USERNAME}&api_key=${LAST_FM_API_KEY}&format=json`,
  );
  const {
    topalbums: { album },
  } = await res.json();

  if (!album) {
    return [];
  }

  const transformed: Album[] = await Promise.all(
    album.map(async (albumItem: any) => {
      const covers =
        albumItem.image.map((cover: Cover) => ({
          size: cover.size,
          "#text": cover["#text"],
        })) || [];

      const largestCoverUrl = covers.reduce(
        (prev: string, current: Cover) =>
          getSizeOrder(current.size) > getSizeOrder(prev)
            ? current["#text"]
            : prev,
        covers[0]?.["#text"] || "", // Provide an empty string as the initial value
      );

      const largestCover: ClientCover = {
        url: largestCoverUrl,
      };

      return {
        mbid: albumItem.mbid,
        name: albumItem.name,
        artist: albumItem.artist.name,
        cover: largestCover,
      };
    }),
  );

  return transformed;
}

function getSizeOrder(size: string): number {
  switch (size) {
    case "extralarge":
      return 4;
    case "large":
      return 3;
    case "medium":
      return 2;
    case "small":
      return 1;
    default:
      return 0;
  }
}

export async function fetchPlaylists(): Promise<Playlist[]> {
  const accessToken = await getSpotifyToken();

  const [featuredPlaylistsResponse, userPlaylistsResponse] = await Promise.all([
    fetch("https://api.spotify.com/v1/browse/featured-playlists?limit=5", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
    fetch(`https://api.spotify.com/v1/users/${SPOTIFY_USER_ID}/playlists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  ]);

  const { items: userPlaylistItems } = await userPlaylistsResponse.json();
  const {
    playlists: { items: featuredPlaylistItems },
  } = await featuredPlaylistsResponse.json();

  const playlistItems = [...featuredPlaylistItems, ...userPlaylistItems];
  const playlists: Playlist[] = [];

  for (const playlist of playlistItems) {
    const tracksResponse = await fetch(
      `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const tracks: PlaylistTracks[] = [];

    for (const item of getTracks(await tracksResponse.json())) {
      tracks.push({
        added_at: item.added_at,
        trackId: item.id,
      });
    }

    const coverResponse = await fetch(
      `https://api.spotify.com/v1/playlists/${playlist.id}/images`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const cover = await coverResponse.json();
    const playlistCover: ClientCover = {
      url: cover[0].url,
      height: cover[0].height,
      width: cover[0].width,
    };

    const playlistWithTracks: Playlist = {
      id: playlist.id,
      name: playlist.name,
      artist: playlist.owner.display_name,
      cover: playlistCover,
      tracks: tracks,
    };

    playlists.push(playlistWithTracks);
  }

  return playlists;
}

function getTracks(res: any): Track[] {
  const tracks: Track[] = [];
  const { items: trackItems } = res;
  for (const item of trackItems) {
    const track = item.track;
    fetchedTracks.push({
      id: track.id,
      name: track.name,
      explicit: track.explicit,
      duration_ms: track.duration_ms,
      artist: track.artists.map((artist: any) => artist.name).join(", "),
      cover: track.album.images[0],
    });

    tracks.push({
      id: track.id,
      name: track.name,
      explicit: track.explicit,
      duration_ms: track.duration_ms,
      artist: track.artists.map((artist: any) => artist.name).join(", "),
      added_at: item.added_at,
      cover: track.album.images[0],
    });
  }

  return tracks;
}
