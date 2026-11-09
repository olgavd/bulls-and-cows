export function createField() {
    const fieldSection = document.createElement('section');
    fieldSection.classList.add('filed_section', 'hidden');
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('field_div');
    const timerDiv = document.createElement('div');
    timerDiv.id = 'timer_div';
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите вашу попытку';
    input.id = 'guess-input';
    input.classList.add('filed_input');
    const button = document.createElement('button');
    button.textContent = 'Проверить';
    button.classList.add('field__button');
    fieldDiv.append(input);
    const fieldButtonDiv = document.createElement('div');
    fieldButtonDiv.classList.add('field_button_div');
    fieldButtonDiv.append(button);
    fieldSection.append(timerDiv, fieldDiv, fieldButtonDiv);
    setInterval(updateTimer, 1000);
    return fieldSection;
}
const startTime = Date.now();
function updateTimer() {
    const timer = document.getElementById('timer_div');
    if (!timer)
        return;
    const elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    timer.textContent = `${formattedMinutes}:${formattedSeconds}`;
}
