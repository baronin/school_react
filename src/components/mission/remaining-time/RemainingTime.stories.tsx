import React from 'react';
import { storiesOf } from '@storybook/react';
import RemainingTime from './RemainingTime';
import './../../assets/scss/reset.scss';
storiesOf('RemainingTime', module)
	.add('5', () => <RemainingTime incomingDate={new Date()} />)
	.add('4', () => <RemainingTime incomingDate={new Date()} />);
