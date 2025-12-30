export interface Transaction {
  id: string;
  farmName: string;
  status: "Processing" | "Completed";
  payment: string;
  date: string;
}