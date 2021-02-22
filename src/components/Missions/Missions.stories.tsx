import React from 'react';
import { storiesOf } from '@storybook/react';
import Missions from './Missions';
import data from '../../mocked-data/mission-user-path-data';

storiesOf('Missions', module).add('Missions', () => <Missions {...data} />);
