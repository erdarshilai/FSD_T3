import React from 'react';
// Import an image from the assets folder
import assetLogo from './assets/react-logo.png';
// Import external CSS styles
import './App.css';

function JsxDemoComponent() {
  // 2. JavaScript variables/expressions to use inside JSX
  const welcomeMessage = "Welcome to the Ultimate JSX Guide!";
  const userName = "Developer";
  const fruitList = ["Apple", "Banana", "Mango", "Orange"];

  // 3. Inline CSS styling object using camelCase properties
  const inlineTextStyle = {
    color: "darkslateblue",
    fontSize: "24px",
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "8px"
  };

  // 1. Returns a single parent element using a React Fragment (<> ... </>)
  return (
    <>
      {/* 5. This is a JSX comment: Header Section */}
      <header>
        {/* 2. Displaying JavaScript expressions using curly braces */}
        <h1>{welcomeMessage}</h1>
        <p>Hello, {userName}! Current Year: {new Date().getFullYear()}</p>
      </header>

      {/* 3. Styled text section using inline CSS */}
      <section>
        <h2 style={inlineTextStyle}>This text is styled with Inline CSS.</h2>
        <p style={{ fontWeight: 'bold', color: 'crimson' }}>
          This text uses direct inline styling.
        </p>
      </section>

      {/* 4. External CSS section using className */}
      <section className="card-container">
        <p className="highlight-text">
          This text is styled using an external CSS class.
        </p>
      </section>

      {/* 6. Ordered list display mapping over an array */}
      <section>
        <h3>My Favourite Fruits</h3>
        <ol>
          {fruitList.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ol>
      </section>

      {/* 8. Displaying images from both assets and public folders */}
      <section>
        <h3>Image Display Demo</h3>
        <div className="image-box">
          {/* From assets folder (Requires import statement at the top) */}
          <p>Asset Image:</p>
          <img src={assetLogo} alt="React Logo from Assets" className="demo-img" />

          {/* 7. Self-closing tag demonstration (<img />, <hr />, <input />) */}
          <hr />

          {/* From public folder (Served directly from root '/') */}
          <p>Public Folder Image:</p>
          <img src="/favicon.ico" alt="Favicon from Public" className="demo-img" />
        </div>
      </section>

      {/* 7. Another self-closing tag example */}
      <section>
        <h3>Input Field Demo</h3>
        <input type="text" placeholder="Type something here..." className="custom-input" />
      </section>
    </>
  );
}

export default JsxDemoComponent;
