import { MissionUserPathData } from '../components/Missions/types';

const missionUserPathData: MissionUserPathData = {
	pathId: 'uuid',
	pathName: 'Mission path',
	finalMissionNumber: 3,
	upcomingPathResetDate: new Date('2021-02-18T12:00:00.000Z'),
	previousMissions: [
		{
			completed: true,
			missionNumber: 1,
			rewards: [
				{
					currency: 'xp',
					amount: 100,
				},
			],
			objectives: [
				{
					behaviorId: 'uuid1',
					title: 'objectives previousMissions 1',
					amount: 1,
					completed: 1,
				},
				{
					behaviorId: 'uuid2',
					title: 'objectives previousMissions 2',
					amount: 1,
					completed: 1,
				},
				{
					behaviorId: 'uuid3',
					title: 'objectives previousMissions 3',
					amount: 1,
					completed: 1,
				},
			],
		},
	],
	currentMission: {
		completed: false,
		missionNumber: 2,
		rewards: [
			{
				currency: 'xp',
				amount: 100,
			},
		],
		objectives: [
			{
				behaviorId: 'uuid1',
				title: 'objectives currentMission one',
				amount: 1,
				completed: 1,
			},
			{
				behaviorId: 'uuid2',
				title: 'objectives currentMission two',
				amount: 1,
				completed: 0,
			},
			{
				behaviorId: 'uuid3',
				title: 'objectives currentMission three',
				amount: 1,
				completed: 0,
			},
		],
	},
	upcomingMissions: [
		{
			completed: false,
			missionNumber: 3,
			rewards: [
				{
					currency: 'xp',
					amount: 100,
				},
			],
			objectives: [
				{
					behaviorId: 'uuid1',
					title: 'Objective 1',
					amount: 1,
					completed: 0,
				},
				{
					behaviorId: 'uuid2',
					title: 'Objective 2',
					amount: 1,
					completed: 0,
				},
				{
					behaviorId: 'uuid3',
					title: 'Objective 3',
					amount: 1,
					completed: 0,
				},
			],
		},
	],
};
export default missionUserPathData;
