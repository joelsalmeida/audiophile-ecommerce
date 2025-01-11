export function maskZipCode(value: string) {
  // Remove all non-digit characters
  const digitsOnly = value.replace(/\D/g, '');

  // Ensure it has at most 8 digits
  const trimmed = digitsOnly.slice(0, 8);

  // Format as 00000-000
  if (trimmed.length <= 5) {
    return trimmed; // If less than or equal to 5 digits, just return
  }

  return `${trimmed.slice(0, 5)}-${trimmed.slice(5)}`;
}
