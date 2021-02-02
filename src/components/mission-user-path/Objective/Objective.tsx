import { FC, ReactElement } from 'react';
import './Objective.scss';

type Props = {
	behaviorId: string;
	title: string;
	amount: number;
	completed: number;
};

const Objective: FC<Props> = ({ behaviorId, title, amount, completed }): ReactElement => {
	console.log(completed);
	return (
		<li className="tasks-item" id={behaviorId}>
			<p className="tasks-desc">{title}</p>
			<p className="tasks-amount">{amount}</p>
			<img className="tasks-icon" src="#" alt="done" />
		</li>
	);
};

export default Objective;
