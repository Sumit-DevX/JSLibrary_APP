function Book(title,author,noOfPages,haveRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.haveRead = haveRead;
    this.id;
}

const myLibrary = [];

const bookSelf = document.querySelector(".bookShelf");

function addBooktoLibrary(title,author,noOfPages,haveRead){
    const newBook = new Book(title,author,noOfPages,haveRead);
    newBook.id = crypto.randomUUID();

    myLibrary.push(newBook);
}

addBooktoLibrary("The Hobbit", "Sumit Nayak", 234, false);
addBooktoLibrary("Harry Poter", "Julius Novocrono", 3000, true);

function createBookCard(title,author,noOfPages,hasRead){
    const newBookCard = document.createElement('div');
    newBookCard.className = "bookCard";

    const p1 = document.createElement('p');
    p1.textContent = `Title: ${title}`;

    const p2 = document.createElement('p');
    p2.textContent = `Author: ${author}`;

    const p3 = document.createElement('p');
    p3.textContent = `Number Of Pages: ${noOfPages}`;

    const checkboxRow = document.createElement('div');
    const label = document.createElement("label");
    const checkbox = document.createElement('input');

    checkbox.type = "checkbox";
    checkbox.id = "hasRead";
    if(hasRead){
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


document.addEventListener('DOMContentLoaded', () => {
    for(book of myLibrary){
        bookSelf.appendChild(createBookCard(book.title,book.author,book.noOfPages,book.hasRead))
    }
})
