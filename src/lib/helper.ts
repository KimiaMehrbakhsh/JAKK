import { PlaylistArtworkProps, Lyrics, Track } from "@/lib/def";

export function formatDuration(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Use padStart to ensure two digits for seconds and one digit for minutes
  const formattedMinutes = String(minutes).padStart(1, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedMinutes = minutes === 0 ? "0" : minutes;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
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

export function findLyricsByTrackId(Lyrics: Lyrics[], trackId: string) {
  const foundTrack = Lyrics.find((track) => track.trackId === trackId);

  if (foundTrack) {
    return foundTrack.words;
  } else {
    return []; // Return an empty array or handle the case where the track ID is not found
  }
}
