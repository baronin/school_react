import React, { FC, useCallback, useState } from 'react';
import { AvatarBuilderProps, AvatarItem, AvatarSlot } from './types';
import AvatarSlotBlock from './AvatarSlot';
import AvatarSelect from './AvatarSelect';
import AvatarBuild from './AvatarGenerate';
import './AvatarBuilder.scss';

const AvatarBuilder: FC<AvatarBuilderProps> = ({ current, currentLevel, availableItems }: AvatarBuilderProps) => {
	const [avatar, setAvatar] = useState(current);
	const [activeSlot, setActiveSlot] = useState<AvatarSlot>('hair');
	const [activeSelectId, setActiveSelectId] = useState(availableItems.hair[0].id);

	const leftSlots: AvatarSlot[] = ['hair', 'eyes', 'nose', 'mouth'];
	const rightSlots: AvatarSlot[] = ['hat', 'glasses', 'shirt', 'special'];

	const handleChangeAvatar = useCallback(
		(item: AvatarItem) => {
			const { ...newAvatar } = avatar;
			newAvatar[activeSlot] = item;
			setAvatar(newAvatar);
		},
		[activeSlot, avatar],
	);
	const handlerSelectThing = (selectItem: any) => {
		if (selectItem && selectItem.requiredLevel > currentLevel) return;
		setActiveSelectId(selectItem.id);
		// selectCallBack(selectItem.id);
	};

	return (
		<div className="avatar">
			<h2 className="avatar__title">Bygg din avatar!</h2>
			<button type="button" className="avatar__button-close" aria-label="Close" />
			<div className="avatar__content">
				<div className="avatar__content-items">
					{leftSlots.map((slot) => {
						const isActive = slot === activeSlot;
						console.log('avatar[slot]', avatar[slot]);
						return (
							<AvatarSlotBlock
								key={slot}
								avatar={avatar[slot]}
								slotName={slot}
								onSelect={() => setActiveSlot(slot)}
								isActive={isActive}
							/>
						);
					})}
				</div>
				<div className="avatar__content-center">
					<AvatarBuild {...avatar} />
					<AvatarSelect
						availableItems={availableItems[activeSlot]}
						currentLevel={currentLevel}
						onChangeItem={handleChangeAvatar}
						isActiveSelect={activeSelectId}
						onChangeSelectId={handlerSelectThing}
					/>
				</div>
				<div className="avatar__content-items">
					{rightSlots.map((slot) => {
						const isActive = slot === activeSlot;

						return (
							<AvatarSlotBlock
								key={slot}
								avatar={avatar[slot]}
								slotName={slot}
								onSelect={() => setActiveSlot(slot)}
								isActive={isActive}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AvatarBuilder;
