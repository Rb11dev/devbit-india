import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Enter a valid email address").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(3000),
});

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Enter a valid email address").max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please select a service").max(100),
  budget: z.string().trim().max(50).optional().or(z.literal("")),
  timeline: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(3000),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type EnquiryInput = z.infer<typeof enquirySchema>;
