import { ReactComponent as TabIcon } from "../assets/icons/Tab knapp.svg";
import { ReactComponent as ShiftIcon } from "../assets/icons/Shift knapp.svg";

export const handleInstructions = (text) =>
  text
    .split("*")
    .join(",")
    .split("^")
    .join(",")
    .split(",")
    .map((t, i) => {
      if (Math.abs(i % 2) === 1) {
        if (t === "Tab") {
          return (
            <span>
              <TabIcon />
            </span>
          );
        } else if (t === "Shift") {
          return (
            <span>
              <ShiftIcon />
            </span>
          );
        } else {
          return <b>{t}</b>;
        }
      } else {
        return t;
      }
    });
