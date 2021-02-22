/// ///////////////////////////////////////
//  Mission component
//
//  Displays a weekly mission chain of three different missions
/// ///////////////////////////////////////

export interface MissionUserPathData {
	readonly pathId: string;
	readonly pathName: string;
	readonly finalMissionNumber?: number;
	readonly upcomingPathResetDate?: Date;
	// Expect the total mission count stored in these properties to be 3
	readonly previousMissions: MissionData[];
	readonly currentMission: MissionData;
	readonly upcomingMissions: MissionData[];
}
export interface MissionData {
	objectives: ObjectiveData[];
	completed: boolean;
	readonly missionNumber: number;
	readonly rewards: RewardData[]; // expect rewards to only be of currency 'xp'
}
export interface ObjectiveData {
	behaviorId: string;
	title: string;
	amount: number;
	completed: number;
	cta?: string;
}
export interface RewardData {
	readonly currency: 'xp' | 'coin' | 'vipcurrency' | 'team-xp';
	readonly amount: number;
}
