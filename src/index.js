import React from "react";
import ReactDOM from "react-dom";
// import UseState_1 from './Components/UseState_1'
import StateObject from './Components/StateObject'
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/*<UseState_1 />*/}
      <StateObject />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
