import { useState } from "react";
import { TopBar } from "./TopBar/TopBar";
import { SlideShow } from "./SlideShow/SlideShow";
import { PackageItem } from "./PackageItem/PackageItem";
import { packagesOffers, holidayOffers } from "./objects";
import { CaretRight } from "@phosphor-icons/react";
import "./good.css";
import { ReactComponent as TrettonLogo } from "../../assets/images/tretton37_black.svg";
import safariPhoto from "../../assets/images/safari.png";
import allYearDealPhoto from "../../assets/images/all-year-deal.png";
import rocketPhoto from "../../assets/images/rocket-weekend.png";

const GoodSite = () => {
  const [errors, setErrors] = useState([]);
  function submit() {
    setErrors([...errors, "HEJ DU GJORDE FEL"]);
  }

  return (
    <div className="good">
      <div className="" aria-live="assertive">
        <TopBar />
        <SlideShow />
        <div className="vacationMenu">
          <h3>Njut av planterena med våra paketerbjudande</h3>
          <div className="horizontalMenu">
            {packagesOffers.map((offer) => (
              <PackageItem {...offer} />
            ))}
          </div>
          <div className="holidayOffers">
            {holidayOffers.map((offer) => (
              <button className="holidayButton">
                {offer}
                <CaretRight className="icon" />
              </button>
            ))}
          </div>
          <div className="randomOffers">
            <div className="randomUneven">
              <div className="randomOfferContent">
                <label>Starta vintersäsongen med raket Weekends</label>
                <p>
                  Prova nya raket och utrustning från välkända leverantörer
                  gratis! Delta i tävlingar och mycket mer.
                </p>
                <a>Se datum</a>
              </div>
              <img
                src={rocketPhoto}
                alt="rocket launch"
                className="randomOfferPhoto"
              />
            </div>
            <div className="randomEven">
              <div className="randomOfferContent">
                <label>Skidåkarpaket på våra lodger och hotell</label>
                <p>
                  Upplev rymdmagin i venus med våra exklusiva safaripaket som
                  inkluderar bådesafari för timvis av lättillgänglig vandring.
                  Boka idag och säkra din plats för en oförglömlig upplevelse!
                </p>
                <h4>Från 200 995 SEK/person</h4>
                <button>Se alla skidåkarpaket</button>
              </div>
              <img
                src={safariPhoto}
                alt="sandy dunes"
                className="randomOfferPhoto"
              />
            </div>
            <div className="randomUneven">
              <div className="randomOfferContent">
                <label>Raketstart All Year</label>
                <p>
                  Aktivera dig året runt i rymden. Med abonnemanget All Year,
                  som är exklusivt för medlemmar i raket Member, kan du uppleva
                  över 11 planeter, 50 annläggningar, safari vandringar, 100
                  cykelleder och en massa andra roliga aktiviteter.
                </p>
                <h4>Från 835 000 SEK/månad</h4>
                <a>Läs mer om raket All Year</a>
              </div>
              <img
                src={allYearDealPhoto}
                alt="tourists covered in protective clothing from desert environment"
                className="randomOfferPhoto"
              />
            </div>
          </div>
        </div>
        <div className="bottomBar">
            <div className="logoBar">
              <TrettonLogo className="trettonLogo"/>
            </div>
            <div className="footer">
              <button className="altButton">Nästa Upplevelse</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GoodSite;
