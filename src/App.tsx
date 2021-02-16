import React, { ReactElement } from 'react';
import Mission from './components/mission';
import Header from './components/header';
import SeasonalRewards from './components/seasonal-rewards';

// mocked data
import missionUserPathData from './mocked-data/mission-user-path-data';
import seasonRewardsData from './mocked-data/season-rewards-data';
import avatarBuilderData from './mocked-data/avatar-builder-data';
import Avatar from './components/avatar';

const App = (): ReactElement => {
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
						<button type="button">Toggle</button>
						<Avatar current={current} availableItems={availableItems} currentLevel={currentLevel} />
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
