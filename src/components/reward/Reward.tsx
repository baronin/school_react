import { FC } from 'react';
import { RewardData } from '../../types/types';
import iconTest from '../../assets/images/general-icons/test.png';
import iconStudying from '../../assets/images/general-icons/studying.png';
import iconGoldMedal from '../../assets/images/general-icons/gold-medal.png';
import checkCompleted from '../../assets/images/general-icons/check_complete.png';
import checkDefault from '../../assets/images/general-icons/check_grey.png';

type Props = {
	rewards: RewardData[];
	completed: boolean;
	missionNumber: number;
	onClick: () => void;
};

const Reward: FC<Props> = ({ rewards, completed, missionNumber, onClick }) => {
	console.log('rewards', rewards);
	console.log('completed', completed);
	const missionImageClass = completed ? 'mission-images-wrap mission-images-wrap-active' : 'mission-images-wrap';

	const checkIcon = completed ? checkCompleted : checkDefault;

	// choose icon for mission
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

	// show currency mission
	const currency = rewards.map((item, index) => (
		<span key={`rewards-${index}`} className="mission-currency">
			{item.amount} {item.currency.toUpperCase()}
		</span>
	));
	return (
		<li id={`mission-number${missionNumber}`} className="mission-item">
			<button className={missionImageClass} onClick={onClick}>
				<img src={missionIconsTask} alt="" />
			</button>
			<div className="mission-task-check">
				<img src={checkIcon} alt="icon" />
				{currency}
			</div>
		</li>
	);
};

export default Reward;
