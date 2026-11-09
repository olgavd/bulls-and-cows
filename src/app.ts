// import { generateSecret } from './core/generateSecret.js';
// import { evaluateGuess } from './core/evaluateGuess.js';
// import { isValidGuess } from './core/isValidGuess.js';

import { createField } from './ui/components/field.js';
import { createHeader } from './ui/components/header.js';
import { createHistory } from './ui/components/history.js';
import { createResult } from './ui/components/result.js';
import { createSettings } from './ui/components/settings.js';

export class App {
  private secret = '';

  //   private history: GuessResult[] = [];

  start(): void {
    this.render();
    this.bindEvents();
  }

  private render(): void {
    const body: HTMLElement = document.body;

    const header = createHeader();
    const main = document.createElement('main');
    const fieldSection = createField();
    const historySection = createHistory();
    const resultSection = createResult();
    const settingsSection = createSettings();

    main.append(fieldSection, historySection, resultSection, settingsSection);
    body.append(header, main);
  }

  private bindEvents(): void {
    // Обработчики событий
  }

  private startGame(): void {
    // Генерация секретного числа
  }

  private checkGuess(guess: string): void {
    void guess;
    // Проверка попытки
  }

  private updateHistory(): void {
    // Обновление истории
  }

  private finishGame(): void {
    // Завершение игры
  }
}
