import { FC, ReactElement } from 'react';
import './Tasks.scss';
import { ObjectiveData } from '../../../types/types';

type Props = {
	visible: boolean;
	objectives: ObjectiveData[];
};

const Tasks: FC<Props> = ({ visible, objectives }): ReactElement => {
	console.log('visible', visible);
	return (
		<ol className="tasks-list">
			{objectives.map((item, i) => {
				return (
					<li hidden={!visible} key={`task-${i}`} className="tasks-item">
						<p className="tasks-desc">{item.title}</p>
						<img className="tasks-icon" src="#" alt="done" />
					</li>
				);
			})}
		</ol>
	);
};

export default Tasks;
