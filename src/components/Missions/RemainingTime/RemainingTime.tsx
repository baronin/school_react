import { FC, useState } from 'react';
import './RemainingTime.scss';
import timerIcon from '../../../assets/images/general-icons/timer.png';

interface Props {
	incomingDate: Date | undefined;
}

const RemainingTime: FC<Props> = ({ incomingDate }) => {
	const [isLittleTime, setIsLittleTime] = useState(false);

	const amountMsInDay = 86400000;
	const todayParseMs = Date.now();
	const parseResetDate = Date.parse(incomingDate?.toDateString() as string);
	const getRemainingDays = `${Math.ceil((parseResetDate - todayParseMs) / (60 * 60 * 24 * 1000))} d`;

	const getRemainingHours = (): string => {
		const restTime = (parseResetDate - todayParseMs) / 1000;
		const hours = Math.floor(restTime / 3600);
		const minutes = Math.ceil((restTime % 3600) / 60);

		if (restTime <= 0 && !isLittleTime) setIsLittleTime(true);

		return `${hours}:${minutes}m`;
	};

	return (
		<div className={`time-left ${isLittleTime ? 'time-left--time-is-over' : ''}`}>
			<img className="time-left__icon" src={timerIcon} alt="timer" width="15px" height="15px" />
			<span className="time-left__text">
				{parseResetDate - todayParseMs > amountMsInDay ? getRemainingDays : getRemainingHours()} kvar
			</span>
			<span className="time-left__info">Timeout</span>
		</div>
	);
};

export default RemainingTime;
