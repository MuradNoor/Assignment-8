import toast from "react-hot-toast";
//get books
export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books;
}

//save books
export const saveBook = book => {
    let books = getBooks()
    const isExists = books.find(b => b.bookId === book.bookId)
    if(isExists){
        return toast.error("Already Added to ReadBook List!")
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Added Successfully!')
}

//delete books
export const deleteBook = id =>{
    let books = getBooks()
    const remaining = books.filter(b => b.id !== id)
    localStorage.setItem('books', JSON.stringify(remaining))
    toast.success('Books Removed from the List!')
}