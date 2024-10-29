import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import StarScreen from "../../assets/videos/StarScreen.mp4";
import "./instructions.css";

const Instructions = () => {
  const bgVideo = useRef(null);

  useEffect(() => {
    bgVideo.current.playbackRate = 0.5;
  }, []);

  return (
    <div className="instructions">
      <div className="modal">
        <h3>Uppgift</h3>
        <p>Du kommer att få besöka en webbplats som säljer resor. </p>
        <p>
          Du kommer bara att kunna navigera dig genom att använda tangenten “
          <b>Tab</b>” på datorn{" "}
        </p>
        <p>
          <b>Uppgift:</b>
          <br />
          Använd knappen “<b>Tab</b>” och ta dig ner på sidan till en knapp där
          det står “<b>Nästa upplevelse</b>”
        </p>
        <Link className="linkButton" to="/good">
          <button role="link">Sätt igång!</button>
        </Link>
      </div>
      <video ref={bgVideo} className="bgVideo" autoPlay loop muted>
        <source src={StarScreen} type="video/mp4" />
      </video>
    </div>
  );
};

export default Instructions;
