import { useRef, useEffect, useState } from "react";
import StarScreen from "../../../assets/videos/StarScreen.mp4";
import "./SlideShow.css";
import { Pause, Play } from "@phosphor-icons/react";

export const SlideShow = () => {
  const bgVideo = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    bgVideo.current.playbackRate = 0.5;
  }, []);

  useEffect(() => {
    isPlaying ? bgVideo.current.play() : bgVideo.current.pause();
  }, [isPlaying]);

  return (
    <div className="slideShow">
      <video ref={bgVideo} className="bgVideo" autoPlay loop muted>
        <source src={StarScreen} type="video/mp4" />
      </video>
      <div
        className="playButton"
        onClick={() => setIsPlaying(!isPlaying)}
        onKeyDown={(e) => e.key !== "Tab" && setIsPlaying(!isPlaying)}
        tabIndex={0}
      >
        {isPlaying ? <Pause weight="fill" /> : <Play weight="fill" />}
      </div>
    </div>
  );
};
