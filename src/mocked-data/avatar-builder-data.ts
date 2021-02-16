import { AvatarBuilderProps } from '../types/types';

const avatarBuilderData: AvatarBuilderProps = {
	current: {
		body: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: '/avatar-builder-components/body/Boy 1.svg',
			components: [
				{
					url: 'path/to/file/in/avatar-builder-components/body',
					layer: 3,
				},
			],
		},
		hair: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: '/avatar-icons/BasicHair_01.png',
			components: [
				{
					url: 'path/to/file/in/avatar-builder-components/hair_back',
					layer: 1,
				},
				{
					url: 'path/to/file/in/avatar-builder-components/hair_front',
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
					url: 'path/to/file/in/avatar-builder-components/eyes',
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
					url: 'path/to/file/in/avatar-builder-components/nose',
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
					url: 'path/to/file/in/avatar-builder-components/mouth',
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
					url: 'path/to/file/in/avatar-builder-components/glasses',
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
					url: 'path/to/file/in/avatar-builder-components/shirt_back',
					layer: 2,
				},
				{
					url: 'path/to/file/in/avatar-builder-components/shirt_front',
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
					url: 'path/to/file/in/avatar-builder-components/special',
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
				iconUrl: '/avatar-icons/BasicHair_01.png',
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
				iconUrl: '/avatar-icons/BasicHair_01.png',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/hair_back',
						layer: 1,
					},
					{
						url: 'path/to/file/in/avatar-builder-components/hair_front',
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
						url: 'path/to/file/in/avatar-builder-components/hair',
						layer: 5,
					},
				],
			},
			{
				id: 'uuid2',
				requiredLevel: 4,
				iconUrl: '/avatar-icons/BasicHair_02.png',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/hair_back',
						layer: 1,
					},
					{
						url: 'path/to/file/in/avatar-builder-components/hair_front',
						layer: 5,
					},
				],
			},
		],
		eyes: [
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/BasicHair_01.png',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/eyes',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/BasicHair_01.png',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/eyes',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/BasicHair_01.png',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/eyes',
						layer: 4,
					},
				],
			},
		],
		nose: [
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/BasicHair_01.png',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/nose',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: 'path/to/nose/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/nose',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: 'path/to/nose/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/nose',
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
						url: 'path/to/file/in/avatar-builder-components/mouth',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: 'path/to/mouth/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/mouth',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid',
				requiredLevel: 1,
				iconUrl: 'path/to/mouth/file/in/avatar-icons',
				components: [
					{
						url: 'path/to/file/in/avatar-builder-components/mouth',
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
						url: 'path/to/file/in/avatar-builder-components/glasses',
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
						url: 'path/to/file/in/avatar-builder-components/glasses',
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
						url: 'path/to/file/in/avatar-builder-components/glasses',
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
