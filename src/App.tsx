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
					<WeeksChallenge {...data} />
				</div>
			</main>
		</div>
	);
};

export default App;
