import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorButton from './buttons';

storiesOf('buttons', module)
	.add('yellow', () => <ColorButton color="yellow" />)
	.add('blue', () => <ColorButton color="blue" />);
