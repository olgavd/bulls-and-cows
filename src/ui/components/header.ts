export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  const div = document.createElement('div');
  div.classList.add('header_div');

  const h1 = document.createElement('h1');
  h1.textContent = 'Bulls and Cows';

  const leadersButton = document.createElement('button');
  leadersButton.textContent = 'Лидеры';
  leadersButton.classList.add('leaders_button');

  const newGameButton = document.createElement('button');
  newGameButton.textContent = 'Новая игра';
  newGameButton.classList.add('new_game_button');

  div.append(h1);
  header.append(leadersButton, div, newGameButton);
  return header;
}
