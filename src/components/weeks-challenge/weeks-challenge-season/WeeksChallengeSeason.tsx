import React from "react";
import "./WeeksChallengeSeason.scss";

const WeeksChallengeSeason = () => {
  return (
    <div className="seasonal-rewards">
      <h3 className="seasonal-rewards__title">Seasonal Rewards:</h3>
      <ul className="seasonal-rewards__list">
        <li className="seasonal-rewards__item">
          <div className="icon">
            <img src="#" alt="complate" />
          </div>
          <img src="" alt="" />
          <p>Avatar item</p>
          <p>level 1</p>
        </li>
        <li className="seasonal-rewards__item">
          <div className="icon">
            <img src="#" alt="complate" />
          </div>
          <img src="" alt="" />
          <p>Avatar item</p>
          <p>level 2</p>
        </li>
      </ul>
    </div>
  );
};

export default WeeksChallengeSeason;
