import React, { useContext } from "react";
import { LanguageContext } from "./Pb387";

function Hindi() {
  const language = useContext(LanguageContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Hindi Component</h2>
      {language === "Hindi" && <p>स्वागत है</p>}
    </div>
  );
}

export default Hindi;
