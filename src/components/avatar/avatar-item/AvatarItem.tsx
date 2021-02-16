import { FC } from 'react';
import { AvatarItem, AvatarSlot } from '../../../types/types';

type Props = {
	avatarItem?: AvatarItem[];
	nameItem: AvatarSlot;
};

const AvatarItemBlock: FC<Props> = ({ avatarItem, nameItem }) => {
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
	console.log('currentImage: ', 1 + 2, currentImage);

	return (
		<div>
			test
			{/* <div id={avatarItem?.id} className="avatar__item">
				<h3 className="avatar__item-title">{nameItem}</h3>
				<button type="button" className="avatar__item-button" onClick={onActivate}>
					<img src={currentImage} alt={`avatar ${nameItem}`} />
				</button>
			</div> */}
		</div>
	);
};

export default AvatarItemBlock;
