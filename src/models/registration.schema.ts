import { z } from "zod";

export const RegistrationSchema = z
  .object({
    first_name: z.string().min(2, "First Name is required"),
    last_name: z.string().min(2, "Last Name is required"),
    email: z.email("Invalid email address"),
    phone: z.string().min(10, "Phone must be at least 10 digits"),
    password: z.string().min(8, "Password must be 8+ characters"),
    password_confirmation: z.string(),
    farm_type: z.string().min(1, "Please select a farm type"),
    country: z.string().min(1, "Please select a country"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  });

export type RegistrationFormData = z.infer<typeof RegistrationSchema>;

export interface RegistrationState {
  formData: RegistrationFormData;
  errors: Partial<Record<keyof RegistrationFormData, string>>;
  updateFormData: (newData: Partial<RegistrationFormData>) => void;
  validateStep: (fields: (keyof RegistrationFormData)[]) => boolean;
  resetForm: () => void;
}
