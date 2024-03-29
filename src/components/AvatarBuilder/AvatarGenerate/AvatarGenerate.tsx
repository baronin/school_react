import { FC, ReactNode } from 'react';
import { AvatarComponent, AvatarItem } from '../types';
import './AvatarGenerate.scss';

type Props = {
	avatarThings: (AvatarItem | undefined)[];
	onSelect?: () => void;
	isActive?: boolean;
};

const AvatarGenerate: FC<Props> = ({ avatarThings, onSelect, isActive }) => {
	const buildAvatar = avatarThings.map((item: AvatarItem | undefined) => {
		return item?.components.map(
			(component: AvatarComponent, index: number): ReactNode => {
				return <img key={index} src={component.url} alt="things" style={{ zIndex: component.layer + 10 }} />;
			},
		);
	});

	return (
		<div className="avatar-generate" onClick={onSelect}>
			<h3 className="avatar-generate__title">Body</h3>
			<div className={`avatar-generate__wrap ${isActive ? 'avatar-generate__wrap--active' : ''}`}>{buildAvatar}</div>
		</div>
	);
};

export default AvatarGenerate;
