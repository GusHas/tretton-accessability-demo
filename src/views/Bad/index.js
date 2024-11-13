import { useRef, useState } from "react";
import { TopBar } from "./TopBar/TopBar";
import { SlideShow } from "./SlideShow/SlideShow";
import { PackageItem } from "./PackageItem/PackageItem";
import { packagesOffers, holidayOffers, specialOffers } from "./objects";
import { CaretRight } from "@phosphor-icons/react";
import "./Bad.css";
import { ReactComponent as TrettonLogo } from "../../assets/images/tretton37_black.svg";
import { useObjectives } from "../../utils/useObjectives";
import objectives from "../../utils/objectives.json";
import { useNavigate } from "react-router-dom";
import { failState } from "../../utils/failState";
import { SpecialOffer } from "./SpecialOffer/SpecialOffer";
import { CookieModal } from "./CookieModal/CookieModal";

const BadSite = () => {
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
        onClick={() => contentRef.current.scrollIntoView()}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") &&
          contentRef.current.scrollIntoView()
        }
      >
        Gå till innehåll
      </a>
      {isOpen && <CookieModal setIsOpen={() => setIsOpen(false)} />}
      <div inert={isOpen ? "" : undefined}>
        <TopBar />
        <SlideShow />
        <div className="vacationMenu" ref={contentRef} tabIndex={0}>
          <h3>Njut av planterena med våra paketerbjudande</h3>
          <div className="horizontalMenu">
            {packagesOffers.map((offer) => (
              <PackageItem key={offer.packageName} {...offer} />
            ))}
          </div>
          <div className="holidayOffers" tabIndex={0}>
            {holidayOffers.map((offer) => (
              <a
                className="holidayButton"
                tabindex={0}
                onClick={() => failState("Du är inte för att shoppa")}
              >
                <button key={offer}>
                  {offer}
                  <CaretRight className="icon" />
                </button>
              </a>
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
            <a
              tabIndex={0}
              onClick={async () => {
                await setCurrentProfile(
                  objectives.standard[objectiveIndex + 1]
                );
                navigate("/instructions");
              }}
            >
              <button className="altButton">Nästa Upplevelse</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BadSite;
