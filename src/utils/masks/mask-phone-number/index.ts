export function maskPhoneNumber(value: string): string {
  // Remove all non-digit characters
  const digitsOnly = value.replace(/\D/g, '');

  // Ensure it has at most 11 digits
  const trimmed = digitsOnly.slice(0, 11);

  // Apply formatting as (XX) XXXXX-XXXX
  if (trimmed.length <= 2) {
    return trimmed; // If 2 or fewer digits, just return
  }

  if (trimmed.length <= 7) {
    return `(${trimmed.slice(0, 2)}) ${trimmed.slice(2)}`; // Format without hyphen
  }

  return `(${trimmed.slice(0, 2)}) ${trimmed.slice(2, 7)}-${trimmed.slice(7)}`; // Full format
}
