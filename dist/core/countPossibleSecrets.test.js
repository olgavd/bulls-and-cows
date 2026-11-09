import { describe, test, expect, beforeEach } from 'vitest';
import { countPossibleSecrets, createCountPossibleSecrets, } from './countPossibleSecrets.js';
describe('countPossibleSecrets', () => {
    describe('Подсчёт возможных секретов', () => {
        test('возвращает 1 для длины 0', () => {
            expect(countPossibleSecrets(0, 10)).toBe(1);
        });
        test('работает с двоичной системой', () => {
            expect(countPossibleSecrets(1, 2)).toBe(2);
            expect(countPossibleSecrets(2, 2)).toBe(2);
        });
        test('работает с восьмеричной системой', () => {
            expect(countPossibleSecrets(2, 8)).toBe(56);
            expect(countPossibleSecrets(3, 8)).toBe(336);
            expect(countPossibleSecrets(4, 8)).toBe(1680);
        });
        test('работает с десятичной системой', () => {
            expect(countPossibleSecrets(2, 10)).toBe(90);
            expect(countPossibleSecrets(3, 10)).toBe(720);
            expect(countPossibleSecrets(4, 10)).toBe(5040);
            expect(countPossibleSecrets(6, 10)).toBe(151200);
        });
        test('работает с шестнадцатеричной системой', () => {
            expect(countPossibleSecrets(2, 16)).toBe(240);
            expect(countPossibleSecrets(3, 16)).toBe(3360);
            expect(countPossibleSecrets(4, 16)).toBe(43680);
            expect(countPossibleSecrets(6, 16)).toBe(5765760);
        });
    });
    describe('Проверка входных данных', () => {
        test('возвращает 0, если длина больше основания', () => {
            expect(countPossibleSecrets(3, 2)).toBe(0);
        });
        test('возвращает 0 для отрицательной длины', () => {
            expect(countPossibleSecrets(-1, 10)).toBe(0);
        });
        test('возвращает 0 для отрицательного основания', () => {
            expect(countPossibleSecrets(2, -10)).toBe(0);
        });
        test('возвращает 0 для нецелых значений', () => {
            expect(countPossibleSecrets(2.5, 10)).toBe(0);
            expect(countPossibleSecrets(2, 10.5)).toBe(0);
        });
    });
    describe('Мемоизация', () => {
        let count;
        beforeEach(() => {
            count = createCountPossibleSecrets();
        });
        test('сохраняет результат вычисления в кэше', () => {
            expect(count(3, 10)).toBe(720);
            // Повторный вызов возвращает сохранённый результат
            expect(count(3, 10)).toBe(720);
            // Промежуточный результат тоже уже сохранён
            expect(count(2, 9)).toBe(72);
        });
        test('создаёт независимый кэш для каждого экземпляра', () => {
            const anotherCount = createCountPossibleSecrets();
            expect(count(3, 10)).toBe(720);
            expect(anotherCount(3, 10)).toBe(720);
        });
    });
});
