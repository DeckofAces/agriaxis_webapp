export type FarmStatus = "healthy" | "no data" | "average" | "poor";
export type NutrientLevel = "High" | "Medium" | "Low" | "-";

export interface FarmStatValues {
  soilPh: string;
  moisture: string;
  nutrient: NutrientLevel;
  size: string;
}

export interface FarmStatusData {
  id: string;
  title: string;
  status: FarmStatus;
  stats: FarmStatValues;
}
