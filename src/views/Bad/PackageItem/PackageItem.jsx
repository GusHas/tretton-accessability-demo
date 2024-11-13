import { failState } from "../../../utils/failState";
import "./PackageItem.css";
import { Tag } from "@phosphor-icons/react";

export const PackageItem = ({
  packageName,
  planetName,
  image,
  inclBreakfast,
  dayNumber,
  dates,
  price,
}) => {
  return (
    <a className="packageItem"
    tabindex={0}
      onClick={() => failState(`Vi kan inte åka till ${planetName} än`)}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") &&
        failState(`Vi kan inte åka till ${planetName} än`)
      }
    >
      <div tabIndex={0}>
        <div className="imageContainer">
          <img className="image" src={image} />
          {inclBreakfast && (
            <div className="breakfastDeal">
              <span>
                <Tag className="icon" />
                inkl. frukost
              </span>
            </div>
          )}
        </div>
        <div className="packageInfo">
          <h4>{packageName}</h4>
          <span>{planetName}</span>
          <div className="pricePerDayInfo">
            <div className="dateInfo">
              <span>
                <b>{dayNumber} dagar</b>
              </span>
              <span>{dates}</span>
            </div>
            <div className="priceInfo">
              <h4>{price} SEK</h4>
              <span>Frånpris per person</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
