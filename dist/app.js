// import { generateSecret } from './core/generateSecret.js';
// import { evaluateGuess } from './core/evaluateGuess.js';
// import { isValidGuess } from './core/isValidGuess.js';
import { createField } from './ui/components/field.js';
import { createHeader } from './ui/components/header.js';
import { createHistory } from './ui/components/history.js';
import { createResult } from './ui/components/result.js';
import { createSettings } from './ui/components/settings.js';
export class App {
    secret = '';
    //   private history: GuessResult[] = [];
    start() {
        this.render();
        this.bindEvents();
    }
    render() {
        const body = document.body;
        const header = createHeader();
        const main = document.createElement('main');
        const fieldSection = createField();
        const historySection = createHistory();
        const resultSection = createResult();
        const settingsSection = createSettings();
        main.append(fieldSection, historySection, resultSection, settingsSection);
        body.append(header, main);
    }
    bindEvents() {
        // Обработчики событий
    }
    startGame() {
        // Генерация секретного числа
    }
    checkGuess(guess) {
        void guess;
        // Проверка попытки
    }
    updateHistory() {
        // Обновление истории
    }
    finishGame() {
        // Завершение игры
    }
}
