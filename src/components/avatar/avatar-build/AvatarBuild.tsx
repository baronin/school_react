import { FC } from 'react';
import { AvatarData } from '../../../types/types';

const AvatarBuild: FC<AvatarData> = (props) => {
	console.log('avatar build props', props);
	// console.log('this', body);
	// console.log(eyes);
	// console.log(glasses);
	// console.log(hair);
	// console.log(hat);
	// console.log(mouth);
	return (
		<div className="avatar__body">
			<h3>Body</h3>
			{/* {body && <img src={body?.iconUrl} alt="" />} */}
			{/* {eyes && <img src={eyes?.iconUrl} alt="" />} */}
			{/* {hat && <img src={hat?.iconUrl} alt="" />} */}
		</div>
	);
};

export default AvatarBuild;
