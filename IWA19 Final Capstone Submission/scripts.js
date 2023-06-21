import { BOOKS_PER_PAGE, authors, genres, books } from './data.js'
import { html, css } from './queryseqlectors.js'
import { updateShowMoreButton, populateBookItems, populatDropdownSearchGenres, populateDropdownSearchAuthors } from './view.js'
import { toggleListDialog, showMoreBooks, toggleSearchDialog, toggleSettingsDialog, handleSearchFormSubmit, handleSettingFormSubmit} from './view.js'


if (!books && !Array.isArray(books)) throw new Error('Source required') 



//Functions
populateBookItems(books, 0, BOOKS_PER_PAGE)
populatDropdownSearchGenres()
populateDropdownSearchAuthors()
updateShowMoreButton(books)

//set initial theme selcted value

html.settings.theme.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';

//event listeners
html.search.cancel.addEventListener('click', toggleSearchDialog)
html.search.form.addEventListener('submit', handleSearchFormSubmit)
html.list.close.addEventListener('click', toggleListDialog)
html.list.button.addEventListener('click', showMoreBooks)
html.header.search.addEventListener('click', toggleSearchDialog)
html.header.settings.addEventListener('click', toggleSettingsDialog)
html.settings.cancel.addEventListener('click', toggleSettingsDialog)
html.settings.form.addEventListener('submit', handleSettingFormSubmit)