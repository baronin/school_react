import { FC } from 'react';
import './AvatarSelect.scss';
// import lockIcon from '../../../assets/images/general-icons/padlock.png';
import { AvatarItem } from '../types';

type Props = {
	availableItems?: AvatarItem[];
	currentLevel: number;
	onChangeItem: (item: AvatarItem) => void;
};

const AvatarSelect: FC<Props> = ({ availableItems, currentLevel, onChangeItem }) => {
	console.log('currentLevel', currentLevel);

	return (
		<div className="avatar-select">
			<p className="avatar-select__title">Välj:</p>
			<ul className="avatar-select__list">
				{availableItems?.map((item, idx) => (
					<li key={idx} className="avatar-select__item" onClick={() => onChangeItem(item)}>
						<img src={item.iconUrl} alt="" className="avatar-select__lock-icon" />
					</li>
				))}
			</ul>
		</div>
	);
};

export default AvatarSelect;
