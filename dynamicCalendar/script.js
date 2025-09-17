const currentDate = document.querySelector('.current-date'),
daysTag = document.querySelector('.days'),
preNextIcon = document.querySelectorAll('.icons i');

//getting current date, year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(), //getting first day of current month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //0th day of the month is the last day of the previous month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), //getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of previous month
    let liTag = '';

    for (let i = firstDayOfMonth; i > 0; i--) { //creating li of previous month's last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { //creating li for current month
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                    && currYear === new Date().getFullYear()? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { //creating li for next month's first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

preNextIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === 'prev' ? currMonth -1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11){ //if currentmonth is greater than 11 or less than 0
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); //updating year with new date year
            currMonth = date.getMonth(); //updating month with new date month
        }else{ //else pass new value as date value
            date = new Date();
        }
        renderCalendar();
    })
});