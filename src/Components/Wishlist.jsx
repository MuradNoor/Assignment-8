import { useEffect, useState } from "react";
import { getWishlist } from "../Utility/Utility";
import ReadBookCard from "./ReadBookCard";


const Wishlist = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const storedBook = getWishlist()
        setBooks(storedBook)
    },[])
    return (
        <div className="flex flex-col gap-4 w-full ">
            {
                books.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
        </div>
    );
};

export default Wishlist;