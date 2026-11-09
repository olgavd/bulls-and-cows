import { evaluateGuess } from './evaluateGuess.js';
describe('evaluateGuess', () => {
    describe('Полное совпадение', () => {
        test.each([
            ['10', '10', 2, 0],
            ['725', '725', 3, 0],
            ['1234', '1234', 4, 0],
            ['12345', '12345', 5, 0],
            ['123456', '123456', 6, 0],
            ['a1b2', 'a1b2', 4, 0],
        ])('secret: %s, guess: %s', (secret, guess, bulls, cows) => {
            expect(evaluateGuess(secret, guess)).toEqual({
                bulls,
                cows,
            });
        });
    });
    describe('Быки и коровы', () => {
        test.each([
            ['10', '01', 0, 2],
            ['725', '257', 0, 3],
            ['1234', '1325', 1, 2],
            ['123456', '162345', 1, 5],
            ['a1b2', 'b2a1', 0, 4],
            ['abcd', 'abef', 2, 0],
            ['a1b2', 'a2b1', 2, 2],
        ])('secret: %s, guess: %s', (secret, guess, bulls, cows) => {
            expect(evaluateGuess(secret, guess)).toEqual({
                bulls,
                cows,
            });
        });
    });
    describe('Разный регистр hex-символов', () => {
        test.each([
            ['abcd', 'ABCD', 4, 0],
            ['a1b2', 'A1B2', 4, 0],
            ['a1b2', 'A2B1', 2, 2],
        ])('secret: %s, guess: %s', (secret, guess, bulls, cows) => {
            expect(evaluateGuess(secret, guess)).toEqual({
                bulls,
                cows,
            });
        });
    });
    describe('Отсутствие совпадений', () => {
        test.each([
            ['12', '34'],
            ['1234', '5678'],
            ['abcd', 'ef01'],
        ])('secret: %s, guess: %s', (secret, guess) => {
            expect(evaluateGuess(secret, guess)).toEqual({
                bulls: 0,
                cows: 0,
            });
        });
    });
    describe('Граничные случаи', () => {
        test('два символа', () => {
            expect(evaluateGuess('12', '21')).toEqual({
                bulls: 0,
                cows: 2,
            });
        });
        test('шесть символов', () => {
            expect(evaluateGuess('123456', '654321')).toEqual({
                bulls: 0,
                cows: 6,
            });
        });
    });
});
