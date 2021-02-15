import { FC, useState, useEffect, useRef, MouseEvent } from 'react';

// icons
import iconAvailable from '../../assets/images/general-icons/completed.svg';
import iconLock from '../../assets/images/general-icons/lock.svg';
// import hair from '../../assets/images/avatar-builder-components/Hats/Hat_jazz.svg';

// scss
import './SeasonalRewards.scss';

// types
import { SeasonalRewardsProps } from '../../types/types';

const SeasonalRewards: FC<SeasonalRewardsProps> = ({ currentLevel, rewards }) => {
	const [isScrolling, setIsScrolling] = useState(false);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [currentPosition, setCurrentPosition] = useState(0);
	const [isScroll, setIsScroll] = useState(false);
	const scrollList = useRef<HTMLUListElement>(null);
	const parentScrollList = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollList && scrollList.current && scrollList.current.scrollWidth > scrollList.current.offsetWidth) {
			setIsScroll(true);
		} else if (parentScrollList && parentScrollList.current)
			parentScrollList.current.classList.add('seasonal-rewards__content_shadow_disabled');
	});

	const onMouseDown = (event: MouseEvent): void => {
		setIsScrolling(true);
		setCurrentPosition(event.clientX);
	};

	const onMouseUp = (): void => {
		setIsScrolling(false);
	};

	const onMouseMove = (event: MouseEvent): void => {
		if (isScrolling && scrollList && scrollList.current) {
			if (scrollLeft >= 0) {
				setScrollLeft(scrollLeft + currentPosition - event.clientX);
				setCurrentPosition(event.clientX);

				scrollList.current.scrollLeft = scrollLeft + currentPosition - event.clientX;
			}
			if (scrollLeft < 0) setScrollLeft(0);
			if (scrollLeft > scrollList.current.scrollLeft) setScrollLeft(scrollList.current.scrollLeft);
		}
	};

	const onMouseMoveLeave = (): void => {
		setIsScrolling(false);
	};

	return (
		<div className="seasonal-rewards">
			<h3 className="seasonal-rewards__title">Seasonal Rewards:</h3>
			<div className="seasonal-rewards__content" ref={parentScrollList}>
				<ul
					className="seasonal-rewards__list"
					ref={scrollList}
					onMouseDown={isScroll ? onMouseDown : undefined}
					onMouseUp={isScroll ? onMouseUp : undefined}
					onMouseMove={isScroll ? onMouseMove : undefined}
					onMouseLeave={isScroll ? onMouseMoveLeave : undefined}
				>
					{rewards?.map((item, idx) => {
						const { requiredLevel, iconUrl } = item;
						const isAvailableItem = requiredLevel <= currentLevel;
						const isAvailableIcon = isAvailableItem ? iconAvailable : iconLock;
						const isAvailableItemClass = isAvailableItem
							? 'seasonal-rewards__item'
							: 'seasonal-rewards__item seasonal-rewards__item--disabled';

						return (
							<li key={idx} className={isAvailableItemClass}>
								<div className="seasonal-rewards__available">
									<img src={isAvailableIcon} alt="icon" width="18" height="18" />
								</div>
								<div className="seasonal-rewards__item-icon">
									<img src={iconUrl} alt="icon items" />
								</div>
								<p>Avatar item</p>
								<p>level {requiredLevel}</p>
							</li>
						);
					})}
					<li className="seasonal-rewards__item">
						<div className="seasonal-rewards__available">
							<img src={iconLock} alt="icon" width="18" height="18" />
						</div>
						<div className="seasonal-rewards__item-icon">
							<img src="hair" alt="icon items" />
						</div>
						<p>Avatar item</p>
						<p>level next</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SeasonalRewards;
