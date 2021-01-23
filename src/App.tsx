import React, {ReactElement} from "react";
import WeeksChallenge from "./components/weeks-challenge";
import Header from "./components/header";

const App = ():ReactElement => {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <WeeksChallenge />
        </div>
      </main>
    </div>
  );
};

export default App;
