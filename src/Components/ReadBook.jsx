import { useEffect, useState } from "react";
import { getBooks } from "../Utility/Utility";
import ReadBookCard from "./ReadBookCard";


const ReadBook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const storedBook = getBooks()
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

export default ReadBook;