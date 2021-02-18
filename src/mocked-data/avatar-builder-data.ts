import { AvatarBuilderProps } from '../components/AvatarBuilder/types';

const avatarBuilderData: AvatarBuilderProps = {
	current: {
		body: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: '/avatar-builder-components/body/Boy 1.svg',
			components: [
				{
					url: '/avatar-builder-components/Body/Boy 2.svg',
					layer: 3,
				},
			],
		},
		hair: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: '/avatar-icons/BasicHair_04.png',
			components: [
				{
					url: '/avatar-builder-components/hair/BasicHair_04 back.svg',
					layer: 1,
				},
				{
					url: '/avatar-builder-components/hair/BasicHair_04 front.svg',
					layer: 5,
				},
			],
		},
		eyes: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: '/avatar-icons/Eyes brown.png',
			components: [
				{
					url: '/avatar-builder-components/eyes/Eyes blue.svg',
					layer: 4,
				},
			],
		},
		nose: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: '/avatar-icons/nose_wide.png',
			components: [
				{
					url: '/avatar-builder-components/nose/nose_long.svg',
					layer: 4,
				},
			],
		},
		mouth: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: '/avatar-icons/mouth_smile.png',
			components: [
				{
					url: '/avatar-builder-components/mouth/mouth_fun.svg',
					layer: 4,
				},
			],
		},
		hat: undefined,
		glasses: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: '/avatar-icons/Glasses_monocle.png',
			components: [
				{
					url: '/avatar-builder-components/Glasses/Glasses_cool.svg',
					layer: 6,
				},
			],
		},
		shirt: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: '/avatar-icons/Shirt_suit.png',
			components: [
				{
					url: '/avatar-builder-components/shirt/Shirt_hoodie_back.svg',
					layer: 2,
				},
				{
					url: '/avatar-builder-components/shirt/Shirt_hoodie_front.svg',
					layer: 4,
				},
			],
		},
		special: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: '/avatar-icons/Special_controller.png',
			components: [
				{
					url: '/avatar-builder-components/special items/Special_controller.svg',
					layer: 7,
				},
			],
		},
	},
	currentLevel: 2,
	availableItems: {
		body: [
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/BasicHair_04.png',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/body',
						layer: 3,
					},
				],
			},
			{
				id: 'uuid2',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/BasicHair_01.png',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/body',
						layer: 3,
					},
				],
			},
			{
				id: 'uuid3',
				requiredLevel: 1,
				iconUrl: 'path/to/body/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/body',
						layer: 3,
					},
				],
			},
		],
		hair: [
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/BasicHair_04.png',
				components: [
					{
						url: '/avatar-builder-components/hair/BasicHair_04 back.svg',
						layer: 1,
					},
					{
						url: '/avatar-builder-components/hair/BasicHair_04 front.svg',
						layer: 5,
					},
				],
			},
			{
				id: 'uuid1',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/BasicHair_03.png',
				components: [
					{
						url: '/avatar-builder-components/hair/BasicHair_03.svg',
						layer: 5,
					},
				],
			},
			{
				id: 'uuid2',
				requiredLevel: 4,
				iconUrl: '/avatar-icons/BasicHair_05.png',
				components: [
					{
						url: '/avatar-builder-components/hair/BasicHair_05 back.svg',
						layer: 1,
					},
					{
						url: '/avatar-builder-components/hair/BasicHair_05 front.svg',
						layer: 5,
					},
				],
			},
		],
		eyes: [
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Eyes blue.png',
				components: [
					{
						url: '/avatar-builder-components/Eyes/Eyes blue.svg',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Eyes brown.png',
				components: [
					{
						url: '/avatar-builder-components/Eyes/Eyes blue.svg',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Eyes green.png',
				components: [
					{
						url: '/avatar-builder-components/Eyes/Eyes blue.svg',
						layer: 4,
					},
				],
			},
		],
		nose: [
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/nose_long.png',
				components: [
					{
						url: '/avatar-builder-components/nose/nose_long.svg',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/nose_tiny.png',
				components: [
					{
						url: '/avatar-builder-components/nose/nose_tiny.svg',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/nose_wide.png',
				components: [
					{
						url: '/avatar-builder-components/nose/nose_wide.svg',
						layer: 4,
					},
				],
			},
		],
		mouth: [
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/mouth_fun.png',
				components: [
					{
						url: '/avatar-builder-components/mouth/mouth_fun.svg',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/mouth_laugh.png',
				components: [
					{
						url: '/avatar-builder-components/mouth/mouth_laugh.svg',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/mouth_smile.png',
				components: [
					{
						url: '/avatar-builder-components/mouth/mouth_smile.svg',
						layer: 4,
					},
				],
			},
		],
		hat: [
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Hat_jazz.png',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/hat_back',
						layer: 1,
					},
					{
						url: 'path/to/file/in/avatar-builder-components/hat_front',
						layer: 5,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Hat_jazz.png',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/hat',
						layer: 5,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 4,
				iconUrl: 'path/to/hat/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/hat_back',
						layer: 1,
					},
					{
						url: 'path/to/file/in/avatar-builder-components/hat_front',
						layer: 5,
					},
				],
			},
		],
		glasses: [
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: 'path/to/glasses/file/in/avatar-icons',
				components: [
					{
						url: '/avatar-builder-components/Glasses/Glasses_cool.svg',
						layer: 6,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 3,
				iconUrl: 'path/to/glasses/file/in/avatar-icons',
				components: [
					{
						url: '/avatar-builder-components/Glasses/Glasses_monocle.svg',
						layer: 6,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 5,
				iconUrl: 'path/to/glasses/file/in/avatar-icons',
				components: [
					{
						url: '/avatar-builder-components/Glasses/Glasses_sunburst.svg',
						layer: 6,
					},
				],
			},
		],
		shirt: [
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: 'path/to/shirt/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/shirt_back',
						layer: 2,
					},
					{
						url: 'path/to/file/in/avatar-builder-components/shirt_front',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: 'path/to/shirt/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/shirt',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 5,
				iconUrl: 'path/to/shirt/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/shirt_back',
						layer: 2,
					},
					{
						url: 'path/to/file/in/avatar-builder-components/shirt_front',
						layer: 4,
					},
				],
			},
		],
		special: [
			{
				id: 'uuid',
				requiredLevel: 2,
				iconUrl: 'path/to/special/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/special',
						layer: 7,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 4,
				iconUrl: 'path/to/special/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/special',
						layer: 7,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 6,
				iconUrl: 'path/to/special/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/special',
						layer: 7,
					},
				],
			},
		],
	},
};

export default avatarBuilderData;
