import { isValidGuess } from './isValidGuess.js';

describe('isValidGuess', () => {
  describe('Длинна строки', () => {
    test('возвращает true если длинна строки совпадает с ожидаемой', () => {
      expect(isValidGuess('1456', 4, 10)).toBeTruthy();
      expect(isValidGuess('6', 1, 10)).toBeTruthy();
    });

    test('возвращает false если длинна строки короче ожидаемой', () => {
      expect(isValidGuess('1456', 7, 10)).toBeFalsy();
      expect(isValidGuess('6', 3, 10)).toBeFalsy();
    });

    test('возвращает false если ожидаемая длина равна нулю', () => {
      expect(isValidGuess('', 0, 10)).toBeFalsy();
    });

    test('возвращает false если длинна строки больше ожидаемой', () => {
      expect(isValidGuess('', 2, 10)).toBeFalsy();
      expect(isValidGuess('123456', 3, 10)).toBeFalsy();
    });
  });

  describe('Допустимость символов для переданной системы счисления', () => {
    test('возвращает true для валидных символов в разных системах счисления', () => {
      expect(isValidGuess('01', 2, 2)).toBeTruthy();
      expect(isValidGuess('074', 3, 8)).toBeTruthy();
      expect(isValidGuess('1984', 4, 10)).toBeTruthy();
      expect(isValidGuess('b2f8', 4, 16)).toBeTruthy();
    });

    test('возвращает false для невалидных символов в разных системах счисления', () => {
      expect(isValidGuess('02', 2, 2)).toBeFalsy();
      expect(isValidGuess('078', 3, 8)).toBeFalsy();
      expect(isValidGuess('198b', 4, 10)).toBeFalsy();
      expect(isValidGuess('b2g8', 4, 16)).toBeFalsy();
    });

    test('возвращает false если основание системы счисления недопустимо', () => {
      expect(isValidGuess('12', 2, 3)).toBeFalsy();
      expect(isValidGuess('12', 2, 1)).toBeFalsy();
      expect(isValidGuess('12', 2, 17)).toBeFalsy();
    });

    test('должен быть регистронезависимым', () => {
      expect(isValidGuess('ACB', 3, 16)).toBeTruthy();
    });
  });

  describe('Уникальность символов', () => {
    test('возвращает false если одинаковые символы идут друг за другом', () => {
      expect(isValidGuess('1147', 4, 10)).toBeFalsy();
    });

    test('возвращает false если одинаковые символы идут друг разделены другими символами', () => {
      expect(isValidGuess('1471', 4, 10)).toBeFalsy();
    });

    test('возвращает false если одинаковые символы повторяются в шестнадцатеричном формате', () => {
      expect(isValidGuess('ac1a', 4, 16)).toBeFalsy();
    });

    test('возвращает false если одинаковые символы повторяются в шестнадцатеричном формате в разных регистрах', () => {
      expect(isValidGuess('ac1A', 4, 16)).toBeFalsy();
    });

    test('возвращает true если символы разные в шестнадцатеричном формате в разных регистрах', () => {
      expect(isValidGuess('ac1D', 4, 16)).toBeTruthy();
    });

    test('возвращает true если строка начинается с нуля', () => {
      expect(isValidGuess('0123', 4, 10)).toBeTruthy();
    });
  });

  describe('Пограничные значения', () => {
    test('возвращает false если в строке есть спецсимволы, пробылы, и знаки', () => {
      expect(isValidGuess('1 47', 4, 10)).toBeFalsy();
      expect(isValidGuess('-147', 4, 10)).toBeFalsy();
      expect(isValidGuess('1.47', 4, 10)).toBeFalsy();
      expect(isValidGuess('14+7', 4, 10)).toBeFalsy();
    });

    test('корректно обрабатывает максимально допустимый символ для base', () => {
      expect(isValidGuess('1', 1, 2)).toBeTruthy();
      expect(isValidGuess('7', 1, 8)).toBeTruthy();
      expect(isValidGuess('9', 1, 10)).toBeTruthy();
      expect(isValidGuess('f', 1, 16)).toBeTruthy();
    });
  });
});
