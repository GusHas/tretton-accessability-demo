import { X } from "@phosphor-icons/react";
import { failState } from "../../../utils/failState";
import "./CookieModal.css";

export const CookieModal = ({ setIsOpen }) => {
  const CheckBox = ({ id, label }) => {
    return (
      <div className="checkbox">
        <a tabindex={0}>
          <input
            type="checkbox"
            id={id}
            onKeyDown={(e) => e.key === "Enter" && e.target.click()}
          />
        </a>
        <label>{label}</label>
      </div>
    );
  };

  const BottomLink = ({ label, failText, hasBreak }) => {
    return (
      <>
        <a
          tabindex={0}
          onClick={() => failState(failText)}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && failState(failText)
          }
        >
          <div tabIndex={0}>{label}</div>
        </a>
        {hasBreak && " /"}
      </>
    );
  };

  return (
    <div className="cookieModal" tabIndex={-1}>
      <div className="popup">
        <div className="topContent">
          <h3 id="dialogLabel">Ta gärna emot våra kakor</h3>
          <p>
            Den här webbplatsen använder kakor som hjälper oss att anpassa vårt
            inehåll och ge dig en bättre internetupplevese
          </p>
        </div>
        <div className="checkboxBox">
          <CheckBox id="necessity" label="Nödvändiga" />
          <CheckBox id="analysis" label="Analys & funktion" />
          <CheckBox id="marketing" label="Marknadsföring" />
        </div>
        <div className="buttonBox">
          <a tabIndex={0} onClick={setIsOpen}>
            <button>Acceptera alla kakor</button>
          </a>
          <a tabIndex={0} onClick={setIsOpen}>
            <button className="altButton">Acceptera urval av kakor</button>
          </a>
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
        <a
          tabindex={0}
          onClick={setIsOpen}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIsOpen()}
        >
          <div tabIndex={0} className="closeButton">
            <X className="icon" alt="nedstängningsknapp" />
          </div>
        </a>
      </div>
    </div>
  );
};
