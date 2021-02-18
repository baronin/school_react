import React, { FC, useState } from 'react';
import RemainingTime from './remaining-time';
import Reward from './reward';
import Objective from './objective';
import { MissionUserPathData, ObjectiveData } from './types';
import './Mission.scss';

type Props = {
	onObjectivePress?: (objective: ObjectiveData, index: number) => void;
};

const Mission: FC<MissionUserPathData & Props> = ({
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

	const [stateObjectiveData, setStateObjectiveData] = useState(currentMission.objectives);

	const getCurrentTask = stateObjectiveData.find((objective) => !objective.completed);

	// work with data
	const today = new Date().toDateString();
	const todayParseMs = Date.parse(today);
	const parseResetDate = Date.parse(upcomingPathResetDate?.toDateString() as string);
	const getRemainingDays = (parseResetDate - todayParseMs) / (60 * 60 * 24 * 1000);

	return (
		<>
			<header className="weeks-challenge__header">
				<RemainingTime date={getRemainingDays} />
				<h3 id={pathId} className="weeks-challenge__header-title">
					Veckans uppdrag <b>pathName {pathName}</b>
					<p>{finalMissionNumber}</p>
				</h3>
			</header>
			<div className="weeks-challenge__content">
				<ul className="reward-list">
					{progressMissionArr.map((item, inx, missions) => (
						<Reward
							key={inx}
							rewards={item.rewards}
							completed={item.completed}
							missionNumber={item.missionNumber}
							onClick={() => setStateObjectiveData(item.objectives)}
							isCurrent={item === currentMission}
							isActive={missions[inx - 1]?.completed ?? true}
						/>
					))}
				</ul>
				<ol className="tasks-list">
					{stateObjectiveData.map((item, index, missions) => (
						<Objective
							onClick={() => {
								onObjectivePress?.(item, index);
							}}
							selected={getCurrentTask?.behaviorId === item.behaviorId}
							key={`objective-${index}`}
							count={index}
							behaviorId={item.behaviorId}
							title={item.title}
							amount={item.amount}
							completed={item.completed}
							isActive={Boolean(missions[index - 1]?.completed) ?? true}
						/>
					))}
				</ol>
			</div>
		</>
	);
};

export default Mission;
