import { MissionData, RewardData } from '../../types/types';
import firstStepIcon from '../../assets/images/general-icons/test.png';

const Mission = (mission: MissionData) => {
	const { completed, rewards } = mission;
	const missionItemClass = completed ? 'mission-item mission-item--active' : 'mission-item';
	const missionImageClass = completed ? 'mission-images-wrap mission-images-wrap-active' : 'mission-images-wrap';
	const rewardsCurrent = rewards.map((reward: RewardData, i) => {
		return (
			<span key={i} className="mission-task-complete">
				<p className="mission-currency">
					{reward.amount}
					{reward.currency.toUpperCase()}
				</p>
			</span>
		);
	});
	return (
		<li className={missionItemClass}>
			{rewards && rewardsCurrent}
			<div className={missionImageClass}>
				<img className="mission-image" src={firstStepIcon} alt="images" />
			</div>
		</li>
	);
};

export default Mission;
