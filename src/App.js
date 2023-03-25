import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <div className="Board">
        <Board  nrows={6} ncols={6}/>
        </div>
      </div>
  );
}

export default App;
