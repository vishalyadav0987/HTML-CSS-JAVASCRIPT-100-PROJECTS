document.addEventListener('DOMContentLoaded', () => {
    const calendarBody = document.getElementById('calendarBody');
    const monthYearHeader = document.getElementById('monthYear');

    function renderCalendar(year, month) {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startDay = firstDay.getDay();

      monthYearHeader.textContent = `${new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(firstDay)}`;

      let dayCount = 1;
      calendarBody.innerHTML = '';

      for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
          const cell = document.createElement('td');

          if ((i === 0 && j < startDay) || dayCount > daysInMonth) {
            // Empty cell before the first day and after the last day
            cell.textContent = '';
          } else {
            cell.textContent = dayCount;
            dayCount++;
          }

          row.appendChild(cell);
        }

        calendarBody.appendChild(row);
      }
    }

    const currentDate = new Date();
    renderCalendar(currentDate.getFullYear(), currentDate.getMonth());

    document.getElementById('prevMonth').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });
  });