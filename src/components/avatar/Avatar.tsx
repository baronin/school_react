import React, { FC, useState } from 'react';
import { AvatarBuilderProps, AvatarItem, AvatarSlot } from '../../types/types';
import './Avatar.scss';
import AvatarItemBlock from './avatar-item';
import AvatarSelect from './avatar-select';
import AvatarBuild from './avatar-build';

const Avatar: FC<AvatarBuilderProps> = ({ current, currentLevel, availableItems }) => {
	console.log('currentLevel: ', currentLevel);
	const [avatar, changeAvatar] = useState(current);
	const [activeSlot, setActiveSlot] = useState<AvatarSlot>('hair');
	const leftSlots: AvatarSlot[] = ['hair', 'eyes', 'nose', 'mouth'];
	const rightSlots: AvatarSlot[] = ['hat', 'glasses', 'shirt', 'special'];

	const setAvatarItem = (item: AvatarItem) => {
		const { ...newAvatar } = avatar;
		newAvatar[activeSlot] = item;
		changeAvatar(newAvatar);
	};

	return (
		<div className="avatar">
			<h2 className="avatar__title">Bygg din avatar!</h2>
			<button type="button" className="avatar__button-close" aria-label="Close" />
			<div className="avatar__content">
				<div className="avatar__content-item">
					{leftSlots.map((slot) => (
						<AvatarItemBlock
							key={slot}
							avatarItem={current[slot]}
							nameItem={slot}
							onActivate={() => setActiveSlot(slot)}
						/>
					))}
				</div>
				<div className="avatar__content-center">
					<AvatarBuild {...avatar} />
					<AvatarSelect
						availableItems={availableItems[activeSlot]}
						currentLevel={currentLevel}
						onChangeItem={setAvatarItem}
					/>
				</div>
				<div className="avatar__content-item">
					{rightSlots.map((slot) => (
						<AvatarItemBlock
							key={slot}
							avatarItem={current[slot]}
							nameItem={slot}
							onActivate={() => setActiveSlot(slot)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Avatar;
