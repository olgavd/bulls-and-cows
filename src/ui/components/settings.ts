export function createSettings(): HTMLElement {
  const settingSection = document.createElement('section');
  settingSection.classList.add('setting_section');

  const settingDiv = document.createElement('div');
  settingDiv.classList.add('setting_div');

  const lengthP = document.createElement('p');
  lengthP.textContent = 'Выберите длинну числа:';

  const twoButton = document.createElement('button');
  twoButton.textContent = '2';
  twoButton.classList.add('two_button');

  const threeButton = document.createElement('button');
  threeButton.textContent = '3';
  threeButton.classList.add('three_button');

  const fourButton = document.createElement('button');
  fourButton.textContent = '4';
  fourButton.classList.add('four_button');

  const fiveButton = document.createElement('button');
  fiveButton.textContent = '5';
  fiveButton.classList.add('five_button');

  const sixButton = document.createElement('button');
  sixButton.textContent = '6';
  sixButton.classList.add('six_button');

  const lengthButtons = document.createElement('div');
  lengthButtons.classList.add('length_buttons');
  lengthButtons.append(
    twoButton,
    threeButton,
    fourButton,
    fiveButton,
    sixButton,
  );

  const lengthDiv = document.createElement('div');
  lengthDiv.classList.add('length_div');
  lengthDiv.append(lengthP, lengthButtons);

  const numSystemP = document.createElement('p');
  numSystemP.textContent = 'Выберите систему счисления:';

  const binButton = document.createElement('button');
  binButton.textContent = 'BIN';
  binButton.classList.add('bin_button');

  const octButton = document.createElement('button');
  octButton.textContent = 'OCT';
  octButton.classList.add('oct_button');

  const decButton = document.createElement('button');
  decButton.textContent = 'DEC';
  decButton.classList.add('dec_button');

  const hexButton = document.createElement('button');
  hexButton.textContent = 'HEX';
  hexButton.classList.add('hex_button');

  const numSystemButtons = document.createElement('div');
  numSystemButtons.classList.add('num_system_buttons');
  numSystemButtons.append(binButton, octButton, decButton, hexButton);

  const numSystemDiv = document.createElement('div');
  numSystemDiv.classList.add('num_system_div');
  numSystemDiv.append(numSystemP, numSystemButtons);

  settingDiv.append(lengthDiv, numSystemDiv);

  settingSection.append(settingDiv);

  return settingSection;
}
