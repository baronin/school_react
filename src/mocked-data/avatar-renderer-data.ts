import { AvatarRendererProps } from '../components/AvatarBuilder/types';

const avatarRerenderData: AvatarRendererProps = {
	avatar: {
		body: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: 'path/to/body/file/in/avatar-icons',
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
			iconUrl: 'path/to/hair/file/in/avatar-icons',
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
			iconUrl: 'path/to/eyes/file/in/avatar-icons',
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
			iconUrl: 'path/to/nose/file/in/avatar-icons',
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
			iconUrl: 'path/to/mouth/file/in/avatar-icons',
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
			iconUrl: 'path/to/glasses/file/in/avatar-icons',
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
		special: {
			id: 'uuid',
			requiredLevel: 1,
			iconUrl: 'path/to/special/file/in/avatar-icons',
			components: [
				{
					url: 'path/to/file/in/avatar-builder-components/special',
					layer: 7,
				},
			],
		},
	},
};

export default avatarRerenderData;
