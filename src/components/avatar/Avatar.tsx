import React, { FC, useState } from 'react';
import { AvatarBuilderProps } from '../../types/types';
import './Avatar.scss';
import AvatarItemBlock from './avatar-item';
import AvatarSelect from './avatar-select';

const Avatar: FC<AvatarBuilderProps> = ({ current, currentLevel, availableItems }) => {
	console.log('availableItems: ', currentLevel, availableItems);
	const [activeCategory] = useState('hair');
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


	const handlerSelectThing = (selectId: any): void => {
		setCharacterStats({ ...characterStats, [activeCategory]: selectId });
	};

	return (
		<div className="avatar">
			<h2 className="avatar__title">Bygg din avatar!</h2>
			<button type="button" className="avatar__button-close" />
			<div className="avatar__content">
				<div className="avatar__content-item">
					<AvatarItemBlock avatarItem={current.hair} nameItem={'hair'} />
					<AvatarItemBlock avatarItem={current.eyes} nameItem={'eyes'} />
					<AvatarItemBlock avatarItem={current.nose} nameItem={'nose'} />
					<AvatarItemBlock avatarItem={current.mouth} nameItem={'mouth'} />
				</div>
				<div className="avatar__content-center">
					<div className="avatar__body">
						<h3>Body</h3>
						<img src={current.body?.iconUrl} alt="Avatar" width="300" height="300" />
					</div>
					<AvatarSelect
						selectCategory={activeCategory}
						selectCallBack={handlerSelectThing}
						characterStats={characterStats}
					/>
				</div>
				<div className="avatar__content-item">
					<AvatarItemBlock avatarItem={current.hat} nameItem={'hat'} />
					<AvatarItemBlock avatarItem={current.glasses} nameItem={'glasses'} />
					<AvatarItemBlock avatarItem={current.shirt} nameItem={'shirt'} />
					<AvatarItemBlock avatarItem={current.special} nameItem={'special'} />
				</div>
			</div>
		</div>
	);
};

export default Avatar;
