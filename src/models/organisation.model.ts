import { z } from "zod";

export const OrganisationSchema = z.object({
  organisation_name: z
    .string()
    .min(2, "Organisation name must be at least 2 characters"),
  organisation_type: z.string().min(1, "Organisation type is required"),
  registration_number: z.string().min(1, "Registration number is required"),
  number_of_farms_to_be_monitored: z
    .number()
    .min(1, "Number of farms to be monitored is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  local_government_area: z.string().min(1, "Local government area is required"),
  address: z.string().min(1, "Address is required"),
});

export type OrganisationFormData = z.infer<typeof OrganisationSchema>;

export interface OrganisationState {
  formData: OrganisationFormData;
  errors: Partial<Record<keyof OrganisationFormData, string>>;
  updateFormData: (newData: Partial<OrganisationFormData>) => void;
  validateStep: (fields: (keyof OrganisationFormData)[]) => boolean;
  resetForm: () => void;
}
