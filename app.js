var myLibrary = [
  {title: 'The Hobbit', author: 'J.R.R', genre: 'High Fantasy', read: false},
  {title: 'A Game of Thrones', author: 'George R. R. Martin', genre: 'Epic Fantasy', read: false}
];

function Book(title, author, genre, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.read = read;
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

    if(book.read) {
      row.innerHTML = 
        ` <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.genre}</td>
          <td>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="read" checked>
            <label class="custom-control-label" for="read"></label>
          </div> </td>`;
    } else {
      row.innerHTML = 
        ` <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.genre}</td>
          <td>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="read">
              <label class="custom-control-label" for="read"></label>
            </div>
          </td>`;
    }
  

  bookTable.appendChild(row);
}

displayBooks(myLibrary);