import { createDigitValidator } from './createDigitValidator.js';

describe('Каррированная фабрика createDigitValidator', () => {
  test('Должна возвращать функцию-предикат', () => {
    const predicate = createDigitValidator(2);
    expect(predicate).toBeTypeOf('function');
  });

  describe('Двоичная система счисления (base 2)', () => {
    const binaryPredicate = createDigitValidator(2);

    test('Должна разрешать только 0 и 1', () => {
      expect(binaryPredicate('0')).toBeTruthy();
      expect(binaryPredicate('1')).toBeTruthy();
    });

    test('Должна запрещать буквы и цифры не 0 и 1', () => {
      expect(binaryPredicate('2')).toBeFalsy();
      expect(binaryPredicate('7')).toBeFalsy();
      expect(binaryPredicate('9')).toBeFalsy();
      expect(binaryPredicate('a')).toBeFalsy();
    });
  });

  describe('Восьмеричная система счисления (base 8)', () => {
    const eightPredicate = createDigitValidator(8);

    test.each(Array.from({ length: 8 }, (_, i) => String(i)))(
      'Должна разрешать цифру %s',
      (digit) => {
        expect(eightPredicate(digit)).toBeTruthy();
      },
    );

    test('Должна запрещать буквы и цифры 8 и 9', () => {
      expect(eightPredicate('8')).toBeFalsy();
      expect(eightPredicate('9')).toBeFalsy();
      expect(eightPredicate('F')).toBeFalsy();
      expect(eightPredicate('a')).toBeFalsy();
    });
  });

  describe('Десятичная система счисления (base 10)', () => {
    const decimalPredicate = createDigitValidator(10);

    test.each(Array.from({ length: 10 }, (_, i) => String(i)))(
      'Должна разрешать цифру %s',
      (digit) => {
        expect(decimalPredicate(digit)).toBeTruthy();
      },
    );

    test('Должна запрещать буквы и цифру 10', () => {
      expect(decimalPredicate('10')).toBeFalsy();
      expect(decimalPredicate('F')).toBeFalsy();
      expect(decimalPredicate('a')).toBeFalsy();
    });
  });

  describe('Шестнадцатеричная система счисления (base 16)', () => {
    const hexPredicate = createDigitValidator(16);

    test.each(
      Array.from({ length: 16 }, (_, i) => i.toString(16).toLowerCase()),
    )('Должна разрешать символ %s', (digit) => {
      expect(hexPredicate(digit)).toBeTruthy();
    });

    test('Должна быть регистронезависимой', () => {
      expect(hexPredicate('F')).toBeTruthy();
      expect(hexPredicate('A')).toBeTruthy();
    });

    test('Должна запрещать буквы, за рамками шестнадцатеричной системы', () => {
      expect(hexPredicate('g')).toBeFalsy();
      expect(hexPredicate('G')).toBeFalsy();
      expect(hexPredicate('S')).toBeFalsy();
    });
  });

  test('Граничные случаи', () => {
    const decimalPredicate = createDigitValidator(10);

    expect(decimalPredicate('-')).toBeFalsy();
    expect(decimalPredicate('+')).toBeFalsy();
    expect(decimalPredicate('.')).toBeFalsy();
    expect(decimalPredicate(' ')).toBeFalsy();
    expect(decimalPredicate(' 1')).toBeFalsy();
    expect(decimalPredicate('1 ')).toBeFalsy();
    expect(decimalPredicate('')).toBeFalsy();
    expect(decimalPredicate('10')).toBeFalsy();
    expect(decimalPredicate(5 as unknown as string)).toBeFalsy();
    expect(decimalPredicate(null as unknown as string)).toBeFalsy();
    expect(decimalPredicate(undefined as unknown as string)).toBeFalsy();
  });
});
