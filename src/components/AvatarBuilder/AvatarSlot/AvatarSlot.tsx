import { FC } from 'react';
import { AvatarItem, AvatarSlot } from '../../../types/types';
import './AvatarSlot.scss';

type AvatarItemProps = {
	avatar?: AvatarItem;
	slotName: AvatarSlot;
	onSelect?: () => void;
	isActive?: boolean;
};

const defaultIcon: { [key in AvatarSlot]: string } = {
	body: '/AvatarBuilder-builder-components/Boy 1.svg',
	hair: '/AvatarBuilder-builder-components/BasicHair_01.svg',
	eyes: '/AvatarBuilder-builder-components/Eyes/Eyes blue.svg',
	nose: '/AvatarBuilder-builder-components/nose/nose_long.svg',
	mouth: '/AvatarBuilder-builder-components/mouth/mouth_laugh.svg',
	hat: '/AvatarBuilder-builder-components/Hats/Hat_jazz.svg',
	glasses: '/AvatarBuilder-builder-components/Glasses/Glasses_cool.svg',
	shirt: '/AvatarBuilder-builder-components/shirt/BasicShirt_01.svg',
	special: '/AvatarBuilder-builder-components/special-items/Special_basketball.svg',
};

const AvatarSlotBlock: FC<AvatarItemProps> = ({ avatar, slotName, onSelect, isActive }: AvatarItemProps) => (
	<div className="avatar__item">
		<h3 className="avatar__item-title">{slotName}</h3>
		<button
			type="button"
			className={`avatar__item-button ${isActive ? 'avatar__item-button--active' : ''}`}
			onClick={onSelect}
			disabled={Boolean(!avatar)}
		>
			<img src={avatar?.iconUrl ?? defaultIcon[slotName]} alt={`avatar ${slotName}`} />
		</button>
	</div>
);

export default AvatarSlotBlock;
