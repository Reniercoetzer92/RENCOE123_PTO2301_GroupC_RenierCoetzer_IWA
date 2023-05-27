const order1Root = document.querySelector('[data-key="order1"]');                   //use pacalcase to change format of veriable order 1, 2 and 3 
const order1BiscuitsElement = order1Root.querySelector('.biscuits dd');             // add ";"after sentences. "add '=' sign"
const order1DonutsElement = order1Root.querySelector('.donuts dd');                 //use queryselector and look for exact elements in html file. add '.' because its a div class
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

/*const 1-root = document(order1),
const 1-biscuits: document(biscuits),
const 1-donuts: document(donuts),
const 1-pancakes: document(pancakes),
const 1-status: document(status)

const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending */