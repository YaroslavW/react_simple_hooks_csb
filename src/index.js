import React from "react";
import ReactDOM from "react-dom";
import UseState_1 from './Components/UseState_1'

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <UseState_1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
