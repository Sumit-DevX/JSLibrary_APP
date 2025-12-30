function Book(title,author,noOfPages,haveRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.haveRead = haveRead;
    this.id;
}

const myLibrary = [];

function addBooktoLibrary(title,author,noOfPages,haveRead){
    const newBook = new Book(title,author,noOfPages,haveRead);
    newBook.id = crypto.randomUUID();

    myLibrary.push(newBook);
}

addBooktoLibrary("The Hobbit", "Sumit Nayak", 234, false);
addBooktoLibrary("Harry Poter", "Julius Novocrono", 3000, true);

