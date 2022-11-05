const BookForm = document.getElementById("BookForm");
const BookTitle = document.getElementById("BookTitle");
const Author = document.getElementById("author");
const pages = document.getElementById("pages");
const haveRead = document.getElementById("status");
const submitButton = document.getElementById("submitButton");
const bookContainer = document.querySelector(".book-container");
const bookelement = document.querySelector(".book");
const AddBook = document.getElementById("Add-Book")

AddBook.addEventListener("click", () => {
   if (BookForm.style.visibility === "hidden") {
    BookForm.style.visibility = "visible";
    bookContainer.style.visibility = "hidden";
   }else{
    BookForm.style.visibility = "hidden";
    bookContainer.style.visibility = "visible";
   }
})

let myLibrary = []
function renderBooks(){
    bookContainer.innerHTML = "";
    myLibrary.forEach(function(book) {
        let readbook
        if (book.haveRead === "true") {
            readbook = true
        }
        else{
            readbook = false
        }
        console.log(book.haveRead)
        newbook = document.createElement("div")
        newbook.innerHTML = `<h1>${book.name}</h1> <h3> ${book.author}</h3> <h3> ${book.pages}</h3>`;
        const readButton =  document.createElement('button')
        readButton.innerText = "Read"
        readButton.className = readbook ? "read" : "not-read"
        const removeBook = document.createElement("button")
        removeBook.innerText = "Remove Book"
        removeBook.addEventListener("click", function(e) {

            try{
                e.preventDefault();
                bookdiv = (e.target.parentElement)
                bookdiv.remove()
        
            }catch(e){

            }
         
            
            removeBookFromLibrary(myLibrary.indexOf(book),bookdiv)
        })
       
        
        newbook.appendChild(removeBook)
        newbook.appendChild(readButton)
        newbook.className = "bookcontainer"
        bookContainer.appendChild(newbook)
  
        
      
        })
        console.log(newbook)
     

}

class Book{
    constructor(name,author,pages,haveRead){
        this.name = name
        this.author = author
        this.pages = pages
        this.haveRead = haveRead
    }

}


submitButton.addEventListener("click", function(e){

addBookToLibrary()
BookForm.style.visibility = "hidden"
BookForm.reset()
bookContainer.style.visibility = "visible"


})
function addBookToLibrary(){
if(BookTitle.value !== "" && Author.value !== "" && pages.value !== ""){
newBook = new Book(BookTitle.value,Author.value,pages.value,haveRead.value)
myLibrary.push(newBook)
renderBooks()
}

}

function removeBookFromLibrary(index){
    
myLibrary.splice(index,1)
renderBooks()
}

