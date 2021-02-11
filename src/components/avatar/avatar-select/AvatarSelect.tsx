import { FC, useState, useEffect } from 'react';
import './AvatarSelect.scss';
// mocked data
import missionUserPathData from '../../../mocked-data/avatar-builder-data';
// images
import lockIcon from '../../../assets/images/general-icons/padlock.png';

interface CharacterStats {
	[key: string]: string;
}

type Props = {
	readonly selectCategory: string;
	readonly characterStats: CharacterStats;
	selectCallBack: (select: any) => void;
};

const AvatarSelect: FC<Props> = ({ selectCategory, characterStats, selectCallBack }) => {
	const characterLevel: number = missionUserPathData.currentLevel;
	const [selectThing, setSelectThing] = useState(missionUserPathData.availableItems.hair[0].id);

	useEffect(() => {
		if (characterStats[selectCategory].length) setSelectThing(characterStats[selectCategory]);
	});

	const handlerSelectThing = (selectItem: any) => {
		if (selectItem && selectItem.requiredLevel > characterLevel) return;

		setSelectThing(selectItem.id);
		selectCallBack(selectItem.id);
	};

	const selectList = missionUserPathData.availableItems.hair.map((item, index) => {
		return (
			<li
				className={`avatar-select__item ${selectThing === item.id ? 'avatar-select__item_is_select' : ''} ${
					item.requiredLevel > characterLevel ? 'avatar-select__item_is-block' : ''
				}`}
				key={index}
				onClick={() => handlerSelectThing(item)}
			>
				<img className="avatar-select-preview" src={`image-mockups/hairs/${index + 1}.svg`} />
				<div className="avatar-select__lock">
					<img className="avatar-select__lock-icon" src={lockIcon} />
					<p className="avatar-select__lock-text">{item.requiredLevel}</p>
				</div>
			</li>
		);
	});

	return (
		<div className="avatar-select">
			<p className="avatar-select__title">Välj:</p>
			<ul className="avatar-select__list">{selectList}</ul>
		</div>
	);
};

export default AvatarSelect;
