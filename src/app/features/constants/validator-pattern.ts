export const ValidatorPattern = {
  NoSpecialCharacterWithoutNumeric: /^[a-zA-Z]+$/, // Only letters, no numbers or special characters
  NoSpecialCharacterWithNumeric: /^[a-zA-Z0-9]+$/, // Alphanumeric, no special characters
  Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Standard email format
};
