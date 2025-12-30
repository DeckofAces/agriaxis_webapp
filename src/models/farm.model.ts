export interface Farm {
  id: string;
  farmName: string;
  size: number;
  location: string;
  status: string;
  dateCreated: string;
  soilPh: number;
  moisture: number;
  nutrient: string;
  tests: FarmTest[];
}

export interface FarmTest {
  testID: string;
  status: string;
  payment: number;
  date: string;
  plantingDate: string;
}
