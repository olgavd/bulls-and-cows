export function evaluateGuess(secret, guess) {
    const secretDigits = [...secret.toLowerCase()];
    const guessDigits = [...guess.toLowerCase()];
    const bulls = guessDigits.filter((digit, index) => {
        return digit === secretDigits[index];
    }).length;
    const remainingDigits = secretDigits.filter((digit, index) => {
        return guessDigits[index] !== digit;
    });
    const result = guessDigits.reduce((acc, digit) => {
        const foundIndex = remainingDigits.findIndex((el) => el === digit);
        if (foundIndex !== -1) {
            acc.cows += 1;
            remainingDigits.splice(foundIndex, 1);
        }
        return acc;
    }, { bulls, cows: 0 });
    return result;
}
