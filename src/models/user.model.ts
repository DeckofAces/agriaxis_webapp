import type { Organisation } from "@/models/organisation.model";

export interface User {
  id: string;
  name: string;
  organisations: Organisation[];
  created_at: string;
  updated_at: string;
  email_verified_at: string | null;
  email: string;
  phone: string | null;
  role: string;
  status: string;
  date_created: string;
}
