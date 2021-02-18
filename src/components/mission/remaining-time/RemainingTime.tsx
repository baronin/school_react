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
	// const today = new Date().toDateString();
	// console.log('🚀 ~ file: RemainingTime.tsx ~ line 15 ~ today', today);
	const todayParseMs = Date.now();
	console.log('🚀 ~ file: RemainingTime.tsx ~ line 16 ~ todayParseMs', todayParseMs / 1000);
	const parseResetDate = 1613599199 * 1000;
	const getRemainingDays = (parseResetDate - todayParseMs) / (60 * 60 * 24 * 1000);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log('This will run every second!', incomingDate);
			setTimer((seconds) => seconds + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const getTransformTimeToFormatHhMm = () => {
		console.log(111111111111);
		const restTime = (parseResetDate - todayParseMs) / 1000;
		console.log('🚀 ~ file: RemainingTime.tsx ~ line 31 ~ getTransformTimeToFormatHhMm ~ restTime', restTime, timer);
		const hours = Math.floor(restTime / 3600);
		const minutes = Math.ceil((restTime % 3600) / 60);

		console.log('🚀 ~ file: RemainingTime.tsx ~ line 35 ~ getTransformTimeToFormatHhMm ~ minutes', hours, minutes);
		return `${hours}:${minutes}`;
	};

	console.log('RemaingTime', getRemainingDays);
	// count down
	return (
		<div className="time-left">
			<img className="time-left__icon" src={timerIcon} alt="timer" width="15px" height="15px" />
			<span className="time-left__text">
				{parseResetDate - todayParseMs > amountMmInDay
					? getTransformTimeToFormatHhMm()
					: getTransformTimeToFormatHhMm()}
				d kvar
			</span>
		</div>
	);
};

export default RemainingTime;
