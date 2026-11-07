export function generateSecret(
  length: number,
  base: number,
  random: () => number = Math.random,
): string {
  if (base !== 2 && base !== 8 && base !== 10 && base !== 16) {
    throw new Error('Основание системы счисления должно быть 2, 8, 10 или 16');
  }

  if (length > base) {
    throw new Error('Длинна не должна быть больше основания');
  }
  void length;
  void base;
  void random;

  return Array.from({ length }, () => {
    const randomSecret = Math.floor(random() * base);
    return randomSecret.toString(base);
  }).join('');
}
