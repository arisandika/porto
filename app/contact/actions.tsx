"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function sendEmailAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const data = Object.fromEntries(formData.entries());

  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return {
      status: "error",
      message: "Please correct the errors below.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    console.log("Sending email with data:", result.data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      status: "success",
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong. Please try again later.",
    };
  }
}
