import { FC } from 'react';
import './AvatarSelect.scss';
import lockIcon from '../../../assets/images/general-icons/padlock.png';
import { AvatarItem } from '../types';

type Props = {
	availableItems?: AvatarItem[];
	currentLevel: number;
	onChangeItem: (item: AvatarItem) => void;
	isActiveSelect?: string;
	onChangeSelectId?: (uuid: string) => void;
};

const AvatarSelect: FC<Props> = ({ availableItems, currentLevel, onChangeItem, isActiveSelect, onChangeSelectId }) => {
	console.log('currentLevel', currentLevel);
	console.log('isActive', isActiveSelect);
	return (
		<div className="avatar-select">
			<p className="avatar-select__title">Välj:</p>
			<ul className="avatar-select__list">
				{availableItems?.map((item, idx) => {
					console.log('onChangeCurrentItem(item)', onChangeSelectId);
					console.log('item', item.id);
					return (
						<li key={idx} className="avatar-select__item" onClick={() => onChangeItem(item)}>
							<img
								src={item?.requiredLevel <= currentLevel ? item.iconUrl : lockIcon}
								alt=""
								className="avatar-select__lock-icon"
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AvatarSelect;
