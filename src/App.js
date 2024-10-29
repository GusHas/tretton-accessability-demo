import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views";
import BadSite from "./views/Bad";
import GoodSite from "./views/Good";
import { ObjectiveTracker } from "./components/objectiveTracker";
import { useObjectives } from "./utils/useObjectives";
import Instructions from "./views/Instructions";

const App = () => {
  const { showTracker } = useObjectives();

  return (
    <div className="App">
      {showTracker && <ObjectiveTracker />}
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
