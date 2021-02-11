import { FC, useEffect } from 'react';
import './AvatarSelect.scss';
// import { AvatarData } from '../../types/types';
// mocked data
import missionUserPathData from '../../../mocked-data/avatar-builder-data';

type Props = {
	readonly selectCategory: string;
};

const AvatarSelect: FC<Props> = ({ selectCategory }) => {
	// const characterLevel: number = missionUserPathData.currentLevel;

	useEffect(() => {
		console.log(selectCategory);
	});

	const selectList = missionUserPathData.availableItems.hair.map((item, index) => {
		return (
			<li key={index}>
				<img className="``" src={`image-mockups/hairs/${index + 1}.svg`} />
				<div className="">
					<img src="../../../assets/images/general-icons/lock.svg" />
					<p>{item.requiredLevel}</p>
				</div>
			</li>
		);
	});

	return (
		<div>
			<p></p>
			<ul>{selectList}</ul>
		</div>
		// <div className="avatar">
		// 	<h2 className="avatar__title">Bygg din avatar!</h2>
		// 	<div className="avatar__content">
		// 		<div className="avatar__content-left">Left</div>
		// 		<div className="avatar__content-center">
		// 			Center
		// 			<div className="avatar__builder">icon</div>
		// 			<div className="avatar__selected">
		// 				<h3>selected</h3>
		// 				<div className="avatar__selected-list">
		// 					<div className="avatar__selected-item">
		// 						<img src="#" alt="item" />
		// 					</div>
		// 					<div className="avatar__selected-item">
		// 						<img src="#" alt="item" />
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="avatar__content-right">Right</div>
		// 	</div>
		// </div>
	);
};

export default AvatarSelect;
