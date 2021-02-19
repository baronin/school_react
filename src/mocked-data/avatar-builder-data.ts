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
			id: 'uuid5',
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
			id: 'uuid9',
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
			id: 'uuid12',
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
			id: 'uuid16',
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
			id: 'uuid19',
			requiredLevel: 1,
			iconUrl: '/avatar-icons/Shirt_hoodie.png',
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
			id: 'uuid22',
			requiredLevel: 1,
			iconUrl: '/avatar-icons/Special_basketball.png',
			components: [
				{
					url: '/avatar-builder-components/special items/Special_basketball.svg',
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
				id: 'uuid4',
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
				id: 'uuid5',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Eyes brown.png',
				components: [
					{
						url: '/avatar-builder-components/Eyes/Eyes brown.svg',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid6',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Eyes green.png',
				components: [
					{
						url: '/avatar-builder-components/Eyes/Eyes green.svg',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid67',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Eyes makeup.png',
				components: [
					{
						url: '/avatar-builder-components/Eyes/Eyes makeup.svg',
						layer: 4,
					},
				],
			},
		],
		nose: [
			{
				id: 'uuid7',
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
				id: 'uuid8',
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
				id: 'uuid9',
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
				id: 'uuid10',
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
				id: 'uuid11',
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
				id: 'uuid12',
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
				id: 'uuid13',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Hat_jazz.png',
				components: [
					{
						url: '/avatar-builder-components/Hats/Hat_jazz.svg',
						layer: 5,
					},
				],
			},
			{
				id: 'uuid14',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Hat_pirate.png',
				components: [
					{
						url: '/avatar-builder-components/Hats/Hat_pirate_back.svg',
						layer: 1,
					},
					{
						url: '/avatar-builder-components/Hats/Hat_pirate_front.svg',
						layer: 5,
					},
				],
			},
			{
				id: 'uuid15',
				requiredLevel: 4,
				iconUrl: '/avatar-icons/Hat_snapBack.png',
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
				id: 'uuid16',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Glasses_monocle.png',
				components: [
					{
						url: '/avatar-builder-components/Glasses/Glasses_monocle.svg',
						layer: 6,
					},
				],
			},
			{
				id: 'uuid17',
				requiredLevel: 3,
				iconUrl: '/avatar-icons/Glasses_purple.png',
				components: [
					{
						url: '/avatar-builder-components/Glasses/Glasses_purple.svg',
						layer: 6,
					},
				],
			},
			{
				id: 'uuid18',
				requiredLevel: 5,
				iconUrl: '/avatar-icons/Glasses_round.png',
				components: [
					{
						url: '/avatar-builder-components/Glasses/Glasses_round.svg',
						layer: 6,
					},
				],
			},
		],
		shirt: [
			{
				id: 'uuid19',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Shirt_hoodie.png',
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
			{
				id: 'uuid20',
				requiredLevel: 1,
				iconUrl: '/avatar-icons/Shirt_leatherJacket.png',
				components: [
					{
						url: '/avatar-builder-components/shirt/Shirt_leatherJacket.svg',
						layer: 4,
					},
				],
			},
			{
				id: 'uuid21',
				requiredLevel: 5,
				iconUrl: '/avatar-icons/Shirt_magic.png',
				components: [
					{
						url: '/avatar-builder-components/shirt/Shirt_magic.svg',
						layer: 4,
					},
				],
			},
		],
		special: [
			{
				id: 'uuid22',
				requiredLevel: 2,
				iconUrl: '/avatar-icons/Special_basketball.png',
				components: [
					{
						url: '/avatar-builder-components/shirt/Special_basketball.svg',
						layer: 7,
					},
				],
			},
			{
				id: 'uuid23',
				requiredLevel: 4,
				iconUrl: '/avatar-icons/Special_controller.png',
				components: [
					{
						url: '/avatar-builder-components/shirt/Special_controller.svg',
						layer: 7,
					},
				],
			},
			{
				id: 'uuid24',
				requiredLevel: 6,
				iconUrl: '/avatar-icons/Special_cowalla.png',
				components: [
					{
						url: '/avatar-builder-components/shirt/Special_cowalla.svg',
						layer: 7,
					},
				],
			},
		],
	},
};

export default avatarBuilderData;
