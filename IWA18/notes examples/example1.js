const node = document.querySelector('p')
const button = document.querySelector('button')

/** A function takes an action name and returns a string with the action and time */
const generateMessage = (action) => {
    const hour = new Date().getHours().toString().padStart(2, '0')
    const minutes = new Date().getMinutes().toString().padStart(2, '0')
    const seconds = new Date().getSeconds().toString().padStart(2, '0')
    return `JavaScript ${action} at ${hour}:${minutes}:${seconds}`
}

/** A function that generates an update message and adds it to the paragraph */
const updateText = () => {
    const updateMessage = generateMessage('updated')
    node.innerText = updateMessage
}

/* Creates initial message automatically without waiting for an event */

const initialMessage = generateMessage('ran')
node.innerText = initialMessage

/* Creates event listener that fires `updateText` (handler) when button is clicked */

button.addEventListener('click', updateText)
   
