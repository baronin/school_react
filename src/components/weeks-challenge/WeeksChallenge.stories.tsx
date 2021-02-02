import React from 'react';
import { storiesOf } from '@storybook/react';
import WeeksChallenge from './WeeksChallenge';
import data from '../../mocked-data/mission-user-path-data'

storiesOf('WeeksChallenge', module)
	.add('WeeksChallenge', () => <WeeksChallenge {...data} />)
