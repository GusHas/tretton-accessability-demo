import "./CookieModal.css";

export const CookieModal = ({ setIsOpen }) => {
  const CheckBox = ({id, label}) => {
    return (
      <div className="checkbox">
        <input type="checkbox" id={id} />
        <label for={id}>{label}</label>
      </div>
    );
  };

  return (
    <div className="cookieModal" tabIndex={0}>
      <div className="popup">
        <div className="topContent">
          <h3>Ta gärna emot våra cookies</h3>
          <p>
            Den här webbplatsen använder Cookies som hjälper oss att anpassa
            vårt inehåll och ge dig en bättre internetupplevese
          </p>
        </div>
        <div className="checkboxBox">
          <CheckBox id="necessity" label="Nödvändiga" />
          <CheckBox id="analysis" label="Analys & funktion" />
          <CheckBox id="marketing" label="Marknadsföring" />
        </div>
        <div className="buttonBox">
          <button onClick={setIsOpen}>Acceptera alla</button>
          <button onClick={setIsOpen} className="altButton">
            Acceptera urval
          </button>
        </div>
        <div className="bottomContent">
          <p>Anpassa ditt val / Cookies / Läs mer / Rättsligt meddelande</p>
        </div>
      </div>
    </div>
  );
};
