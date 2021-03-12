import { FC, ReactElement } from 'react';
import './Objective.scss';
import checkCompleted from '../../../assets/images/general-icons/check_complete.png';
import checkDefault from '../../../assets/images/general-icons/default.svg';

type Props = {
	count: number;
	behaviorId: string;
	title: string;
	amount: number;
	completed: number;
	selected: boolean;
	onClick: () => void;
	isActive: boolean;
};

const Objective: FC<Props> = ({
	isActive,
	selected = false,
	onClick,
	behaviorId,
	title,
	completed,
	count,
}): ReactElement => {
	const imgCompleted = completed ? checkCompleted : checkDefault;
	const isDisabledTaskClass = `tasks-item${!completed && !isActive ? ' tasks-item--disabled' : ''}`;
	const taskUnderlineClass = `tasks-desc${selected ? ' task—current' : ''}`;

	return (
		<li className={isDisabledTaskClass} id={behaviorId}>
			<p onClick={onClick} className={taskUnderlineClass}>
				{count + 1}. {title}
			</p>
			<img className="tasks-icon" src={imgCompleted} alt="icons" width="16" height="16" />
		</li>
	);
};

export default Objective;
