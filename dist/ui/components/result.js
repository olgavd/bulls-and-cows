export function createResult() {
    const dialog = document.createElement('dialog');
    dialog.classList.add('result_dialog');
    const div = document.createElement('div');
    div.classList.add('result_div');
    const h2 = document.createElement('h2');
    h2.textContent = 'Вы выиграли';
    const attemptDiv = document.createElement('div');
    attemptDiv.classList.add('attempt_div');
    const attemptP = document.createElement('p');
    attemptP.textContent = 'Попыток:';
    attemptP.classList.add('attempt_p');
    const attemptSpan = document.createElement('span');
    attemptSpan.classList.add('attempt_span');
    attemptDiv.append(attemptP, attemptSpan);
    const timedDiv = document.createElement('div');
    timedDiv.classList.add('time_div');
    const timeP = document.createElement('p');
    timeP.textContent = 'Время:';
    timeP.classList.add('time_p');
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('time_span');
    timedDiv.append(timeP, timeSpan);
    div.append(h2, attemptDiv, timedDiv);
    dialog.append(div);
    return dialog;
}
