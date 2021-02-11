import { FC } from 'react';
import { AvatarBuilderProps } from '../../types/types';
import './Avatar.scss';
import AvatarItemBlock from './avatar-item';

const Avatar: FC<AvatarBuilderProps> = ({ current, currentLevel, availableItems }) => {
	console.log('current: ', current);
	console.log('current: ', currentLevel);
	console.log('current: ', availableItems);
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
					<div className="avatar__selected">
						<h3>Selected</h3>
						<div className="avatar__selected-list">
							<div className="avatar__selected-item">
								<img src="#" alt="item" />
							</div>
						</div>
					</div>
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
