
import { useContext } from "react";
import { Circle } from "@phosphor-icons/react";
import { useObjectives } from "../utils/useObjectives";
import "./objectiveTracker.css"

export const ObjectiveTracker = () => {
  const { currentObjective } = useObjectives();

  return (
    <div className="tracker" role="list">
        <ul>
          <li><Circle/>Fill in "Gustav" into username field</li>
        </ul>
    </div>
  );
};
