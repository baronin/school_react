import { useState } from 'react';
import { MissionData, RewardData } from '../../types/types';
import './Mission.scss';
import checkDefault from '../../assets/images/general-icons/check_grey.png';
import checkCompleted from '../../assets/images/general-icons/check_complete.png';
import iconGoldMedal from '../../assets/images/general-icons/gold-medal.png';
import iconStudying from '../../assets/images/general-icons/studying.png';
import iconTest from '../../assets/images/general-icons/test.png';
// import Tasks from '../weeks-challenge/tasks'; s

const Mission = (mission: MissionData) => {
	const [visible, setVisible] = useState(false);
	const { completed, missionNumber, rewards } = mission;
	const missionItemClass = completed ? 'mission-item mission-item--active' : 'mission-item';
	const missionImageClass = completed ? 'mission-images-wrap mission-images-wrap-active' : 'mission-images-wrap';
	const checkIcon = completed ? checkCompleted : checkDefault;

	let missionIconsTask;
	switch (missionNumber) {
		case 1:
			missionIconsTask = iconTest;
			break;
		case 2:
			missionIconsTask = iconStudying;
			break;
		case 3:
			missionIconsTask = iconGoldMedal;
			break;
		default:
			missionIconsTask = '#';
			break;
	}

	const toggleShowTasks = () => {
		console.log('toggleShowTasks', visible);
		setVisible(!visible);
	};

	const rewardsCurrent = rewards.map((reward: RewardData, i) => {
		return (
			<div key={`mission-task-check${i}`} className="mission-task-check">
				<img src={checkIcon} alt="dsd" />
				<p className="mission-currency">
					{reward.amount} {reward.currency.toUpperCase()}
				</p>
			</div>
		);
	});
	return (
		<li className={missionItemClass}>
			{rewards && rewardsCurrent}
			<button className={missionImageClass} onClick={toggleShowTasks} type="button">
				<img className="mission-image" src={missionIconsTask} alt="images" />
			</button>
		</li>
	);
};

export default Mission;
