import { Album, Cover, Playlist, Track, ClientCover } from "./def";
const LAST_FM_USERNAME = "NemoCatalog";
const SPOTIFY_USER_ID = "12184655026";
const LAST_FM_API_KEY = process.env.NEXT_PUBLIC_LAST_FM_API_KEY;
const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

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
  
  //   const {
//     topalbums,
//   } = await res.json();
// //: { album },

//   if (!topalbums) {
//     console.error('topalbums is undefined in the API response.')
//   }else {
//     const { album } = topalbums;
//   }

//   if(!topalbums){
//     return []
//   }

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
        width: 300,
        height: 300,
      };

      return {
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

    const { items: trackItems } = await tracksResponse.json();
    const tracks: Track[] = [];

    for (const item of trackItems) {
      const track = item.track;
      tracks.push({
        id: track.id,
        name: track.name,
        explicit: track.explicit,
        duration_ms: track.duration_ms,
        artists: track.artists.map((artist: any) => artist.name).join(", "),
        preview_url: track.preview_url,
        added_at: track.added_at,
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
      tracks,
    };

    playlists.push(playlistWithTracks);
  }

  return playlists;
}
