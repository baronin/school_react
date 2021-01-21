import React from 'react';
import './WeeksChallenge.scss';
import TimeLeft from "../TimeLeft";

const WeeksChallenge = () => {
    return (
        <section className="weeks-challenge">
          <header className="weeks-challenge__header">
            <TimeLeft />
            <h3 className="weeks-challenge__header-title">Veckans uppdrag</h3>
          </header>
        </section>
    )
}

export default WeeksChallenge;
