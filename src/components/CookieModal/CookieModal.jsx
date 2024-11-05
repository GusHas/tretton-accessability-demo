import "./CookieModal.css";

export const CookieModal = ({ setIsOpen }) => {
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
          <div className="checkbox">
            <input type="checkbox" id="necessity" />
            <label for="necessity">Nödvändiga</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="analysis" />
            <label for="analysis">Analys & funktion</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="marketing" />
            <label for="marketing">Marknadsföring</label>
          </div>
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
