import { useContext, createContext, useEffect, useState } from "react";
import objectives from "./objectives.json";

const ObjectiveContext = createContext({});

export const ObjectiveContextProvider = ({ children }) => {
  const [currentProfile, setCurrentProfile] = useState({});
  const [showTracker, setShowTracker] = useState(false);

  useEffect(() => {
    setCurrentProfile(objectives.standard[0]);
  }, []);

  const contextValues = {
    currentProfile,
    setCurrentProfile,
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
