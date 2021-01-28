import React, { FC } from 'react';
import './WeeksChallenge.scss';
import WeeksChallengeProgress from './weeks-challenge-progress';
import WeeksChallengeTasks from './weeks-challenge-task';
import WeeksChallengeSeason from './weeks-challenge-season';
import { MissionUserPathData } from '../../types/types';
import RemainingTime from '../remaining-time';

const WeeksChallenge: FC<MissionUserPathData> = ({ previousMissions, upcomingPathResetDate }) => {
	const data = previousMissions;

	const today = new Date().toDateString();
	const todayParseMs = Date.parse(today);
	const parseResetDate = Date.parse(upcomingPathResetDate?.toDateString() as string);
	const getDays = (parseResetDate - todayParseMs) / (60 * 60 * 24 * 1000);

	return (
		<section className="weeks-challenge">
			<h1>{data && <RemainingTime date={getDays} />}</h1>
			<header className="weeks-challenge__header">
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
