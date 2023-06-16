const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = [];

    for (let i = 0; i < length; i++) {                                    // let "i" = "0" // the value of i is incremented by 1. //Replace loops using Recursion.
        result.push(i);
    }

    return result;
}

const createData = () => {                                                 // add "="
    const current = new Date();                                            //ad 'date'
    current.setDate(2);                                                   //add 'get month'

    const startDay = current.getDate();
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5);
    const days = createArray(7) ;                                         // 7 days in a week add "createArray"
    const result = [];

    for (const weekIndex of weeks) {
            result.push({
            week: weekIndex + 1,
            days: [],
        });

        for (const dayIndex of days) {                                 // Day Index of days" 7 days a week
            const day = (dayIndex - startDay) + (weekIndex * 7) - 1;   // !!
            const isValid = day > 0 && day <= daysInMonth; 

            result[weekIndex].days.push({
                dayOfWeek: dayIndex - 1,
                value: isValid ? day : '',
            });
        }
    }

    return result
}

console.log(createData());

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}

        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;
    return result
}                                                                              //add existing inside curly bracket

const createHtml = (data) => {
    let result = '';

    for (const {week, days} of data) {                                         //add "days" and "data"
        let inner = '';                                                        //change to single quotes
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)

         for (const { dayOfWeek, value} of days) {                              // add "for"
                const isToday = new Date().getDate() === value;
                const isWeekend = dayOfWeek === 5 || dayOfWeek === -1;              // add 5 or | or -1 to get
                const isAlternate = week % 2 === 0;

            let classString = 'table__cell';
            
            if (isToday) {classString = `${classString } table__cell_today`;}              //add "()" arround isToday
            if (isWeekend) {classString = `${classString } table__cell_weekend`;}          //add "()" arround isWeekend
            if (isAlternate) {classString = `${classString } table__cell_alternate`;}      //add "()" arround isAlternate
            inner = addCell(inner, classString, value)
    }

        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)