import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  phone: z
    .string()
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  contactMethod: z.enum(["email", "phone", "both"], {
    required_error: "Please select a preferred contact method",
  }),
  newsletter: z.boolean().default(false),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Mock submission response
export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  id?: string;
}
