import React, { ReactElement } from 'react';
import Mission from './components/mission';
import Header from './components/header';
import SeasonalRewards from './components/seasonal-rewards';

// mocked data
import missionUserPathData from './mocked-data/mission-user-path-data';
import seasonRewardsData from './mocked-data/season-rewards-data';
import Avatar from './components/avatar';
import AvatarSelect from './components/avatar/avatar-select';

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
						<Avatar />
						<AvatarSelect selectCategory={'hair'} />
						{/* <div>
							<p></p>
							<ul>
								<li>
									<svg>
										<use href={} />
									</svg>
									<div>
										<img src="" alt="" />
										<p></p>
									</div>
								</li>
							</ul>
						</div> */}
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
