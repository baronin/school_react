import React, {ReactElement} from "react";
import "./WeeksChallengeTask.scss";

const WeeksChallengeTasks = ():ReactElement => {
  return (
    <ol className="weeks-challenge__check-list">
      <li className="weeks-challenge__check-item">
        <p className="weeks-challenge__check-desc">Utför veckans uppgifter</p>
        <img className="weeks-challenge__check-icon" src="#" alt="done" />
      </li>
      <li className="weeks-challenge__check-item">
        <p className="weeks-challenge__check-desc">Utför veckans uppgifter</p>
        <img className="weeks-challenge__check-icon" src="#" alt="done" />
      </li>
    </ol>
  );
};

export default WeeksChallengeTasks;
