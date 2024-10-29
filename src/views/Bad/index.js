
import { useState } from "react";


const BadSite = () => {
  const [errors, setErrors] = useState([]);
  function submit() {
    setErrors([...errors, "HEJ DU GJORDE FEL"]);
  }
  return (
    <div className="App">
      <h2>Headline</h2>
      <h1>Subline</h1>
      <div>Namn</div>
      <input type="text" />
      <div>Efternamn</div>
      <input type="text" tabIndex="1" />
      <div onClick={submit}>Submit</div>

      {errors &&
        errors.map((error) => {
          return <div>{error}</div>;
        })}
    </div>
  );
}

export default BadSite;
