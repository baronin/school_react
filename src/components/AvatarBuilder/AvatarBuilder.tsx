import React, { FC, useCallback, useState } from 'react';
import { AvatarBuilderProps, AvatarItem, AvatarSlot } from './types';
import AvatarSlotBlock from './AvatarSlot';
import AvatarSelect from './AvatarSelect';
import AvatarGenerate from './AvatarGenerate';
import sprites from '../../assets/images/sprites/global.svg';
import './AvatarBuilder.scss';
import AvatarModal from './AvatarModal';

type Props = {
	closeModalWindow: () => void;
};

const AvatarBuilder: FC<Props & AvatarBuilderProps> = ({ current, currentLevel, availableItems, closeModalWindow }) => {
	const [avatarBuilderList, setAvatarBuilderList] = useState(current);
	const [currentDefault] = useState(current);
	const [activeSlot, setActiveSlot] = useState<AvatarSlot>('hair');
	const [isOpenModal, setOpenModal] = useState(false);
	const leftSlots: AvatarSlot[] = ['hair', 'eyes', 'nose', 'mouth'];
	const rightSlots: AvatarSlot[] = ['hat', 'glasses', 'shirt', 'special'];

	const resetChangeAvatar = () => {
		setAvatarBuilderList(currentDefault);
		closeModalWindow();
	};

	const saveChangeAvatar = () => {
		closeModalWindow();
	};

	const handleChangeAvatar = useCallback(
		(item: AvatarItem) => {
			let { ...newAvatar } = avatarBuilderList;

			if (/hair|hat/.test(activeSlot)) {
				switch (activeSlot) {
					case 'hair':
						newAvatar = { ...newAvatar, hat: undefined };
						break;
					case 'hat':
						newAvatar = { ...newAvatar, hair: undefined };
						break;
					default:
						break;
				}
			}

			if (/hat|glasses|special/.test(activeSlot) && newAvatar[activeSlot]?.id === item.id)
				newAvatar[activeSlot] = undefined;
			else newAvatar[activeSlot] = item;

			setAvatarBuilderList(newAvatar);
		},
		[activeSlot, avatarBuilderList],
	);

	return (
		<div className="avatar-builder">
			<h2 className="avatar-builder__title">Bygg din avatar!</h2>
			<button
				type="button"
				className="avatar-builder__button-close"
				aria-label="Close"
				onClick={() => setOpenModal(true)}
			>
				<svg className="avatar-builder__icon-close" width="16px" height="16px">
					<use href={`${sprites}#close`} />
				</svg>
			</button>
			<div className="avatar-builder__content">
				<div className="avatar-builder__content-items">
					{leftSlots.map((slot) => {
						const isActive = slot === activeSlot;

						return (
							<AvatarSlotBlock
								key={slot}
								avatar={avatarBuilderList[slot]}
								slotName={slot}
								onSelect={() => setActiveSlot(slot)}
								isActive={isActive}
							/>
						);
					})}
				</div>
				<div className="avatar-builder__content-center">
					<AvatarGenerate
						avatarThings={Object.values(avatarBuilderList).filter((item) => !!item)}
						onSelect={() => setActiveSlot('body')}
						isActive={activeSlot === 'body'}
					/>
					<AvatarSelect
						availableItems={availableItems[activeSlot]}
						currentLevel={currentLevel}
						onChangeItem={handleChangeAvatar}
						isActiveSelect={avatarBuilderList[activeSlot]}
					/>
				</div>
				<div className="avatar-builder__content-items">
					{rightSlots.map((slot) => {
						const isActive = slot === activeSlot;

						return (
							<AvatarSlotBlock
								key={slot}
								avatar={avatarBuilderList[slot]}
								slotName={slot}
								onSelect={() => setActiveSlot(slot)}
								isActive={isActive}
							/>
						);
					})}
				</div>
			</div>
			{isOpenModal && <AvatarModal resetChangeAvatar={resetChangeAvatar} saveChangeAvatar={saveChangeAvatar} />}
		</div>
	);
};

export default AvatarBuilder;
