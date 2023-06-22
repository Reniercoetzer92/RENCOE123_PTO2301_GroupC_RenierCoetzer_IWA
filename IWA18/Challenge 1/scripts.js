import {createOrderHtml, html, updateDraggingHtml, moveToColumn} from './view.js'
import {COLUMNS, state, createOrderData, updateDragging } from './data.js'
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

const handleHelpToggle = (event) => {
    html.help.overlay.toggleAttribute('open')
}

const handleAddToggle = (event) => {
    html.add.overlay.toggleAttribute('open')

    html.add.title.value = '';
    html.add.table.value = '1';
}

const handleAddSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.srcElement);
    const values = {title: data.get('title'), table: data.get('table'), column: COLUMNS[0]};
    
    let order = createOrderData(values);
    let orderelement = createOrderHtml(order);

    html.columns['ordered'].append(orderelement);
    html.add.overlay.close();

    html.add.title.value = '';
    html.add.table.value = '1';
}

const handleDragStart = (event) => {}

const handleDragEnd = (event) => {
    moveToColumn(document.querySelector('[data-id]').getAttribute('data-id'), state.dragging.over)
    html.other.add.focus()
}

const handleEditToggle = (event) => {

    if (document.querySelector('order').length >= 0) {
        html.edit.overlay.toggleAttribute('open');

        html.edit.title.value = document.querySelector('[data-order-title]').innerText; 
        html.edit.table.value = document.querySelector('[data-order-table]').innerText;
        html.edit.id.value = document.querySelector('[data-id]').getAttribute('data-id')
    } 
}

const handleEditSubmit = (event) => {
    event.preventDefault();
    moveToColumn(html.edit.id.value, html.edit.column.value)

    const data = new FormData(event.srcElement);

    document.querySelector('[data-order-title]').innerText = data.get('title'); 
    document.querySelector('[data-order-table]').innerText = data.get('table');

    html.edit.overlay.toggleAttribute('open');
}

const handleDelete = (event) => {
    document.querySelector('div.order').remove()
    html.edit.overlay.toggleAttribute('open');
}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}