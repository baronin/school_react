import { FC } from 'react';
import { AvatarItem, AvatarSlot } from '../types';
import './AvatarSlot.scss';

type AvatarItemProps = {
	avatar?: AvatarItem;
	slotName: AvatarSlot;
	onSelect?: () => void;
	isActive?: boolean;
};

const defaultIcon: { [key in AvatarSlot]: string } = {
	body: '/avatar-builder-components/Body/Boy 1.svg',
	hair: '/avatar-builder-components/hair/BasicHair_01.svg',
	eyes: '/avatar-builder-components/Eyes/Eyes blue.svg',
	nose: '/avatar-builder-components/nose/nose_long.svg',
	mouth: '/avatar-builder-components/mouth/mouth_laugh.svg',
	hat: '/avatar-builder-components/Hats/Hat_jazz.svg',
	glasses: '/avatar-builder-components/Glasses/Glasses_cool.svg',
	shirt: '/avatar-builder-components/shirt/BasicShirt_01.svg',
	special: '/avatar-builder-components/special-items/Special_basketball.svg',
};

const AvatarSlotBlock: FC<AvatarItemProps> = ({ avatar, slotName, onSelect, isActive }: AvatarItemProps) => (
	<div className="avatar-slot">
		<h3 className="avatar-slot__title">{slotName}</h3>
		<button
			type="button"
			className={`avatar-slot__button ${isActive ? 'avatar-slot__button--active' : ''} ${
				!avatar ? 'avatar-slot__button--opacity' : ''
			}`}
			onClick={onSelect}
		>
			<img src={avatar?.iconUrl ?? defaultIcon[slotName]} alt={`avatar ${slotName}`} width="100px" height="100px" />
		</button>
	</div>
);

export default AvatarSlotBlock;
