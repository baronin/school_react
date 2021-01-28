import { ReactElement } from 'react';
import firstStepIcon from '../../../assets/images/general-icons/test.png';
import secondStepIcon from '../../../assets/images/general-icons/studying.png';
import doneStepIcon from '../../../assets/images/general-icons/gold-medal.png';

import './WeeksChallengeProgress.scss';

const WeeksChallengeProgress = (): ReactElement => {
	const icons = [firstStepIcon, secondStepIcon, doneStepIcon];
	const liItem = icons.map((item, i) => {
		const taskComplete = i ? (
			<span className="weeks-challenge__progress-task-complete">
				<p className="weeks-challenge__progress-xp">+300px</p>
			</span>
		) : null;
		const taskCompleteLast =
			i === 2 ? (
				<span className="weeks-challenge__progress-task-complete-last">
					<p className="weeks-challenge__progress-xp">+300px</p>
				</span>
			) : null;
		const activeClass =
			i === 0
				? 'weeks-challenge__progress-item weeks-challenge__progress-item--active'
				: 'weeks-challenge__progress-item';
		return (
			<li key={i} className={activeClass}>
				{taskComplete}
				<div className="weeks-challenge__progress-images-task">
					<img className="weeks-challenge__progress-image" src={item} alt="" />
				</div>
				{taskCompleteLast}
			</li>
		);
	});

	return <ul className="weeks-challenge__progress-list">{liItem}</ul>;
};

export default WeeksChallengeProgress;
