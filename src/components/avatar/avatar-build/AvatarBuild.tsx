import { FC } from 'react';
import { AvatarData } from '../../../types/types';

const AvatarBuild: FC<AvatarData> = (props) => {
	const { body, eyes, hat, hair } = props;
	return (
		<div className="avatar__body">
			<h3>Body</h3>
			<div className="avatar__build">
				{body && <img src={body?.iconUrl} alt="" />}
				{hair && <img src={hair?.iconUrl} alt="" />}
				{hat && <img src={hat?.iconUrl} alt="" />}
				{eyes && <img src={eyes?.iconUrl} alt="" />}
			</div>
		</div>
	);
};

export default AvatarBuild;
