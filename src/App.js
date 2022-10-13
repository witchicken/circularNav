import React, { useState } from "react";
import "./App.scss";
function App() {
  const [nowView, setNowView] = useState(1);
  return (
    <div className="App">
      <ul class="nav">
        <li>
          <span>snow</span>
        </li>
        <li>
          <span>rain</span>
        </li>
        <li>
          <span>sunny</span>
        </li>
        <li>
          <span>night</span>
        </li>
        <li>
          <span>typhoon</span>
        </li>
      </ul>
      <div class="innercircle"></div>
      <div class="innerView"></div>
    </div>
  );
}

export default App;
