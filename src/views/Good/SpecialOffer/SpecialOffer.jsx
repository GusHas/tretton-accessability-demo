import { failState } from "../../../utils/failState";
import "./SpecialOffer.css";

export const SpecialOffer = ({
  i,
  label,
  text,
  image,
  imageAlt,
  link,
  linkFail,
  button,
  buttonFail,
  price,
}) => {
  const isIndexEven = i % 2 === 0 || i === 0;

  return (
    <div className={`${isIndexEven ? "specialUneven" : "specialEven"}`}>
      <div className="specialOfferContent">
        <label>{label}</label>
        <p>{text}</p>
        {price && <h4>{price}</h4>}
        {button && (
          <button onClick={() => failState(buttonFail)}>{button}</button>
        )}
        {link && (
          <a onClick={() => failState(linkFail)} tabIndex={0}>
            {link}
          </a>
        )}
      </div>
      <img src={image} alt={imageAlt} className="specialOfferPhoto" />
    </div>
  );
};
