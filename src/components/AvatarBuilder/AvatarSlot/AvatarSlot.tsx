import { FC } from 'react';
import { AvatarItem, AvatarSlot } from '../types';
import './AvatarSlot.scss';
import { defaultIcon } from './defaultIcon';

type AvatarItemProps = {
	avatar?: AvatarItem;
	slotName: AvatarSlot;
	onSelect?: () => void;
	isActive?: boolean;
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
