import { FC } from 'react';
import { RewardData } from '../types';
import iconTest from '../../../assets/images/general-icons/test.png';
import iconStudying from '../../../assets/images/general-icons/studying.png';
import iconGoldMedal from '../../../assets/images/general-icons/gold-medal.png';
import checkCompleted from '../../../assets/images/general-icons/check_complete.png';
import checkDefault from '../../../assets/images/general-icons/check_grey.png';

// scss
import './Reward.scss';

type Props = {
	rewards: RewardData[];
	completed: boolean;
	missionNumber: number;
	onClick: () => void;
	isCurrent: boolean;
	isActive: boolean;
};

const Reward: FC<Props> = ({ isActive, rewards, completed, missionNumber, onClick, isCurrent }) => {
	const rewardButtonClass = `reward-button ${isCurrent ? ' reward-button--active' : ''}`;
	const rewardItemClass = `reward-item${completed ? ' reward-item--active' : ''}`;
	const checkIcon = completed ? checkCompleted : checkDefault;

	// choose icon for Missions
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

	// show currency Missions
	const currency = rewards.map((item, index) => (
		<span key={`rewards-${index}`} className="reward-currency">
			{item.amount} {item.currency.toUpperCase()}
		</span>
	));

	return (
		<li id={`mission-number${missionNumber}`} className={rewardItemClass}>
			<button className={rewardButtonClass} onClick={onClick} disabled={!isActive}>
				<img src={missionIconsTask} alt="mission task" width="32px" height="32px" />
			</button>
			<div className="reward-task-check">
				<img src={checkIcon} alt="icon" width="18px" height="18px" />
				{currency}
			</div>
		</li>
	);
};

export default Reward;
