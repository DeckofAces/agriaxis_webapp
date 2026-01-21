import { create } from "zustand";
import {
    OrganisationSchema,
  type OrganisationFormData,
  type OrganisationState,
} from "@/models/organisation.model";

const initialData: OrganisationFormData = {
  organisation_name: "",
  organisation_type: "",
  registration_number: "",
  number_of_farms_to_be_monitored: 0,
  state: "",
  city: "",
  local_government_area: "",
  address: "",
};

export const useOrganisationStore = create<OrganisationState>((set, get) => ({
  formData: {
    organisation_name: "",
    organisation_type: "",
    registration_number: "",
    number_of_farms_to_be_monitored: 0,
    state: "",
    city: "",
    local_government_area: "",
    address: "",
  },
  errors: {},

  updateFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
      // Clear specific error when user updates the field
      errors: {
        ...state.errors,
        ...Object.keys(newData).reduce(
          (acc, key) => ({ ...acc, [key]: undefined }),
          {},
        ),
      },
    })),

  validateStep: (fields) => {
    const { formData } = get();
    const newErrors: Partial<Record<keyof OrganisationFormData, string>> = {};
    let isValid = true;

    // Validate the whole schema but only check the fields we care about
    const result = OrganisationSchema.safeParse(formData);

    if (!result.success) {
      // Flatten the Zod error into a more readable format: { [field]: [message] }
      const formattedErrors = result.error.flatten().fieldErrors;

      fields.forEach((field) => {
        const errorMsg = formattedErrors[field]?.[0];
        if (errorMsg) {
          newErrors[field] = errorMsg;
          isValid = false;
        }
      });
    }

    set({ errors: newErrors });
    return isValid;
  },

  resetForm: () => set({ formData: { ...initialData }, errors: {} }),
}));
