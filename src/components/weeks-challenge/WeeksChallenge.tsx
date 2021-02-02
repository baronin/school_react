import React, { FC, useState } from 'react';
import './WeeksChallenge.scss';
import WeeksChallengeSeason from './weeks-challenge-season';
import { MissionUserPathData } from '../../types/types';
import RemainingTime from '../remaining-time';
import Mission from '../mission';

const WeeksChallenge: FC<MissionUserPathData> = ({
	pathId,
	pathName,
	finalMissionNumber,
	previousMissions,
	currentMission,
	upcomingMissions,
	upcomingPathResetDate,
}) => {
	const progressMission = [...previousMissions, currentMission, ...upcomingMissions];

	const [selectedMissionInx] = useState<number>(progressMission.indexOf(currentMission));
	const today = new Date().toDateString();
	const todayParseMs = Date.parse(today);
	const parseResetDate = Date.parse(upcomingPathResetDate?.toDateString() as string);
	const getRemainingDays = (parseResetDate - todayParseMs) / (60 * 60 * 24 * 1000);

	function test(): number {
		return selectedMissionInx;
	}

	console.log('selectedMissionInx', test());
	return (
		<section className="weeks-challenge">
			<header className="weeks-challenge__header">
				<RemainingTime date={getRemainingDays} />
				<h3 id={pathId} className="weeks-challenge__header-title">
					Veckans uppdrag <b>pathName {pathName}</b>
					<p>{finalMissionNumber}</p>
				</h3>
			</header>
			<div className="weeks-challenge__content">
				<ul className="mission-list">
					{progressMission.map((item, inx) => {
						return <Mission key={`mission-${inx}`} {...item} />;
					})}
				</ul>
				<WeeksChallengeSeason />
			</div>
		</section>
	);
};

export default WeeksChallenge;
