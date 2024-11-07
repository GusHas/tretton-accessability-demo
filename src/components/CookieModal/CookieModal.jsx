import { X } from "@phosphor-icons/react";
import { failState } from "../../utils/failState";
import "./CookieModal.css";

export const CookieModal = ({ setIsOpen }) => {
  const CheckBox = ({ id, label }) => {
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          id={id}
          onKeyDown={(e) => e.key === "Enter" && e.target.click()}
        />
        <label for={id}>{label}</label>
      </div>
    );
  };

  const BottomLink = ({ label, failText, hasBreak }) => {
    return (
      <>
        <a
          role="link"
          tabIndex={0}
          onClick={() => failState(failText)}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && failState(failText)
          }
        >
          {label}
        </a>
        {hasBreak && " /"}
      </>
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
          <BottomLink
            failText="Inget du kan anpassa just nu"
            label="Anpassa ditt val"
            hasBreak
          />
          <BottomLink
            failText="Lyckligtvis behöver du inte bry dig om kakor på det här demot."
            label="Cookies"
            hasBreak
          />
          <BottomLink
            failText="Finns inget och läsa mer kring just nu"
            label="Läs mer"
            hasBreak
          />
          <BottomLink
            failText='Här har vi ingen användning för "lagen".'
            label="Rättsligt meddelande"
          />
        </div>
        <div
          className="closeButton"
          role="button"
          onClick={setIsOpen}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIsOpen()}
          tabIndex={0}
        >
          <X className="icon" alt="nedstängningsknapp" />
        </div>
      </div>
    </div>
  );
};
