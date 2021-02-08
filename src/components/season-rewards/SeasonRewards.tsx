import { FC } from 'react';

// icons
import iconAvailable from '../../assets/images/general-icons/completed.svg';
import iconLock from '../../assets/images/general-icons/lock.svg';
// import hair from '../../assets/images/avatar-builder-components/Hats/Hat_jazz.svg';

// scss
import './SeasonRewards.scss';

// types
import { SeasonalRewardsProps } from '../../types/types';

const SeasonRewards: FC<SeasonalRewardsProps> = ({ currentLevel, rewards }) => {
	console.log(currentLevel, rewards);
	return (
		<div className="seasonal-rewards">
			<h3 className="seasonal-rewards__title">Seasonal Rewards:</h3>
			<div className="seasonal-rewards__content">
				<ul className="seasonal-rewards__list">
					{rewards?.map((item, idx) => {
						const { requiredLevel, iconUrl } = item;
						const isAvailableIcon = requiredLevel <= currentLevel ? iconAvailable : iconLock;
						return (
							<li key={idx} className="seasonal-rewards__item">
								<div className="seasonal-rewards__available">
									<img src={isAvailableIcon} alt="icon" width="18" height="18" />
								</div>
								<div className="seasonal-rewards__item-icon">
									<img src={iconUrl} alt="icon items" />
								</div>
								<p>Avatar item</p>
								<p>level {requiredLevel}</p>
							</li>
						);
					})}
					<li className="seasonal-rewards__item">
						<div className="seasonal-rewards__available">
							<img src={iconLock} alt="icon" width="18" height="18" />
						</div>
						<div className="seasonal-rewards__item-icon">
							<img src="hair" alt="icon items" />
						</div>
						<p>Avatar item</p>
						<p>level next</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SeasonRewards;
