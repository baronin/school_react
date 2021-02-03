import { FC, ReactElement } from 'react';
import './Objective.scss';
import checkCompleted from '../../../assets/images/general-icons/check_complete.png';
import checkDefault from '../../../assets/images/general-icons/check_grey.png';

type Props = {
	count: number;
	behaviorId: string;
	title: string;
	amount: number;
	completed: number;
};

const Objective: FC<Props> = ({ behaviorId, title, amount, completed, count }): ReactElement => {
	const imgCompleted = completed ? checkCompleted : checkDefault;
	console.log('amount', amount);

	return (
		<li className="tasks-item" id={behaviorId}>
			<p className="tasks-desc">
				{count + 1}. {title}
			</p>
			<img className="tasks-icon" src={imgCompleted} alt="done" width="16" height="16" />
		</li>
	);
};

export default Objective;
