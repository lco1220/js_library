class Book {
  constructor(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
  }
}

var myLibrary = [
  {title: 'The Hobbit', author: 'J.R.R', genre: 'High Fantasy', read: false},
  {title: 'A Game of Thrones', author: 'George R. R. Martin', genre: 'Epic Fantasy', read: false}
];


class Library {

  static displayBooks() {
    var books = myLibrary;
    books.forEach((book) => Library.render(book));
  }

  static render(book) {
    const bookTable = document.querySelector('#bookList');
    const row = document.createElement('tr');
    var title = document.createElement('td');
    var author = document.createElement('td');
    var genre = document.createElement('td');
    var readStat = document.createElement('td');
    var readInput = document.createElement('input');
    var deleteElem = document.createElement('td');
    var deleteBtn = document.createElement('button');
  
    bookTable.appendChild(row);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(genre);
    row.appendChild(readStat);
    readStat.appendChild(readInput);
    readInput.setAttribute('type','button');

    title.innerHTML = `${book.title}`;
    author.innerHTML = `${book.author}`;
    genre.innerHTML = `${book.genre}`;
  
    if(book.read) {
      readInput.classList.add('btn','btn-primary', 'w-100');
      readInput.value = 'Read';
    } else {
      readInput.classList.add('btn','btn-secondary', 'w-100');
      readInput.value = 'Unread';
    }

    readInput.addEventListener('click', (e) => {
      if(book.read) {
        book.read = false;
        readInput.classList.remove('btn','btn-primary');
        readInput.classList.add('btn','btn-secondary');
        readInput.value = 'Unread';
      } else {
        book.read = true;
        readInput.classList.remove('btn','btn-secondary');
        readInput.classList.add('btn','btn-primary');
        readInput.value = 'Read';
      }
      
    });

    row.appendChild(deleteElem);
    deleteElem.appendChild(deleteBtn);
    deleteBtn.setAttribute('type','button');
    deleteBtn.classList.add('btn', 'btn-danger', 'w-100');
    deleteBtn.textContent = 'X';
  }

  static showAlertModal(message, className){
    const p = document.createElement('p');
    p.className = `alert alert-${className}`;
    p.appendChild(document.createTextNode(message));
    const formGroup = document.querySelector('.form-group');
    const form = document.querySelector('#bookForm');
    form.insertBefore(p, formGroup);
    // Clear in 3 seconds
    setTimeout(()=>document.querySelector('.alert').remove(), 5000);
  }

  static deleteBook(e) {
    if(e.classList.contains('btn-danger')){
      e.parentElement.parentElement.remove();
      Library.deleteMessage('Book Deleted', 'success');
    }
    
  }

  static deleteMessage(message, className){
    const p = document.createElement('p');
    p.className = `alert alert-${className} mt-3`;
    p.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const modal = document.querySelector('.modal');
    container.insertBefore(p, modal);
    // Clear in 3 seconds
    setTimeout(()=>document.querySelector('.alert').remove(), 2000);
  }

  static clearFields(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#genre').value = '';
  } 

}

document.querySelector('#bookForm').addEventListener('submit',(e) => {
  
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const genre = document.querySelector('#genre').value;
  var read;
  if(document.querySelector('input[name="readStatus"]:checked').value === 'finished') {
    read = true;
  } else {
    read = false;
  }

  if(title === '' || author === '' || genre === ''){
    Library.showAlert('Please fill in all fields', 'danger');
  } else {
    const book = new Book(title,author,genre,read);

    Library.render(book);
    Library.showAlertModal('Book Added', 'success');
    Library.clearFields();
  }

});


document.querySelector('#bookList').addEventListener('click', (e) => {
  // Remove a Book 
  Library.deleteBook(e.target);
  
});

document.addEventListener('click', (e) => {
  console.log(e.target);
});

document.addEventListener('DOMContentLoaded', Library.displayBooks);