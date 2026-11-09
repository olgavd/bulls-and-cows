export function isValidGuess(
  guess: string,
  length: number,
  base: number,
): boolean {
  if (
    typeof guess !== 'string' ||
    guess.length <= 0 ||
    ![2, 8, 10, 16].includes(base)
  ) {
    return false;
  }
  const digits = '0123456789abcdef'.slice(0, base);
  const regex = new RegExp(`^[${digits}]+$`);
  const normalizedGuess = guess.toLowerCase();
  if (
    new Set(normalizedGuess).size !== guess.length ||
    guess.length !== length ||
    !regex.test(normalizedGuess)
  ) {
    return false;
  }

  return true;
}
