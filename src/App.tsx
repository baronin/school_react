import React, { ReactElement } from 'react';
import MissionUserPath from './components/mission-user-path';
import Header from './components/header';
import SeasonRewards from './components/season-rewards';

// mocked data
import missionUserPathData from './mocked-data/mission-user-path-data';
import seasonRewardsData from './mocked-data/season-rewards-data';

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
	return (
		<div className="app">
			<Header />
			<main>
				<div className="container">
					<section className="weeks-challenge">
						<MissionUserPath
							pathId={pathId}
							pathName={pathName}
							finalMissionNumber={finalMissionNumber}
							upcomingPathResetDate={upcomingPathResetDate}
							previousMissions={previousMissions}
							currentMission={currentMission}
							upcomingMissions={upcomingMissions}
						/>
						<SeasonRewards currentLevel={currentLevel} rewards={rewards} />
					</section>
				</div>
			</main>
		</div>
	);
};

export default App;
