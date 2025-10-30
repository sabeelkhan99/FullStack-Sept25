/*

    Q2 Create an array of book objects where each book has:

    { 
        title: "Book Name",
        author: "Author Name",
        isAvailable: true
    }
    
    Write functions to:

         - List all books.
         - Mark a book as borrowed (isAvailable = false).
         -  Return a book (isAvailable = true).
         - Find books by a specific author.

         const books = [
            { title: "Book1", author: "Author1", isAvailable: true },
            { title: "Book2", author: "Author2", isAvailable: true },
            { title: "Book3", author: "Author3", isAvailable: true },
            { title: "Book4", author: "Author4", isAvailable: true },
            { title: "Book5", author: "Author5", isAvailable: true },
        ];

*/

const books = [
    { title: "Book1", author: "Author1", isAvailable: true },
    { title: "Book2", author: "Author2", isAvailable: true },
    { title: "Book3", author: "Author3", isAvailable: true },
    { title: "Book4", author: "Author4", isAvailable: true },
    { title: "Book5", author: "Author5", isAvailable: true },
];

// lists all the books
function listBooks() {
    console.log(books);
}

// read about loose vs strict equality: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness
"1" == 1 // true
"1" === 1 // false

function markBorrowed(bookTitle) {
    for (let book of books) {
        if (book.title === bookTitle) {
            book.isAvailable = false;
            return;
        }
    }
}

function markAsReturned(bookTitle) {
    for (let book of books) {
        if (book.title === bookTitle) {
            book.isAvailable = true;
            return;
        }
    }
}

function findByAuthor(author) {
    let foundBook = null;
    for (const book of books) {
         if (book.author === author) {
             foundBook = book;
             break;
       }
    }
    if (!foundBook) {
        throw new Error('Invalid Author')
    }
    return foundBook;
}


// listBooks();
markBorrowed("Book3")
// listBooks();
markAsReturned("Book3")
// listBooks();
console.log(findByAuthor("Author2"));
console.log(findByAuthor("Author4"));
console.log(findByAuthor("InavlidAuthor"));