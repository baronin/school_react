import { FC } from 'react';
import { AvatarItem, AvatarSlot } from '../../../types/types';

import './AvatarItem.scss';

type Props = {
	avatarItem?: AvatarItem;
	nameItem: AvatarSlot;
	onActivate?: () => void;
	isActive?: boolean;
};

const AvatarItemBlock: FC<Props> = ({ avatarItem, nameItem, onActivate, isActive }) => {
	/**
	 * { avatarItem, nameItem, onActivate }
	 */
	const defaultIcon: { [key in AvatarSlot]: string } = {
		body: '/avatar-builder-components/Boy 1.svg',
		hair: '/avatar-builder-components/BasicHair_01.svg',
		eyes: '/avatar-builder-components/Eyes/Eyes blue.svg',
		nose: '/avatar-builder-components/nose/nose_long.svg',
		mouth: '/avatar-builder-components/mouth/mouth_laugh.svg',
		hat: '/avatar-builder-components/Hats/Hat_jazz.svg',
		glasses: '/avatar-builder-components/Glasses/Glasses_cool.svg',
		shirt: '/avatar-builder-components/shirt/BasicShirt_01.svg',
		special: '/avatar-builder-components/special-items/Special_basketball.svg',
	};
	const currentImage = avatarItem?.iconUrl || defaultIcon[nameItem];
	const isDisabled = Boolean(avatarItem);
	const buttonItemClass = `avatar__item-button ${isActive ? 'avatar__item-button--active' : ''}`;

	return (
		<div id={avatarItem?.id} className="avatar__item">
			<h3 className="avatar__item-title">{nameItem}</h3>
			<button type="button" className={buttonItemClass} onClick={onActivate} disabled={!isDisabled}>
				<img src={currentImage} alt={`avatar ${nameItem}`} />
			</button>
		</div>
	);
};

export default AvatarItemBlock;
