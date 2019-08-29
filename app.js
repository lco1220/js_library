var myLibrary = [
  {title: 'The Hobbit', author: 'J.R.R', genre: 'High Fantasy', read: false},
  {title: 'A Game of Thrones', author: 'George R. R. Martin', genre: 'Epic Fantasy', read: false}
];

class Book {
  constructor(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
  }
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function displayBooks(myLibrary) {
  var books = myLibrary;
  books.forEach((book) => render(book));
}

function render(book) {
  var bookTable = document.querySelector('#bookList');
  var row = document.createElement('tr');


}

displayBooks(myLibrary);