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

  displayLibrary(myLibrary);
}

addBookToLibrary("ReadyPlayerOne", "Jack Johnson", 297, "not read yet");
addBookToLibrary("It", "Stephen King", 498, "read");
addBookToLibrary("Il nome della rosa", "Fiorantina Alice", 459, "read");
addBookToLibrary("Millenium", "Ghandi", 2000, "not read yet");


function createGrid (height, width){
  container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
}

function displayLibrary(array) {  //Grid

  if (!Array.isArray(myLibrary)) {
    console.error("myLibrary is not an array!");
    return;
}

  container.innerHTML = "";


    const library = document.createElement("div");
    library.textContent = "MY LIBRARY";
    library.style.fontWeight = "bold";
    library.style.border = "1px solid black";
    library.style.padding = "10px";
    library.style.textAlign = "center";
    library.style.alignContent = "center";
    library.style.backgroundColor = "darkblue";
    library.style.color = "white";
    container.appendChild(library);

    library.style.gridColumn = "1 / span 4";

    const headers = ["Title", "Author", "Pages", "Read", "ID"];
    headers.forEach(headerText => {
      const header = document.createElement("div");
      header.textContent = headerText;
      header.style.fontWeight = "bold";
      header.style.border = "1px solid black";
      header.style.padding = "10px";
      header.style.textAlign = "center";
      header.style.alignContent = "center";
      header.style.backgroundColor = "blue";
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

    createGrid(myLibrary.length + 2, 5);
  }


//BUTTON - ADD NEW BOOK
const container2 = document.createElement('div');
body.appendChild(container2);
const newbook = document.createElement("button");
newbook.classList.add("newbook");
newbook.textContent = "Add New Book";
newbook.style.fontWeight = "bold";
newbook.style.gridColumn = "5 / span 1";
newbook.style.gridRow = "1";

container.appendChild(newbook);


// add.addEventListener('click', function () {

//   const dialog = document.createElement("dialog");
//   dialog.classList.add('dialog');
//   container2.appendChild(dialog);
//   const form = document.createElement('form');
//   dialog.appendChild(form);
//   const legend = document.createElement("legend");
//   legend.textContent = "Add a new book";
//   form.appendChild(legend);

//   const labels = ["Title", "Author", "Pages", "Read", "ID"];

//   labels.forEach(label => {
//     const div = document.createElement("div");
//     const label = document.createElement("label");
//     label.setAttribute("for",labelText.toLowerCase());
//     label.textContent = labelText;

//     const input = document.createElement("input");
//     input.setAttribute("id", labelText.toLowerCase());
//     input.setAttribute("name", labelText.toLowerCase());

//     div.appendChild(label);
//     div.appendChild(input);
//     form.appendChild(div);
//   });

//   const buttonDiv = document.createElement("div");

//   const cancelButton = document.createElement("button");
//   cancelButton.textContent = "Cancel";
//   cancelButton.setAttribute("formmethod", "dialog");

//   const confirmButton = document.createElement("button");
//   confirmButton.textContent = "Confirm";
//   confirmButton.setAttribute("type", "submit");

//   buttonDiv.appendChild(cancelButton);
//   buttonDiv.appendChild(confirmButton);
//   form.appendChild(buttonDiv);

//   const openButton = document.createElement("button");
//   openButton.textContent = "Add new book";
//   openButton.addEventListener("click", () => dialog.showModal());

//   container2.appendChild(openButton);

// });

