import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../Utility/Utility";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    category,
  } = book;

    const handleReadBook = (book) => {
      saveBook(book)
    }

  return (
    <section className="mr-3 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center lg:gap-6">
        <div className="flex-1 w-100 flex flex-col lg:ml-25 dark:bg-gray-100 items-center justify-center p-5 mt-8 lg:mt-0 h-full sm:h-80 lg:h-full xl:h-full 2xl:h-full rounded-2xl">
          <img
            src={image}
            alt=""
            className="object-contain h-144 sm:h-144 lg:h-144 xl:h-144 2xl:h-144"
          />
        </div>
        <div className=" flex flex-col justify-start p-4 text-left rounded-sm lg:text-left">
          <h1 className="text-4xl font-bold leading-none sm:text-6xl">
            {bookName}
          </h1>
          <p className="mt-4 font-medium text-xl lg:mb-6 text-[#131313CC] sm:mb-12">
            By : {author}
          </p>
          <hr className="border border-gray-300 mt-4 mb-4" />
          <p className="font-medium text-[#131313CC] text-xl">{category}</p>
          <hr className="border border-gray-300 mt-4 mb-6" />
          <p className="text-[#131313CC] mb-7">
            <span className="text-black font-bold">Review: </span>
            {review}
          </p>
          <div className="flex gap-2 mb-7">
            <span className="font-black to-black">Tag:</span>
            <div className="flex justify-start items-center gap-2">
              {tags.map((tag, idx) => (
                <p
                  className="bg-gray-100 font-medium text-[#23BE0A] rounded-xl px-3 py-1"
                  key={idx}
                >
                  #{tag}
                </p>
              ))}
            </div>
          </div>
          <hr className="border border-gray-300  mb-6" />
          <div className="flex gap-10">
            <div>
              <div className="flex justify-start gap-12 mb-3">
                <p className=" text-[#131313B3]">Number of Pages:</p>
              </div>
              <div className="flex justify-start gap-10 mb-3">
                <p className=" text-[#131313B3]">Publisher:</p>
              </div>
              <div className="flex justify-start gap-10 mb-3">
                <p className=" text-[#131313B3]">Year of Publishing:</p>
              </div>
              <div className="flex justify-start gap-10 mb-3">
                <p className=" text-[#131313B3]">Rating:</p>
              </div>
            </div>
            <div>
              <span className="text-black font-bold flex mb-3">
                {totalPages}
              </span>
              <span className="text-black font-bold flex mb-3">
                {publisher}
              </span>
              <span className="text-black font-bold flex mb-3">
                {yearOfPublishing}
              </span>
              <span className="text-black font-bold flex mb-3">{rating}</span>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <button
            onClick={() => handleReadBook(book)}
              type="button"
              className="px-8 py-3 border-2 border-gray-300 cursor-pointer hover:bg-green-400 font-semibold rounded dark:bg-white dark:text-black"
            >
              Read 
            </button>
            <button
              type="button"
              className="px-8 py-3 font-semibold rounded cursor-pointer dark:bg-blue-400 hover:bg-purple-500 dark:text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
