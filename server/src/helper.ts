import { ZodError, ZodIssue } from "zod";

export const formatError = (error: ZodError): Record<string, string> => {
  const errors: Record<string, string> = {};

  error.issues.forEach((issue: ZodIssue) => {
    const field = issue.path[0] as string;
    errors[field] = issue.message;
  });

  return errors;
};
