import { ReactComponent as TabIcon } from "../assets/icons/Tab knapp.svg";
import { ReactComponent as ShiftIcon } from "../assets/icons/Shift knapp.svg";

export const replaceWithIcons = (text) => {
  let tempText = text;
  if (Array.isArray(tempText)) {
    for (const [i, t] of tempText) {
      if (typeof phrase === "string") {
        tempText[i] = text[i]
          .replace("^Shift^", ShiftIcon)
          .replace("^Tab^", TabIcon);
      }
    }
    return tempText;
  } else {
    return tempText.replace("^Shift^", ShiftIcon).replace("^Tab^", TabIcon);
  }
};
