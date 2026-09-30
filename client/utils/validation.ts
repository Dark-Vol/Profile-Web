export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function hasMinLength(value: string, min: number) {
  return value.trim().length >= min;
}

export type ContactValues = { name: string; email: string; message: string };

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export const CONTACT_MESSAGE_MIN = 10;

export function validateContact(
  values: ContactValues,
  messages: Record<keyof ContactValues, string>,
): ContactErrors {
  const errors: ContactErrors = {};
  if (!hasMinLength(values.name, 1)) errors.name = messages.name;
  if (!isEmail(values.email)) errors.email = messages.email;
  if (!hasMinLength(values.message, CONTACT_MESSAGE_MIN)) errors.message = messages.message;
  return errors;
}

export function hasErrors(errors: object) {
  return Object.keys(errors).length > 0;
}
