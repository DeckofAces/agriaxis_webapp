import { z } from "zod";
import type { User } from "@/models/user.model";

export const LoginSchema = z
  .object({
    email: z.email("Invalid email address").or(z.literal("")),
    phone: z
      .string()
      .min(10, "Phone must be at least 10 digits")
      .or(z.literal("")),
    password: z.string().min(8, "Password must be 8+ characters"),
    device_name: z.string(),
  })
  .refine((data) => data.email.length > 0 || data.phone.length > 0, {
    message: "Please provide either email or phone number",
    path: ["email", "phone"],
  });

export type LoginFormData = z.infer<typeof LoginSchema>;

export interface LoginState {
  formData: LoginFormData;
  errors: Partial<Record<keyof LoginFormData, string>>;
  updateFormData: (newData: Partial<LoginFormData>) => void;
  validateStep: (fields: (keyof LoginFormData)[]) => boolean;
  resetForm: () => void;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}
