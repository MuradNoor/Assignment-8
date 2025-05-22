import { FaRegStar } from "react-icons/fa6";

const BookCard = ({ book }) => {
  const { image, bookName, author, tags, category, rating } = book;
  return (
    <div className="flex flex-col p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
      <div className="w-full py-7 dark:bg-gray-200 flex items-center justify-center rounded-md">
        <img src={image} alt="" className=" h-40" />
      </div>
      <div className="flex justify-start gap-3  mt-6 mb-4">
        {tags.map((tag) => (
          <div className="rounded-2xl font-medium text-green-500 bg-gray-100 px-4 py-1">
            {tag}
          </div>
        ))}
      </div>
      <div className="mt-6 mb-4 ">
        <h2 className="text-2xl font-semibold tracking-wide ">{bookName}</h2>
      </div>
      <p className="dark:text-gray-500 font-medium mb-5 grow">By : {author}</p>
      <hr className="border-dashed border-gray-400" />
      <div className="mt-5 flex justify-between">
        <p className="dark:text-gray-500 font-medium">{category}</p>
        <div className="flex justify-around items-center gap-1">
          <p className="dark:text-gray-500 font-medium">{rating}</p>
          <FaRegStar className="text-xl"></FaRegStar>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
