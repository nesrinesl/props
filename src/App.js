import React from "react";
import Playerslist from "./Playerslist";
import Navigation from "./components/Navigation";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Navigation />

      <h2 style={{ marginTop: 70, textAlign: "center", color: "red" }}>
        FIFA TIME !
      </h2>

      <p
        style={{
          color: "red",
          fontSize: 30,
          display: "flex",
          
          textAlign: "center",
        }}
      >
        The Fédération internationale de football association is the
        international governing body of association football, beach soccer, and
        futsal.
      </p>

      <Playerslist />
      
      <Buttons />
    </div>
  );
}

export default App;
