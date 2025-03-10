const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.id = crypto.randomUUID(); 
    this.info = function() {
      return (this.title + "by " + this.author + ", " + this.pages + " pages, " + this.read);
    }
  }


function addBookToLibrary (title, author, pages, read) {
  title = new Book(title, author, pages, read);
  myLibrary.push(title);
}

addBookToLibrary("ReadyPlayerOne", "Jack Johnson", 297, "not read yet");
addBookToLibrary("It", "Stephen King", 498, "read");
addBookToLibrary("Il nome della rosa", "Fiorantina Alice", 459, "read");
addBookToLibrary("Millenium", "Ghandi", 2000, "not read yet");


function displayLibrary (myLibrary) {
  
}

// const ReadyPlayerOne = new Book("ReadyPlayerOne", "Jack", 297, "not read yet");