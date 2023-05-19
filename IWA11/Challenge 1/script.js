const order1Root = document.querySelector('[data-key="order1"]');                   //use pacalcase to change format of veriable order 1, 2 and 3 
const order1BiscuitsElement = order1Root.querySelector('.biscuits dd');             // add ";"after sentences. "add '=' sign"
const order1DonutsElement = order1Root.querySelector('.donuts dd');                 //use queryselector and look for exact elements in html file.
const order1PancakesElement = order1Root.querySelector('.pancakes dd');        
const order1StatusElement = order1Root.querySelector('.status dd');

//group order 1 together!
order1BiscuitsElement.textContent = order1Root.dataset.biscuits;
order1DonutsElement.textContent = order1Root.dataset.donuts;
order1PancakesElement.textContent = order1Root.dataset.pancakes;
order1StatusElement.textContent = order1Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

const order2Root = document.querySelector('[data-key="order2"]');
const order2BiscuitsElement = order2Root.querySelector('.biscuits dd');
const order2DonutsElement = order2Root.querySelector('.donuts dd');
const order2PancakesElement = order2Root.querySelector('.pancakes dd');
const order2StatusElement = order2Root.querySelector('.status dd');

//group order 2 together!
order2BiscuitsElement.textContent = order1Root.dataset.biscuits;
order2DonutsElement.textContent = order1Root.dataset.donuts;
order2PancakesElement.textContent = order1Root.dataset.pancakes;
order2StatusElement.textContent = order1Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

const order3Root = document.querySelector('[data-key="order3"]');
const order3BiscuitsElement = order3Root.querySelector('.biscuits dd');
const order3DonutsElement = order3Root.querySelector('.donuts dd');
const order3PancakesElement = order3Root.querySelector('.pancakes dd');
const order3StatusElement = order3Root.querySelector('.status dd');

//group order 3 together!
order3BiscuitsElement.textContent = order1Root.dataset.biscuits;
order3DonutsElement.textContent = order1Root.dataset.donuts;
order3PancakesElement.textContent = order1Root.dataset.pancakes;
order3StatusElement.textContent = order1Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';