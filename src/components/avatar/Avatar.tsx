import { FC } from 'react';
// import { AvatarData } from '../../types/types';

const Avatar: FC = () => {
	return (
		<div className="avatar">
			<h2 className="avatar__title">Bygg din avatar!</h2>
			<div className="avatar__content">
				<div className="avatar__content-left">Left</div>
				<div className="avatar__content-center">
					Center
					<div className="avatar__builder">icon</div>
					<div className="avatar__selected">
						<h3>selected</h3>
						<div className="avatar__selected-list">
							<div className="avatar__selected-item">
								<img src="#" alt="item" />
							</div>
							<div className="avatar__selected-item">
								<img src="#" alt="item" />
							</div>
						</div>
					</div>
				</div>
				<div className="avatar__content-right">Right</div>
			</div>
		</div>
	);
};

export default Avatar;
