export function createDigitValidator(base: number): (char: string) => boolean {
  return (char: string): boolean => {
    if (
      typeof char !== 'string' ||
      char.length !== 1 ||
      ![2, 8, 10, 16].includes(base)
    ) {
      return false;
    }
    const validDigits = '0123456789abcdef'.slice(0, base);
    return validDigits.includes(char.toLowerCase());
  };
}
