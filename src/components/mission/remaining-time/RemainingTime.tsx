import { FC, useEffect, useState } from 'react';
import './RemainingTime.scss';
import timerIcon from '../../../assets/images/general-icons/timer.png';

interface Props {
	incomingDate: Date | undefined;
}

const RemainingTime: FC<Props> = ({ incomingDate }) => {
	// work with data
	const [timer, setTimer] = useState(0);

	const amountMmInDay = 86400000;
	const today = new Date().toDateString();
	const todayParseMs = Date.parse(today);
	const parseResetDate = Date.parse(incomingDate?.toDateString() as string);
	const getRemainingDays = (parseResetDate - todayParseMs) / (60 * 60 * 24 * 1000);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log('This will run every second!');
			setTimer((seconds) => seconds + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const getTransformTimeToFormatHhMm = () => {
		console.log(111111111111);
		const restTime = parseResetDate - todayParseMs;

		return restTime - timer;
	};

	console.log('RemaingTime', getRemainingDays);
	// count down
	return (
		<div className="time-left">
			<img className="time-left__icon" src={timerIcon} alt="timer" width="15px" height="15px" />
			<span className="time-left__text">
				{parseResetDate - todayParseMs > amountMmInDay ? timer : getTransformTimeToFormatHhMm()}d kvar
			</span>
		</div>
	);
};

export default RemainingTime;
