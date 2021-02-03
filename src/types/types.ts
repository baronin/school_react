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
/// ///////////////////////////////////////
//  Seasonal rewards component
//
//  Displays what rewards a user has unlocked and which rewards they can unlock by reaching specific levels
/// ///////////////////////////////////////
export interface SeasonalRewardsProps {
	currentLevel: number;
	rewards: SeasonalReward[];
}
export interface SeasonalReward {
	requiredLevel: number;
	iconUrl: string;
}
/// ///////////////////////////////////////
// Avatar common types
/// ///////////////////////////////////////
export type AvatarData = Record<AvatarSlot, AvatarItem | undefined>;

// The various slots for avatar pieces.
// Hat and hair is mutually exclusive. When selecting a hat, the hair should be unselected and vice versa
export type AvatarSlot = 'body' | 'hair' | 'eyes' | 'nose' | 'mouth' | 'hat' | 'glasses' | 'shirt' | 'special';

export interface AvatarItem {
	id: string;
	requiredLevel: number;
	iconUrl: string;
	components: AvatarComponent[];
}
export interface AvatarComponent {
	url: string;
	layer: number;
}
/// ///////////////////////////////////////
// Avatar renderer
//
// Should render a complete rendition of the avatar given a set of avatar 'pieces'
// The various pieces should be rendered in different layers, specified below
// Should be usable as a separate component to just render the avatar, and be used in the avatar builder
/// ///////////////////////////////////////
export interface AvatarRendererProps {
	avatar: AvatarData;
}
/// ///////////////////////////////////////
// Avatar builder
//
// Should allow the user to add or replace pieces of their avatar
/// ///////////////////////////////////////
export interface AvatarBuilderProps {
	current: AvatarData;
	currentLevel: number;
	availableItems: Record<AvatarSlot, AvatarItem[]>;
}

//  Avatar component layers in order (front to back)
//
//  1. special item
//  2. glasses
//  3. hair/hat front
//  4. shirt front, eyes, nose, mouth
//  5. body
//  6. shirt back
//  7. hair/hat back
