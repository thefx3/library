const body = document.querySelector('body');
const container = document.createElement('div');
container.style.width = "75%";
container.style.minWidth = "700px";
container.style.maxWidth = "1200px";
container.style.justifySelf = "center";
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

addBookToLibrary("ReadyPlayerOne", "Jack Johnson", 297, "Not read yet");
addBookToLibrary("It", "Stephen King", 498, "Read");
addBookToLibrary("Il nome della rosa", "Fiorantina Alice", 459, "Read");
addBookToLibrary("Millenium", "Ghandi", 2000, "Not read yet");


function createGrid (height, width){
  container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  // container.style.gridTemplateRows = `repeat(${height}, 1fr)`;

  let rowHeights = new Array(height).fill("auto");
  rowHeights[0] = "minmax(0, 50px)";
  rowHeights[1] = "minmax(0, 50px)";

  container.style.gridTemplateRows = rowHeights.join(" ");
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
    library.style.backgroundColor = "darkred";
    library.style.color = "white";
    library.style.height = "50px";
    container.appendChild(library);

    library.style.gridColumn = "1 / span 4";

    const newbook = document.createElement("button");
    newbook.classList.add(".newbook");
    newbook.textContent = "Add New Book";
    newbook.style.fontWeight = "bold";
    newbook.style.gridColumn = "5 / span 1";
    newbook.style.gridRow = "1";

    newbook.style.height = "50px";
    container.appendChild(newbook);

    newbook.addEventListener('click', function() {
      dialog.showModal();
    });


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
      header.style.height = "50px";
    })
   

    
   
    myLibrary.forEach(book => {
      Object.entries(book).forEach(([key,value]) => {

        if (typeof value === "function") return;

        const cell = document.createElement("div");

        if (key === "id") { cell.classList.add("id-cell"); }

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

const dialog = document.querySelector('dialog');
const cancelBtn = dialog.querySelector("#cancel");
const confirmBtn = dialog.querySelector("#id");


cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
})

dialog.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = document.getElementById("pages").value.trim();
  const read = document.querySelector("input[name=choice-radio]:checked").value;


  if (!title || !author || !pages) {
      alert("Please fill in all fields.");
      return;
  }

  addBookToLibrary(title, author, pages, read);

  dialog.close();
})
