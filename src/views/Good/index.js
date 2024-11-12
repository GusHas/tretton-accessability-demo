import { useRef, useState } from "react";
import { TopBar } from "./TopBar/TopBar";
import { SlideShow } from "./SlideShow/SlideShow";
import { PackageItem } from "./PackageItem/PackageItem";
import { packagesOffers, holidayOffers, specialOffers } from "./objects";
import { CaretRight } from "@phosphor-icons/react";
import "./good.css";
import { ReactComponent as TrettonLogo } from "../../assets/images/tretton37_black.svg";
import { useObjectives } from "../../utils/useObjectives";
import objectives from "../../utils/objectives.json";
import { useNavigate } from "react-router-dom";
import { failState } from "../../utils/failState";
import { SpecialOffer } from "./SpecialOffer/SpecialOffer";
import { CookieModal } from "./CookieModal/CookieModal";

const GoodSite = () => {
  const contentRef = useRef(null);

  const [errors, setErrors] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  function submit() {
    setErrors([...errors, "HEJ DU GJORDE FEL"]);
  }

  const {
    currentProfile: { index: objectiveIndex },
    setCurrentProfile,
  } = useObjectives();
  const navigate = useNavigate();

  return (
    <>
      <a
        inert={isOpen ? "" : undefined}
        className="skipLink"
        tabIndex={1}
        role="link"
        onClick={() => contentRef.current.scrollIntoView()}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") &&
          contentRef.current.scrollIntoView()
        }
      >
        Gå till innehåll
      </a>
      {isOpen && <CookieModal setIsOpen={() => setIsOpen(false)} />}
      <div className="" aria-live="assertive" inert={isOpen ? "" : undefined}>
        <TopBar />
        <SlideShow />
        <div className="vacationMenu" ref={contentRef}>
          <h3>Njut av planterena med våra paketerbjudande</h3>
          <div className="horizontalMenu">
            {packagesOffers.map((offer) => (
              <PackageItem key={offer.packageName} {...offer} />
            ))}
          </div>
          <div className="holidayOffers">
            {holidayOffers.map((offer) => (
              <button
                key={offer}
                role="link"
                className="holidayButton"
                onClick={() => failState("Du är inte för att shoppa")}
              >
                {offer}
                <CaretRight className="icon" />
              </button>
            ))}
          </div>
          <div className="specialOffers">
            {specialOffers.map((offer, i) => (
              <SpecialOffer i={i} key={offer.label} {...offer} />
            ))}
          </div>
        </div>
        <div className="bottomBar">
          <div className="logoBar">
            <TrettonLogo className="trettonLogo" />
          </div>
          <div className="footer">
            <button
              className="altButton"
              onClick={async () => {
                await setCurrentProfile(
                  objectiveIndex === objectives.standard.length - 1
                    ? objectives.standard[0]
                    : objectives.standard[objectiveIndex + 1]
                );
                navigate(
                  objectiveIndex === objectives.standard.length - 1
                    ? "/"
                    : "/instructions"
                );
              }}
            >
              Nästa Upplevelse
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoodSite;
