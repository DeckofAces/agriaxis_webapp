import { z } from "zod";

export const signupSchema = z
  .object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    phone: z.string().optional(),
    email: z.email("Invalid email address").optional(),
    loginType: z.enum(["phone number", "email"]),
  })
  .superRefine((data, ctx) => {
    if (data.loginType === "phone number") {
      if (!data.phone || data.phone.trim() === "") {
        ctx.addIssue({
          path: ["phone"],
          code: z.ZodIssueCode.custom,
          message: "Phone number is required",
        });
      }
    }

    if (data.loginType === "email") {
      if (!data.email || data.email.trim() === "") {
        ctx.addIssue({
          path: ["email"],
          code: z.ZodIssueCode.custom,
          message: "Email is required",
        });
      }
    }
  });

export type SignupSchema = z.infer<typeof signupSchema>;
