import React, { FC, useState } from 'react';
import './MissionUserPath.scss';
// import '../mission/Mission.scss';

import WeeksChallengeSeason from './weeks-challenge-season';
import { MissionUserPathData, ObjectiveData } from '../../types/types';
import RemainingTime from '../remaining-time';
import Reward from '../reward';
import Objective from './Objective';
import './Objective/Objective.scss';

type Props = {
	onObjectivePress?: (objective: ObjectiveData, index: number) => void;
};

const MissionUserPath: FC<MissionUserPathData & Props> = ({
	pathId,
	pathName,
	finalMissionNumber,
	previousMissions,
	currentMission,
	upcomingMissions,
	upcomingPathResetDate,
	onObjectivePress,
}) => {
	const progressMissionArr = [...previousMissions, currentMission, ...upcomingMissions];
	const getCurrentMissionItem = progressMissionArr.indexOf(currentMission);
	const [stateObjectiveData, setStateObjectiveData] = useState(progressMissionArr[getCurrentMissionItem].objectives);
	const today = new Date().toDateString();
	const todayParseMs = Date.parse(today);
	const parseResetDate = Date.parse(upcomingPathResetDate?.toDateString() as string);
	const getRemainingDays = (parseResetDate - todayParseMs) / (60 * 60 * 24 * 1000);
	const [selectedObjectiveIdx] = useState<number>();

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
				<ul className="reward-list">
					{progressMissionArr.map((item, inx) => {
						return (
							<Reward
								key={inx}
								rewards={item.rewards}
								completed={item.completed}
								missionNumber={item.missionNumber}
								onClick={() => setStateObjectiveData(item.objectives)}
							/>
						);
					})}
				</ul>
				<ol className="tasks-list">
					{stateObjectiveData.map((item, index) => (
						<Objective
							onClick={() => {
								onObjectivePress?.(item, index);
								// setSelectedObjectiveIdx()
							}}
							selected={selectedObjectiveIdx !== undefined ? index === selectedObjectiveIdx : Boolean(item.completed)}
							key={`objective-${index}`}
							count={index}
							behaviorId={item.behaviorId}
							title={item.title}
							amount={item.amount}
							completed={item.completed}
						/>
					))}
				</ol>

				<WeeksChallengeSeason />
			</div>
		</section>
	);
};

export default MissionUserPath;
