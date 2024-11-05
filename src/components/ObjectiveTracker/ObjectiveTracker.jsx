import { Circle } from "@phosphor-icons/react";
import { useObjectives } from "../../utils/useObjectives";
import "./ObjectiveTracker.css";

export const ObjectiveTracker = () => {
  const { currentProfile } = useObjectives();

  return (
    <div className="tracker" role="list">
      <label>{currentProfile.name}</label>
      <ul>
        <li>
          <Circle weight="fill" />
          {currentProfile.objective}
        </li>
      </ul>
    </div>
  );
};
