import React from "react";
import WeeksChallenge from "./components/WeeksChallenge";
import Header from "./components/header";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <main>
        <div className="container">
          <WeeksChallenge />
        </div>
      </main>
    </div>
  );
};

export default App;
