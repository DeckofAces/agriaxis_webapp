import {
  RegistrationSchema,
  type RegistrationFormData,
  type RegistrationState,
} from "@/models/registration.schema";
import { create } from "zustand";

const initialData: RegistrationFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
  password_confirmation: "",
  farm_type: "",
  country: "",
};

export const useRegistrationStore = create<RegistrationState>((set, get) => ({
  formData: {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    farm_type: "",
    country: "",
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
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};
    let isValid = true;

    // Validate the whole schema but only check the fields we care about
    const result = RegistrationSchema.safeParse(formData);

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
