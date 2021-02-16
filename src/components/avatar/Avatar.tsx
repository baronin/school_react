import React, { FC, useState } from 'react';
import { AvatarBuilderProps } from '../../types/types';
import './Avatar.scss';
import AvatarItemBlock from './avatar-item';
import AvatarSelect from './avatar-select';
import AvatarBuild from './avatar-build';

const Avatar: FC<AvatarBuilderProps> = ({ current, currentLevel, availableItems }) => {
	console.log('currentLevel: ', currentLevel);
	const [activeCategory, setActiveCategory] = useState('hair');
	const [characterStats, setCharacterStats] = useState({
		hair: '',
		eyes: '',
		nose: '',
		mouth: '',
		hat: '',
		shirt: '',
		body: '',
		special: '',
	});
	const [currentAvatarBuild] = useState(current);
	const [currentAvailableItems] = useState(availableItems);
	const handlerSelectThing = (selectId: string): void => {
		setCharacterStats({ ...characterStats, [activeCategory]: selectId });
	};

	console.log('currentAvailableItems', currentAvailableItems);

	return (
		<div className="avatar">
			<h2 className="avatar__title">Bygg din avatar!</h2>
			<button type="button" className="avatar__button-close" aria-label="Close" />
			<div className="avatar__content">
				<div className="avatar__content-item">
					<AvatarItemBlock
						avatarItem={availableItems.hair}
						nameItem={'hair'}
						onActivate={() => setActiveCategory('hair')}
					/>
					{/* <AvatarItemBlock
						avatarItem={availableItems.hair}
						nameItem={'hair'}
						onActivate={() => setActiveCategory('hair')}
					/>
					<AvatarItemBlock
						avatarItem={availableItems.eyes}
						nameItem={'eyes'}
						onActivate={() => setActiveCategory('eyes')}
					/>
					<AvatarItemBlock avatarItem={availableItems.nose} nameItem={'nose'} />
					<AvatarItemBlock avatarItem={availableItems.mouth} nameItem={'mouth'} /> */}
				</div>
				<div className="avatar__content-center">
					<AvatarBuild {...currentAvatarBuild} />
					<AvatarSelect
						selectCategory={activeCategory}
						selectCallBack={handlerSelectThing}
						characterStats={characterStats}
						currentAvailableItems={currentAvailableItems}
					/>
				</div>
				<div className="avatar__content-item">
					{/* <AvatarItemBlock avatarItem={current.hat} nameItem={'hat'} />
					<AvatarItemBlock avatarItem={current.glasses} nameItem={'glasses'} />
					<AvatarItemBlock avatarItem={current.shirt} nameItem={'shirt'} />
					<AvatarItemBlock avatarItem={current.special} nameItem={'special'} /> */}
				</div>
			</div>
		</div>
	);
};

export default Avatar;
