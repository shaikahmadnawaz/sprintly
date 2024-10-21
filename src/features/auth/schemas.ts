import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must contain at least 6 character(s)")
    .max(256, "Password must contain at most 256 character(s)"),
});

export const signUpSchema = z.object({
  name: z.string().trim().min(2, "Name must contain at least 2 character(s)"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must contain at least 6 character(s)")
    .max(256, "Password must contain at most 256 character(s)"),
});
