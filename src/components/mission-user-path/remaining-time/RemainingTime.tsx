import { FC } from 'react';
import './RemainingTime.scss';
import timerIcon from '../../../assets/images/general-icons/timer.png';

interface Props {
	date: number | string | undefined;
}

const RemainingTime: FC<Props> = ({ date }) => {
	console.log('RemaingTime', date);
	// count down
	return (
		<div className="time-left">
			<img className="time-left__icon" src={timerIcon} alt="timer" width="15px" height="15px" />
			<span className="time-left__text">{date}d kvar</span>
		</div>
	);
};

export default RemainingTime;
