import React, { ReactElement } from 'react';
import WeeksChallenge from './components/weeks-challenge';
import Header from './components/header';
import data from './mocked-data/mission-user-path-data';

const App = (): ReactElement => {
	return (
		<div className="App">
			<Header />
			<main>
				<div className="container">
					<WeeksChallenge
						pathId={data.pathId}
						pathName={data.pathName}
						finalMissionNumber={data.finalMissionNumber}
						upcomingPathResetDate={data.upcomingPathResetDate}
						previousMissions={data.previousMissions}
						currentMission={data.currentMission}
						upcomingMissions={data.upcomingMissions}
					/>
				</div>
			</main>
		</div>
	);
};

export default App;
