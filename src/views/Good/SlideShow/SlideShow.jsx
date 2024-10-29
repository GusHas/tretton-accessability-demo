import { useRef, useEffect } from "react";
import StarScreen from "../../../assets/videos/StarScreen.mp4";
import "./SlideShow.css"

export const SlideShow = () => {
  const bgVideo = useRef(null);

  useEffect(() => {
    bgVideo.current.playbackRate = 0.5;
  }, []);

  return (
    <div className="slideShow">
      <video ref={bgVideo} className="bgVideo" autoPlay loop muted>
        <source src={StarScreen} type="video/mp4" />
      </video>
    </div>
  );
};
