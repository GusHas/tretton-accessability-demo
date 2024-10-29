import { Link } from "react-router-dom";
import { ReactComponent as TrettonLogo } from "../assets/images/tretton37_green.svg";
import "./home.css";
import { useObjectives } from "../utils/useObjectives";

const Home = () => {
  const { setShowTracker } = useObjectives();

  return (
    <div className="home">
      <div className="titles">
        <TrettonLogo className="logo" alt="tretton37 logotype" role="img" />
        {/* Temp */}
        <h1>Accessability Demo</h1>
      </div>
      <div className="buttonContainer">
      <Link to="/instructions" onClick={() => setShowTracker(true)}>
        <button role="link">Start</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
