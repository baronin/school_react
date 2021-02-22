import { FC } from 'react';
import './AvatarModal.scss';

type Props = {
	resetChangeAvatar: () => void;
	saveChangeAvatar: () => void;
};

const AvatarModal: FC<Props> = ({ resetChangeAvatar, saveChangeAvatar }) => {
	return (
		<div className="avatar-modal">
			<div className="avatar-modal__inner">
				<h1 className="avatar-modal__title">Save changes?</h1>
				<div>
					<button className="avatar-modal__button" type="button" onClick={() => resetChangeAvatar()}>
						No
					</button>
					<button className="avatar-modal__button" type="submit" onClick={() => saveChangeAvatar()}>
						Yes
					</button>
				</div>
			</div>
		</div>
	);
};

export default AvatarModal;
