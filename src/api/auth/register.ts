import type { RegistrationFormData } from "@/models/registration.schema";
import apiClient from "../api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: RegistrationFormData) => {
      const payload = {...data, name: `${data.first_name} ${data.last_name}`}
      const response = await apiClient.post("/register", payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
