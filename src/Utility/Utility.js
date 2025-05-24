import toast from "react-hot-toast";
//get books
export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books;
}

//wishlist
export const getWishlist = () => {
    let wishlists = []
    const storedLists = localStorage.getItem('wishlist')
    if(storedLists){
        wishlists = JSON.parse(storedLists)
    }
    return wishlists;
}
//save wishlist
export const saveWishlist = wishlist => {
    let wishlists = getWishlist()
    let readBook = getBooks()
    const isExists = readBook.find(list => list.bookId === wishlist.bookId)
    if(isExists){
        return toast.error('Already Read This Book!')
    }
    const exists = wishlists.find(wli => wli.bookId === wishlist.bookId)
    if(exists){
        return toast.error('Already in the Wishlist')
    }
    wishlists.push(wishlist)
    localStorage.setItem('wishlist', JSON.stringify(wishlists))
    toast.success('Book Added Successfully in Wishlist!')
    
}
//save books
export const saveBook = book => {
    let books = getBooks()
    const isExists = books.find(b => b.bookId === book.bookId)
    if(isExists){
        return toast.error("Already Added to Read Book List!")
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Added Successfully!')
}

//delete books
// export const deleteBook = id =>{
//     let books = getBooks()
//     const remaining = books.filter(b => b.id !== id)
//     localStorage.setItem('books', JSON.stringify(remaining))
//     toast.success('Books Removed from the List!')
// }