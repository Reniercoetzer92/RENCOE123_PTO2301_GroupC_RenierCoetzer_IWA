const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    const { firstName, surname, id, races } = athlete;
    const [latestRace] = races.slice(-1);
    const { date, time } = latestRace;                           //get time and date of last race

    const fragment = document.createDocumentFragment();
  
    const title = document.createElement('h2');                 // h2 as a string
    title.textContent = id;
    fragment.appendChild(title);
  
    const list = document.createElement('dl');                  // data list 'dl' as a string
  
    const day = new Date(date).getDate();                       // get the new date
    const month = MONTHS[new Date(date).getMonth()];            // get month month
    const year = new Date(date).getFullYear();                  //get full year
  
    const [first, second, third, fourth] = time;
    const total = first + second + third + fourth;
  
    const hours = Math.floor(total / 60);                        //add math floor
    const minutes = total % 60;                                  //add "%" to get time format in seconds.
    
    list.innerHTML = /* html Fix code using the proper instipulation*/ 
    ` <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, '0')} ${minutes.toString().padStart(2, '0')}</dd>
    `;
  
    fragment.appendChild(list);

    return fragment;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const NM372Section = document.querySelector('[data-athlete="NM372"]');
    const SV782Section = document.querySelector('[data-athlete="SV782"]');
  
    NM372Section.appendChild(createHtml(data.response.data.NM372));
    SV782Section.appendChild(createHtml(data.response.data.SV782));
  });