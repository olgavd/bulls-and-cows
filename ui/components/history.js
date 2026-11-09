export function createHistory(attempt, number, bulls, cows) {
    let table = document.querySelector('.history');
    if (!table) {
        table = document.createElement('table');
        table.classList.add('history', 'hidden');
        const caption = document.createElement('caption');
        caption.textContent = 'История попыток';
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const headerRow = document.createElement('tr');
        ['№', 'Число', 'Быки', 'Коровы'].forEach((title) => {
            const th = document.createElement('th');
            th.textContent = title;
            headerRow.append(th);
        });
        thead.append(headerRow);
        table.append(caption, thead, tbody);
    }
    if (attempt !== undefined &&
        number !== undefined &&
        bulls !== undefined &&
        cows !== undefined) {
        const tbody = table.querySelector('tbody');
        if (tbody) {
            const row = document.createElement('tr');
            [attempt, number, bulls, cows].forEach((value) => {
                const td = document.createElement('td');
                td.textContent = String(value);
                row.append(td);
            });
            tbody.append(row);
        }
    }
    return table;
}
