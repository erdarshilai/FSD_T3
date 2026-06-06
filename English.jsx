import React, { useContext } from "react";
import { LanguageContext } from "./Pb387";

function English() {
  const language = useContext(LanguageContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>English Component</h2>
      {language === "English" && <p>Welcome</p>}
    </div>
  );
}

export default English;
