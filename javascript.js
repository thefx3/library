const body = document.querySelector('body');
const container = document.createElement('div');
body.appendChild(container);
container.style.display = 'grid';
container.style.gap = '10px';
container.style.margin = '20px';
container.style.border = '2px solid black';
container.style.padding = '10px';

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
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("ReadyPlayerOne", "Jack Johnson", 297, "not read yet");
addBookToLibrary("It", "Stephen King", 498, "read");
addBookToLibrary("Il nome della rosa", "Fiorantina Alice", 459, "read");
addBookToLibrary("Millenium", "Ghandi", 2000, "not read yet");


function createGrid (height, width){
  container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
}

function displayLibrary () {

  if (!Array.isArray(myLibrary)) {
    console.error("myLibrary is not an array!");
    return;
}

  container.innerHTML = ""; // Vide la grille pour éviter la superposition

    const headers = ["Title", "Author", "Pages", "Read", "ID"];
    headers.forEach(headerText => {
      const header = document.createElement("div");
      header.textContent = headerText;
      header.style.fontWeight = "bold";
      header.style.border = "1px solid black";
      header.style.padding = "10px";
      header.style.textAlign = "center";
      header.style.alignContent = "center";
      header.style.backgroundColor = "darkblue";
      header.style.color = "white";
      container.appendChild(header);
    })
   
    myLibrary.forEach(book => {
      Object.values(book).forEach(value => {

        if (typeof value === "function") return;

        const cell = document.createElement("div");
        cell.textContent = value;
        cell.style.border = "1px solid black";
        cell.style.padding = "10px";
        cell.style.textAlign = "center";
        cell.style.alignContent = "center";
        container.appendChild(cell);
      });
    });

    createGrid(myLibrary.length + 1, 5);
  }

displayLibrary();