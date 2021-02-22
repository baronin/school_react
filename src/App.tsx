import React, { ReactElement, useState, useCallback } from 'react';
import Mission from './components/mission';
import Header from './components/header';
import SeasonalRewards from './components/seasonal-rewards';

// mocked data
import missionUserPathData from './mocked-data/mission-user-path-data';
import seasonRewardsData from './mocked-data/season-rewards-data';
import avatarBuilderData from './mocked-data/avatar-builder-data';
import AvatarBuilder from './components/AvatarBuilder';

const App = (): ReactElement => {
	const [isShowAvatarBuilder, setIsShowAvatarBuilder] = useState(true);
	const {
		pathId,
		pathName,
		finalMissionNumber,
		upcomingPathResetDate,
		previousMissions,
		currentMission,
		upcomingMissions,
	} = missionUserPathData;
	const { currentLevel, rewards } = seasonRewardsData;
	const { current, availableItems } = avatarBuilderData;

	const closeModalWindow = useCallback(() => {
		setIsShowAvatarBuilder(false);
	}, [isShowAvatarBuilder]);

	return (
		<div className="app">
			<Header />
			<main>
				<div className="container">
					<section className="weeks-challenge">
						<Mission
							pathId={pathId}
							pathName={pathName}
							finalMissionNumber={finalMissionNumber}
							upcomingPathResetDate={upcomingPathResetDate}
							previousMissions={previousMissions}
							currentMission={currentMission}
							upcomingMissions={upcomingMissions}
						/>
						<SeasonalRewards currentLevel={currentLevel} rewards={rewards} />
					</section>
					<div className="avatar-component">
						<button
							className="avatar-component__btn-toggle"
							type="button"
							onClick={() => setIsShowAvatarBuilder(!isShowAvatarBuilder)}
						>
							Toggle
						</button>
						{isShowAvatarBuilder ? (
							<AvatarBuilder
								current={current}
								availableItems={availableItems}
								currentLevel={currentLevel}
								closeModalWindow={closeModalWindow}
							/>
						) : (
							''
						)}
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
