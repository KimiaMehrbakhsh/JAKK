"use client";
import { RecordProps } from "@/lib/def";
import { useState } from "react";
import { VerticalSlider, Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { formatDuration, findTrackInPlaylist } from "@/lib/helper";
import ReactAudioPlayer from "react-audio-player";

import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
  SpeakerHigh,
} from "@phosphor-icons/react";

export default function Record({
  Tracks,
  onPlayNext,
  onPlayPrevious,
  currentTrack,
}: RecordProps) {
  const viewBoxSize = 504;
  const circleRadius = 10;
  const clipPathRadius = 87.6;
  const imageWidth = circleRadius * 2 * 8.8; // Adjust multiplier as needed
  const imageHeight = circleRadius * 2 * 8.8; // Adjust multiplier as needed
  const imageUrl = findTrackInPlaylist(Tracks, currentTrack!.trackId)!.cover
    .url;
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  {
    /* <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools --> */
  }
  return (
    <>
      <div className="flex">
        <div className="h-9/12 -ml-4 flex flex-col items-center justify-between">
          <VerticalSlider
            defaultValue={[33]}
            max={100}
            step={1}
            className="my-3 h-full"
          />
          <Button variant="outline" size="icon">
            <SpeakerHigh className="h-4 w-4" />
          </Button>
        </div>
        <svg
          version="1.1"
          id="Layer_1"
          className="my-3 h-[30vh] w-[30vw]"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          xmlSpace="preserve"
          fill="#000000"
        >
          {/* Rest of your SVG content */}
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#354E5C"
              d="M252,2C114,2,2,114,2,252s112,250,250,250s250-112,250-250S390,2,252,2z"
            />
            <circle
              fill="#F47C0B"
              cx="252"
              stroke="#000000"
              strokeWidth="10"
              cy="252"
              r={clipPathRadius}
            />
            <circle fill="#F4EFEF" cx="252" cy="252" r={circleRadius} />
            <path d="M252,504C110.8,504,0,393.2,0,252S110.8,0,252,0s252,110.8,252,252S393.2,504,252,504z M252,8C115.2,8,8,115.2,8,252 s107.2,244,244,244s244-107.2,244-244S388.8,8,252,8z" />
            <path d="M136.4,256c-2.4,0-4-1.6-4-4c0-66,53.6-119.6,119.6-119.6c2.4,0,4,1.6,4,4s-1.6,4-4,4c-61.6,0-111.6,50-111.6,111.6 C140.4,254.4,138.4,256,136.4,256z" />
            <path d="M252,371.6c-2.4,0-4-1.6-4-4s1.6-4,4-4c61.6,0,111.6-50,111.6-111.6c0-2.4,1.6-4,4-4s4,1.6,4,4 C371.6,318,318,371.6,252,371.6z" />
            <path d="M104,256c-2.4,0-4-1.6-4-4c0-84,68.4-152,152-152c2.4,0,4,1.6,4,4s-1.6,4-4,4c-79.6,0-144,64.8-144,144 C108,254.4,106,256,104,256z" />
            <path d="M252,404c-2.4,0-4-1.6-4-4s1.6-4,4-4c79.6,0,144-64.8,144-144c0-2.4,1.6-4,4-4s4,1.6,4,4C404,336,336,404,252,404z" />
            <path d="M72,256c-2.4,0-4-1.6-4-4c0-101.2,82.4-184,184-184c2.4,0,4,1.6,4,4s-1.6,4-4,4c-96.8,0-176,78.8-176,176 C76,254.4,74.4,256,72,256z" />
            <path d="M252,436c-2.4,0-4-1.6-4-4s1.6-4,4-4c96.8,0,176-78.8,176-176c0-2.4,1.6-4,4-4s4,1.6,4,4C436,353.2,353.2,436,252,436z" />
            <path d="M40.4,256c-2.4,0-4-1.6-4-4c0-118.8,96.8-215.6,215.6-215.6c2.4,0,4,1.6,4,4s-1.6,4-4,4C137.6,44.4,44.4,137.6,44.4,252 C44.4,254.4,42.8,256,40.4,256z" />
            <path d="M252,467.6c-2.4,0-4-1.6-4-4s1.6-4,4-4c114.4,0,207.6-93.2,207.6-207.6c0-2.4,1.6-4,4-4s4,1.6,4,4 C467.6,370.8,370.8,467.6,252,467.6z" />
            <path d="M252,268c-8.8,0-16-7.2-16-16s7.2-16,16-16s16,7.2,16,16S260.8,268,252,268z M252,244c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8 S256.4,244,252,244z" />
          </g>
          <defs>
            <clipPath id="clipPath">
              <circle cx="252" cy="252" r={clipPathRadius} />
            </clipPath>
          </defs>
          <g clipPath="url(#clipPath)">
            {/* Center the image within the clipping path */}
            <image
              x="50%"
              y="50%"
              width={imageWidth}
              height={imageHeight}
              href={imageUrl}
              transform={`translate(-${clipPathRadius}, -${clipPathRadius})`}
            />
          </g>
        </svg>
      </div>
      <div className="space-y-2 text-center">
        <h3 className="line-clamp-1 max-h-8 overflow-hidden text-xl font-bold leading-none">
          {findTrackInPlaylist(Tracks, currentTrack!.trackId)!.name}
        </h3>
        <p className="text-muted-foreground line-clamp-1 max-h-6 overflow-hidden font-light">
          By: {findTrackInPlaylist(Tracks, currentTrack!.trackId)!.artist}
        </p>
      </div>
      <div>
        <ReactAudioPlayer
          src={findTrackInPlaylist(Tracks, currentTrack!.trackId)!.url}
          autoPlay={isPlaying}
        />
        <Button variant="outline" size="icon" onClick={onPlayPrevious}>
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handlePlayPause}>
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <Button variant="outline" size="icon" onClick={onPlayNext}>
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex w-9/12 items-center justify-between">
        <p>0:00</p>
        <Slider max={100} step={1} className="mx-4 w-full" />
        <p>
          {formatDuration(
            findTrackInPlaylist(Tracks, currentTrack!.trackId)!.duration_ms,
          )}
        </p>
      </div>
    </>
  );
}
