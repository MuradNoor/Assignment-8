import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";


const ReadBookCard = ({book}) => {
    const {
    image,
    bookName,
    author,
    bookId,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    category,
  } = book;

    return (
        <div className="flex w-full p-6 gap-6 rounded-xl border  border-gray-400">
            <div className="h-64 w-60 bg-gray-100 rounded-xl object-center p-10">
            <img className="h-full w-full" src={image} alt="" />
            </div>
            <div className="space-y-4 flex-1">
            <h1 className="font-bold text-2xl">{bookName}</h1>
            <p className="font-medium text-[#131313CC]">By : {author}</p>
                <div className="flex gap-5">
                    <span className="font-bold">Tag</span>
                    {
                        tags.map((tag, idx) => <div className="font-medium rounded-xl px-2 py-1 text-green-500 bg-gray-100" key={idx}>#{tag}</div>)
                    }
                    <p className="flex items-center
                     gap-2 text-[#131313CC]"><IoLocationOutline></IoLocationOutline>Year of Publishing:  {yearOfPublishing}</p>
                </div>
                <div className="flex gap-4">
                    <p className="flex items-center
                     gap-2 text-[#131313CC]"><HiOutlineUsers></HiOutlineUsers>  Publisher :  {publisher}</p>
                    <p className="flex items-center
                     gap-2 text-[#131313CC]"><MdOutlineContactPage></MdOutlineContactPage>  Page : {totalPages}</p>
                </div>
                <hr className="border border-gray-300" />
                <div className="flex gap-4 ">
                    <p className="bg-blue-300 p-2 rounded-2xl text-blue-800">Category: {category}</p>
                    <p className="bg-orange-300 p-2 rounded-2xl text-orange-800">Rating: {rating}</p>
                    <Link to={`/bookdetails/${bookId}`} className="bg-green-300 p-2 rounded-2xl text-green-800">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ReadBookCard;