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
};

const Objective: FC<Props> = ({ selected = false, onClick, behaviorId, title, completed, count }): ReactElement => {
	const imgCompleted = completed ? checkCompleted : checkDefault;
	const currentTask = selected ? 'tasks-item task—current' : 'tasks-item';

	return (
		<li className={currentTask} id={behaviorId}>
			<p onClick={onClick} className="tasks-desc">
				{count + 1}. {title}
			</p>
			<img className="tasks-icon" src={imgCompleted} alt="icons" width="16" height="16" />
		</li>
	);
};

export default Objective;
