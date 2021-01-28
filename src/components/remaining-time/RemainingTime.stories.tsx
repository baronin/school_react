import React from 'react';
import { storiesOf } from '@storybook/react';
import RemainingTime from './RemainingTime';

storiesOf('RemainingTime', module)
	.add('5', () => <RemainingTime date="5" />)
	.add('4', () => <RemainingTime date="4" />);
