export function createCountPossibleSecrets() {
    const cache = new Map();
    function countPossibleSecrets(length, base) {
        if (!Number.isInteger(length) ||
            !Number.isInteger(base) ||
            length < 0 ||
            base < 0 ||
            length > base) {
            return 0;
        }
        if (length === 0) {
            return 1;
        }
        const key = `${length}-${base}`;
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = base * countPossibleSecrets(length - 1, base - 1);
        cache.set(key, result);
        return result;
    }
    return countPossibleSecrets;
}
export const countPossibleSecrets = createCountPossibleSecrets();
