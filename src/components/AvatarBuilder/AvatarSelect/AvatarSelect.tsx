import { FC } from 'react';
import './AvatarSelect.scss';
import lockIcon from '../../../assets/images/general-icons/padlock.png';
import { AvatarItem } from '../types';

type Props = {
	availableItems?: AvatarItem[];
	currentLevel: number;
	onChangeItem: (item: AvatarItem) => void;
	isActiveSelect?: AvatarItem;
};

const AvatarSelect: FC<Props> = ({ availableItems, currentLevel, onChangeItem, isActiveSelect }) => {
	return (
		<div className="avatar-select">
			<h4 className="avatar-select__title">Välj:</h4>
			<ul className="avatar-select__list">
				{availableItems?.map((item, idx) => {
					return (
						<li
							key={idx}
							className={`avatar-select__item ${isActiveSelect?.id === item.id ? 'avatar-select__item--active' : ''}`}
							onClick={() => onChangeItem(item)}
							aria-disabled={item?.requiredLevel >= currentLevel}
							tabIndex={1}
						>
							{item.iconUrl && (
								<img src={item.iconUrl} alt="things" className="avatar-select__icon" width="58px" height="58px" />
							)}
							{item?.requiredLevel >= currentLevel && (
								<figure className="avatar-select__lock-figure">
									<picture>
										<img
											src={lockIcon}
											alt="lock things"
											className="avatar-select__lock-icon"
											width="58px"
											height="58px"
										/>
									</picture>
									<figcaption className="avatar-select__lock-figcaption">lvl {item?.requiredLevel}</figcaption>
								</figure>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AvatarSelect;
