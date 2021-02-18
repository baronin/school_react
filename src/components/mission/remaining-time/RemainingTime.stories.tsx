import React from 'react';
import { storiesOf } from '@storybook/react';
import RemainingTime from './RemainingTime';
import './../../assets/scss/reset.scss';
storiesOf('RemainingTime', module)
	.add('5', () => <RemainingTime incomingDate={new Date('2021-02-26T12:00:00.000Z')} />)
	.add('4', () => <RemainingTime incomingDate={new Date('2021-02-29T12:00:00.000Z')} />);
