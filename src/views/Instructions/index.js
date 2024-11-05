import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StarScreen from "../../assets/videos/StarScreen.mp4";
import "./instructions.css";
import { useObjectives } from "../../utils/useObjectives";
import { handleInstructions } from "../../utils/handleInstructions";

const Instructions = () => {
  const bgVideo = useRef(null);

  useEffect(() => {
    bgVideo.current.playbackRate = 0.5;
  }, []);

  const {
    currentProfile: { title, navigation, objective },
  } = useObjectives();

  const navigate = useNavigate();

  return (
    <div className="instructions">
      <div className="modal">
        <h3>{title}</h3>
        <label>
          <b>Navigering</b>
        </label>
        <ol type="a">
          {navigation &&
            navigation.map((paragraph) => {
              return <li>{handleInstructions(paragraph)}</li>;
            })}
        </ol>
        <label>
          <b>Uppgift:</b>
        </label>
        <ol>
          {objective &&
            objective.map((paragraph) => {
              return <li>{handleInstructions(paragraph)}</li>;
            })}
        </ol>
        <button role="link" className="linkButton" onClick={() => navigate("/good")}>
          Sätt igång!
        </button>
      </div>
      <video ref={bgVideo} className="bgVideo" autoPlay loop muted>
        <source src={StarScreen} type="video/mp4" />
      </video>
    </div>
  );
};

export default Instructions;
