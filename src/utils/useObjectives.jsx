import { useContext, createContext, useEffect, useState } from "react";
import freshObjectives from "./objectives.json";

const ObjectiveContext = createContext({})

export const ObjectiveContextProvider = ({ children }) => {
  const [objectives, setObjectives] = useState({});
  const [currentProfile, setCurrentProfile] = useState({})
  const [currentObjective, setCurrentObjective] = useState({});
  const [showTracker, setShowTracker] = useState(false);

  useEffect(() => {
    setObjectives(freshObjectives);
    setCurrentProfile(freshObjectives.ableBodied);
    setCurrentObjective(freshObjectives.ableBodied.objectives[0]);
  }, []);

  const contextValues = {
    objectives,
    setObjectives,
    currentProfile,
    setCurrentProfile,
    currentObjective,
    setCurrentObjective,
    showTracker,
    setShowTracker,
  };

  return (
    <ObjectiveContext.Provider value={contextValues}>
      {children}
    </ObjectiveContext.Provider>
  );
};

export const useObjectives = () => useContext(ObjectiveContext);
