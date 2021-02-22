import { FC } from 'react';
import './AvatarModal.scss';

const AvatarModal: FC = () => {
	console.log('AvatarModal');
	return (
		<div className="avatar-modal">
			<div className="avatar-modal__inner">
				<h1 className="avatar-modal__title">Save changes?</h1>
				<div>
					<button className="avatar-modal__button" type="button">
						No
					</button>
					<button className="avatar-modal__button" type="submit">
						Yes
					</button>
				</div>
			</div>
		</div>
	);
};

export default AvatarModal;
