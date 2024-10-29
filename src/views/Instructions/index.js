import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import StarScreen from "../../assets/videos/StarScreen.mp4";
import "./instructions.css";
import { useObjectives } from "../../utils/useObjectives";
import { replaceWithBold } from "../../utils/replaceWithBold";

const Instructions = () => {
  const bgVideo = useRef(null);

  useEffect(() => {
    bgVideo.current.playbackRate = 0.5;
  }, []);

  const {
    currentProfile: { name, description, objective },
  } = useObjectives();

  return (
    <div className="instructions">
      <div className="modal">
        <h3>{`Profil: ${name}`}</h3>
        <h3>Uppgift</h3>
        <p>{description && replaceWithBold(description, "*")}</p>
        <p>
          <b>Uppgift:</b>
          <br />
          {objective && replaceWithBold(objective, "*")}
          <br />
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
