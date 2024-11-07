import { X } from "@phosphor-icons/react";
import { failState } from "../../utils/failState";
import "./CookieModal.css";

export const CookieModal = ({ setIsOpen }) => {
  const CheckBox = ({ id, label }) => {
    return (
      <div className="checkbox">
        <input type="checkbox" id={id} />
        <label for={id}>{label}</label>
      </div>
    );
  };

  return (
    <div className="cookieModal">
      <div
        className="popup"
        aria-hidden="false"
        aria-labelledby="dialogLabel"
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
        aria-label=""
      >
        <div className="topContent">
          <h3 id="dialogLabel">Ta gärna emot våra kakor</h3>
          <p>
            Den här webbplatsen använder kakor som hjälper oss att anpassa vårt
            inehåll och ge dig en bättre internetupplevese
          </p>
        </div>
        <div
          className="checkboxBox"
          role="group"
          aria-label="Kak-kategorigrupp"
        >
          <CheckBox id="necessity" label="Nödvändiga" />
          <CheckBox id="analysis" label="Analys & funktion" />
          <CheckBox id="marketing" label="Marknadsföring" />
        </div>
        <div className="buttonBox">
          <button onClick={setIsOpen}>Acceptera alla kakor</button>
          <button onClick={setIsOpen} className="altButton">
            Acceptera urval av kakor
          </button>
        </div>
        <div className="bottomContent">
          <a
            role="link"
            tabIndex={0}
            onClick={() => failState("Inget du kan anpassa just nu")}
          >
            Anpassa ditt val
          </a>{" "}
          /
          <a
            role="link"
            tabIndex={0}
            onClick={() =>
              failState(
                "Lyckligtvis behöver du inte bry dig om kakor på det här demot."
              )
            }
          >
            Cookies
          </a>{" "}
          /
          <a
            role="link"
            tabIndex={0}
            onClick={() => failState("Finns inget och läsa mer kring just nu")}
          >
            Läs mer
          </a>{" "}
          /
          <a
            role="link"
            tabIndex={0}
            onClick={() => failState('Här har vi ingen användning "lagen".')}
          >
            Rättsligt meddelande
          </a>
        </div>
        <div className="closeButton" role="button" onClick={setIsOpen} tabIndex={0}>
          <X className="icon" alt="nedstängningsknapp"/>
        </div>
      </div>
    </div>
  );
};
