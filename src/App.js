import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views";
import BadSite from "./views/Bad";
import GoodSite from "./views/Good";
import { ObjectiveTracker } from "./components/objectiveTracker";
import { useObjectives } from "./utils/useObjectives";
import Instructions from "./views/Instructions";
import objectives from "./utils/objectives.json";

const App = () => {
  const { showTracker, currentProfile } = useObjectives();

  return (
    <div className="App" style={{cursor: currentProfile === objectives.standard[1] && "none"}}>
      {showTracker && <ObjectiveTracker />}
      {/* {currentProfile === objectives.standard[2] && <div className="blindFilter"/>} */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/bad" element={<BadSite />}></Route>
        <Route path="/good" element={<GoodSite />}></Route>
      </Routes>
    </div>
  );
};

export default App;
