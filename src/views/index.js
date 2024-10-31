import { useNavigate } from "react-router-dom";
import { ReactComponent as TrettonLogo } from "../assets/images/tretton37_green.svg";
import "./home.css";
import { useObjectives } from "../utils/useObjectives";

const Home = () => {
  const { setShowTracker } = useObjectives();
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="titles">
        <TrettonLogo className="logo" alt="tretton37 logotype" role="img" />
        {/* Temp */}
        <h1>Accessability Demo</h1>
      </div>
      <div className="buttonContainer">
        <button role="link" onClick={() => navigate("/instructions")}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Home;
