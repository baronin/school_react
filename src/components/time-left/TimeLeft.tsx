import React, {ReactElement} from "react";
import "./TimeLeft.scss";
import timerIcon from "../../assets/images/general-icons/timer.png";
const TimeLeft = ():ReactElement => {
  return (
    <div className="time-left">
      <img
        className="time-left__icon"
        src={timerIcon}
        alt="timer"
        width="15px"
        height="15px"
      />
      <span className="time-left__text">6d kvar</span>
    </div>
  );
};

export default TimeLeft;
