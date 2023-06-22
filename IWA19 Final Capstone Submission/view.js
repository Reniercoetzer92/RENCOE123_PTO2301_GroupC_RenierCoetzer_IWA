import { BOOKS_PER_PAGE, authors, genres, books } from './data.js'
import { html } from './queryselectors.js'

let page = 1;
let matches = books;

//Function used by 'populateBookItems' to create preview element
const createPreview = (book) => {
    const {author, image, title, id} = book;

    let element = document.createElement("div");
    element.classList.add("preview");
    element.dataset.id = id;

    element.onclick = showBookDescription;

    element.innerHTML = /* html */ `
    <div>
        <img class="preview__image" src="${image}"/>
    </div>
    <div class="preview__info">
        <h2 class="preview__title">${title}</h2>
        <h3 class="preview__author">${authors[author]}</h3>
    </div>
    `
    return element;
};

export const updateShowMoreButton = (filteredBooks) => {
    let booksRemaining = filteredBooks.length - (page * BOOKS_PER_PAGE);

    if (booksRemaining > 0) {
        html.list.button.innerHTML = /* html */ [
            `<span class= show_more>Show more</span>`,
            `<span class="list__remaining"> (${booksRemaining})</span>`,
        ];
        html.list.button.removeAttribute('disabled')
    } else {
        html.list.button.innerHTML = /* html */ [
            `<span class= show_more>Show more</span>`,
            `<span class="list__remaining"> (0)</span>`,
        ];
    
        html.list.button.setAttribute('disabled', 'disabled')
    }
};

export const populateBookItems = (filterBooks, startIndex, endIndex) => {
    const fragment = document.createDocumentFragment()
    const extracted = filterBooks.slice(startIndex, endIndex)

    for(let book of extracted) {
        const preview = createPreview({
            author: book['author'],
            id: book['id'],
            image: book['image'],
            title: book['title']
        })
        fragment.appendChild(preview);
    }
    html.list.items.appendChild(fragment)
};

export const populatDropdownSearchGenres = () => {
    const fragment = document.createDocumentFragment()
    let element = document.createElement('option')
    element.value = 'any'
    element.innerText = 'All Genres'
    fragment.appendChild(element)

    for (const [id, name] of Object.entries(genres)) {
        const option = document.createElement('option')
        option.value = id
        option.innerText = name
        fragment.appendChild(option)
    }

    html.search.genres.appendChild(fragment)
};

export const populateDropdownSearchAuthors = () => {
    let fragment = document.createDocumentFragment()
    let element = document.createElement('option')
    element.value = 'any'
    element.innerText = 'All Authors'
    fragment.appendChild(element)

    for (const [id, value] of Object.entries(authors)) {
        const option = document.createElement('option')
        option.value = id
        option.innerText = value
        fragment.appendChild(option)
    }

    html.search.authors.appendChild(fragment)
};

//EventHandler
//this is a inline Event Listener added in 'createPreview'.
const showBookDescription = (event) => {

    let bookID = event.currentTarget.getAttribute('data-id')
    let book = books.find(b => b.id === bookID)
    let publishYear = new Date(book.published).getFullYear()
    let subtitle = `${authors[book.author]} (${publishYear})`

    html.list.image.setAttribute('src', book.image)
    html.list.title.innerHTML = book.title
    html.list.subtitle.innerHTML = subtitle
    html.list.description.innerHTML = book.description
    
   toggleListDialog(event)
}

export const toggleListDialog = (event) => {
    html.list.overlay.toggleAttribute('open')
};

export const showMoreBooks = (event) => {
    let startIndex = BOOKS_PER_PAGE * page;
    page = page + 1;
    let endIndex = BOOKS_PER_PAGE * page;

    populateBookItems(matches, startIndex, endIndex);
    updateShowMoreButton(matches);
};

export const toggleSearchDialog = (event) => {
    html.search.overlay.toggleAttribute('open');
    html.search.title.focus();
}

export const toggleSettingsDialog = (event) => {
    html.settings.overlay.toggleAttribute('open');
    html.search.title.focus();
}

export const handleSearchFormSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)

    let filteredBooks = books;

    if (filters.title !== ''){
        filteredBooks = filteredBooks.filter(b => b.title.toLowerCase().includes(filters.title.toLowerCase()))
    };
    
    if (filters.genre !== 'any') {
        filteredBooks = filteredBooks.filter(b => b.genres.includes(filters.genre))
    };
    
    if (filters.author !== 'any') {
        filteredBooks = filteredBooks.filter(b => b.author === filters.author)
    };
    
    if (filteredBooks.length < 1 ){
        html.list.message.classList.add('list__message_show')
    }
    else {
        html.list.message.classList.remove('list__message_show')
    }
    
    page = 1;
    matches = filteredBooks;
    html.list.items.innerHTML = '';
    populateBookItems(filteredBooks, 0, BOOKS_PER_PAGE);
    updateShowMoreButton(filteredBooks);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    html.search.overlay.toggleAttribute('open');
}

export const handleSettingFormSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    
    const day = {
        dark: '10, 10, 20',
        light: '255, 255, 255',
    }
    
    const night = {
        dark: '255, 255, 255',
        light: '10, 10, 20',
    };
    
    const css = {
        day: day,
        night: night
    }

    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
   
    html.settings.overlay.close()
} 