import { FC, ReactNode } from 'react';
import { AvatarComponent, AvatarItem } from '../types';
import './AvatarGenerate.scss';

type Props = {
	avatarThings: (AvatarItem | undefined)[];
};

const AvatarGenerate: FC<Props> = ({ avatarThings }) => {
	const buildAvatar = avatarThings.map((item: AvatarItem | undefined) => {
		return item?.components.map(
			(component: AvatarComponent, index: number): ReactNode => {
				return <img key={index} src={component.url} alt="things" style={{ zIndex: component.layer }} />;
			},
		);
	});

	return (
		<div className="avatar-generate">
			<h3 className="avatar-generate__title">Body</h3>
			<div className="avatar-generate__wrap">{buildAvatar}</div>
		</div>
	);
};

export default AvatarGenerate;
