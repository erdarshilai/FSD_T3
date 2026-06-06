import React, { useState, createContext } from "react";
import English from "./English";
import Hindi from "./Hindi";

// Create Context
export const LanguageContext = createContext();

function Pb387() {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Hindi" : "English"));
  };

  return (
    <LanguageContext.Provider value={language}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Parent Component (Pb387)</h1>
        <button onClick={toggleLanguage}>
          Toggle Language (Current: {language})
        </button>

        {/* Render child based on language */}
        {language === "English" ? <English /> : <Hindi />}
      </div>
    </LanguageContext.Provider>
  );
}

export default Pb387;
