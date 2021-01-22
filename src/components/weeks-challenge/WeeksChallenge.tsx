import React from "react";
import "./WeeksChallenge.scss";
import TimeLeft from "../time-left";
import WeeksChallengeProgress from "./weeks-challenge-progress";
import WeeksChallengeTasks from "./weeks-challenge-task";
import WeeksChallengeSeason from "./weeks-challenge-season";

const WeeksChallenge = () => {
  return (
    <section className="weeks-challenge">
      <header className="weeks-challenge__header">
        <TimeLeft />
        <h3 className="weeks-challenge__header-title">Veckans uppdrag</h3>
      </header>
      <div className="weeks-challenge__content">
        <WeeksChallengeProgress />
        <WeeksChallengeTasks />
        <WeeksChallengeSeason />
      </div>
    </section>
  );
};

export default WeeksChallenge;
