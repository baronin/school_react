import React from 'react';
import { storiesOf } from '@storybook/react';
import MissionUserPath from './MissionUserPath';
import data from '../../mocked-data/mission-user-path-data';

storiesOf('MissionUserPath', module).add('MissionUserPath', () => <MissionUserPath {...data} />);
