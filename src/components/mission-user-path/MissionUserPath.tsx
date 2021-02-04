import React, { FC, useMemo, useState } from 'react';
import './MissionUserPath.scss';
import '../mission/Mission.scss';

import WeeksChallengeSeason from './weeks-challenge-season';
import { MissionUserPathData, ObjectiveData } from '../../types/types';
import RemainingTime from '../remaining-time';
import Reward from '../reward';
import Objective from './Objective';
// import './Objective/Objective.scss';

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
	// const getCurrentMissionItem = progressMissionArr.indexOf(currentMission);

	const [stateObjectiveData, setStateObjectiveData] = useState(currentMission.objectives);
	// const isDisabled = Boolean(upcomingMissions?.[0].objectives.filter((item) => item.completed).length);
	// console.log(isDisabled);
	const getCurrentTask = stateObjectiveData.find((objective) => !objective.completed);
	// const [isDisable, setIsDisable] = useState(true)
	// console.log('getCurrentTask', getCurrentTask);
	// console.log('isDisable', isDisable);
	// work with data
	const today = new Date().toDateString();
	const todayParseMs = Date.parse(today);
	const parseResetDate = Date.parse(upcomingPathResetDate?.toDateString() as string);
	const getRemainingDays = (parseResetDate - todayParseMs) / (60 * 60 * 24 * 1000);
	// const [selectedObjectiveIdx] = useState<number>();

	const allObjectiVes = useMemo(
		() =>
			[
				...previousMissions.map((value) => value.objectives),
				...upcomingMissions.map((value) => value.objectives),
				...currentMission.objectives,
			].flat(),
		[currentMission.objectives, previousMissions, upcomingMissions],
	);

	const allObjectivesCompleted = allObjectiVes.every((value) => value.completed);
	console.log('allObjectivesCompleted', allObjectivesCompleted);

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
					{progressMissionArr.map((item, inx) => (
						<Reward
							key={inx}
							rewards={item.rewards}
							completed={item.completed}
							missionNumber={item.missionNumber}
							onClick={() => setStateObjectiveData(item.objectives)}
							isCurrent={item === currentMission}
							isDisabled={!allObjectivesCompleted && inx === progressMissionArr.length - 1}
						/>
					))}
				</ul>
				<ol className="tasks-list">
					{stateObjectiveData.map((item, index) => (
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
						/>
					))}
				</ol>

				<WeeksChallengeSeason />
			</div>
		</section>
	);
};

export default MissionUserPath;

/*
								// console.log('click', getCurrentTask?.completed);
								// celnoos.log('getCurrentTask', item?.completed);
 */
