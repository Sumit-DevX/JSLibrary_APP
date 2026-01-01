function Book(title,author,noOfPages,hasRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.hasRead = hasRead;
    this.id;
}

const myLibrary = [];

const bookSelf = document.querySelector(".bookShelf");

function addBooktoLibrary(title,author,noOfPages,hasRead){
    const newBook = new Book(title,author,noOfPages,hasRead);
    newBook.id = crypto.randomUUID();

    myLibrary.push(newBook);

    bookSelf.appendChild(
        createBookCard(newBook)
    );

    handelEmptySelf();
}


function createBookCard(book){
    const newBookCard = document.createElement('div');
    newBookCard.className = "bookCard";

    const p1 = document.createElement('p');
    p1.textContent = `Title: ${book.title}`;

    const p2 = document.createElement('p');
    p2.textContent = `Author: ${book.author}`;

    const p3 = document.createElement('p');
    p3.textContent = `Number Of Pages: ${book.noOfPages}`;

    const checkboxRow = document.createElement('div');
    const label = document.createElement("label");
    const checkbox = document.createElement('input');

    checkbox.type = "checkbox";
    checkbox.id = "hasRead";
    if(book.hasRead){
        checkbox.checked = true;
    }

    label.htmlFor = "hasRead";
    label.textContent = "Has Read?";
    checkboxRow.appendChild(label);
    checkboxRow.appendChild(checkbox);
    checkboxRow.className = "checkboxRow";

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    
    newBookCard.appendChild(p1);
    newBookCard.appendChild(p2);
    newBookCard.appendChild(p3);
    newBookCard.appendChild(checkboxRow);
    newBookCard.appendChild(deleteButton);

    return newBookCard;
}



function handelEmptySelf(){
    const items = bookSelf.querySelectorAll('.bookCard');
    
    
    let emptyMsg = bookSelf.querySelector('.empty_msg');
    if(items.length === 0){
        if(!emptyMsg){
            emptyMsg = document.createElement('p');
            emptyMsg.className = "empty_msg";
            emptyMsg.textContent = "No Books Available";

            bookSelf.appendChild(emptyMsg);
        }
    }else {
        if(emptyMsg) emptyMsg.remove();
    }
}





const bookEntry = document.querySelector('.bookEntry form');


const title = bookEntry.querySelector('#bookTitle');
const author = bookEntry.querySelector('#bookAuthor');
const totalPages = bookEntry.querySelector('#noOfPages');
const hasRead = bookEntry.querySelector('#hasRead');

const addButton = bookEntry.querySelector('#addButton')

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    addBooktoLibrary(title.value, author.value, totalPages.value, hasRead.checked);
});

document.addEventListener("DOMContentLoaded", () => {
    for(let book of myLibrary){
        bookSelf.appendChild(createBookCard(book.title,book.author,book.noOfPages,book.hasRead));
    }

    handelEmptySelf();
});