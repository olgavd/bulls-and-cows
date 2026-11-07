import { generateSecret } from './generateSecret.js';

describe('generateSecret', () => {
  test('Двоичная система (base 2) должна генерировать строку только из 1 и 0', () => {
    let step = 0;
    const mockRandom = () => (step++ === 0 ? 0.99 : 0.01);
    const result = generateSecret(2, 2, mockRandom);

    expect(result).toBe('10');
    expect(new Set(result).size).toBe(2);
    expect(result).toMatch(/^[01]+$/);
  });

  test.each(Array.from({ length: 8 }, (_, index) => [index + 1, 8]))(
    'Восьмеричная система (base 8): секрет длиной %i не содержит цифр 8 и 9',
    (length, base) => {
      let step = 0;
      const mockRandom = () => ((step++ * 3) % base) / base;
      const secret = generateSecret(length, base, mockRandom);

      expect(secret).toHaveLength(length);
      expect(new Set(secret).size).toBe(length);
      expect(secret).toMatch(/^[0-7]+$/);
    },
  );

  test.each(Array.from({ length: 10 }, (_, index) => [index + 1, 10]))(
    'Десятичная система (base 10): секрет длиной %i корректно генерирует цифры',
    (length, base) => {
      let step = 0;
      const mockRandom = () => ((step++ * 3) % base) / base;
      const secret = generateSecret(length, base, mockRandom);

      expect(secret).toHaveLength(length);
      expect(new Set(secret).size).toBe(length);
      expect(secret).toMatch(/^[0-9]+$/);
    },
  );

  test.each(Array.from({ length: 16 }, (_, index) => [index + 1, 16]))(
    'Шестнадцатеричная система (base 16): секрет длиной %i корректно генерирует цифры и буквы',
    (length, base) => {
      let step = 0;
      const mockRandom = () => ((step++ * 3) % base) / base;
      const secret = generateSecret(length, base, mockRandom);

      expect(secret).toHaveLength(length);
      expect(new Set(secret).size).toBe(length);
      expect(secret).toMatch(/^[0-9a-f]+$/);
    },
  );

  test('Должна сохранять ведущий ноль', () => {
    let step = 0;
    const mockRandom = () => (step++ === 0 ? 0.01 : 0.99);
    const secret = generateSecret(2, 10, mockRandom);

    expect(secret).toBe('09');
  });

  test('Должна выбрасывать ошибку, если длина больше основания', () => {
    expect(() => generateSecret(3, 2)).toThrow(
      'Длинна не должна быть больше основания',
    );
  });
});
