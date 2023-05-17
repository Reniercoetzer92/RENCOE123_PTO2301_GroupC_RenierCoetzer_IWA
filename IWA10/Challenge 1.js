const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

if (holidays[futureId]) {                                                               //Change to a if/else statement
    console.log(holidays[futureId].name);
} 
else {
    console.log(`ID ${futureId} not created yet`);                                     //instipulate FutureId
}

let copied = holidays[6];                                                              //need to access name by adding "key identifier nr 6" or chrismas 
copied.name = 'X-mas Day';
const correctDate = new Date(copied.date);                                             // new Date added
correctDate.setHours(0);                                                               // set the hour value using local time
correctDate.setMinutes(0);                                                             //set the minute value using local time
const isEarlier = correctDate < holidays[6].date;                                      //Change Copied date to correctDate
console.log('New date is earlier:', isEarlier);

if (isEarlier) {copied.date = correctDate};                                            //Put in curly brackets

if (holidays[6].id === 6) {
  console.log('ID change:', holidays[christmas].id !== copied.id)                      //Remove copied.id to display true or False
} 
else {
    console.log('ID change:', holidays[christmas].id !== copied.id || copied.id);      //put in if else statement so if the Id is changed it will display the changed id.
}                                                                                       

console.log('Name change:', holidays[christmas].name !== copied.name || copied.name)
console.log('Date change:', holidays[christmas].date !== copied.date || copied.date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }))  //Change Date format with toloacaleDateString

const firstHolidayTimestamp = Math.min(        //I was stuck here.! got some help.
    Date.parse(holidays[0].date),
    Date.parse(holidays[1].date),
    Date.parse(holidays[2].date),
    Date.parse(holidays[3].date),
    Date.parse(holidays[4].date),
    Date.parse(holidays[5].date),
    Date.parse(holidays[6].date),
    Date.parse(holidays[7].date),
    Date.parse(holidays[8].date)
  );
  
  const lastHolidayTimestamp = Math.max(
    Date.parse(holidays[0].date),
    Date.parse(holidays[1].date),
    Date.parse(holidays[2].date),
    Date.parse(holidays[3].date),
    Date.parse(holidays[4].date),
    Date.parse(holidays[5].date),
    Date.parse(holidays[6].date),
    Date.parse(holidays[7].date),
    Date.parse(holidays[8].date)
  );
  
  const firstDay = new Date(firstHolidayTimestamp).getDate();
  const firstMonth = new Date(firstHolidayTimestamp).getMonth() + 1;
  const lastDay = new Date(lastHolidayTimestamp).getDate();
  const lastMonth = new Date(lastHolidayTimestamp).getMonth() + 1;
  
  let tempDate = new Date(`${firstDay}/${firstMonth}/${currentYear}`);
  
  console.log(tempDate.toLocaleDateString("en-GB"));
  console.log(`${lastDay}/${lastMonth}/${currentYear}`);
  
  const randomHoliday = holidays[Math.floor(Math.random() * 9)];
  console.log(randomHoliday.date.toLocaleDateString("en-GB"));