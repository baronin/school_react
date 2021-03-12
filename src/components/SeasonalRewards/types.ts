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
