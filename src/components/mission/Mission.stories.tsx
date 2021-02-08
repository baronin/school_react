import React from 'react';
import { storiesOf } from '@storybook/react';
import Mission from './Mission';
import data from '../../mocked-data/mission-user-path-data';

storiesOf('Mission', module).add('Mission', () => <Mission {...data} />);
