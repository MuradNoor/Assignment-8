import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="container mx-auto flex flex-col">
            <h1 className="text-black font-bold text-3xl bg-gray-100 py-4 text-center rounded-xl mb-8">Books</h1>
            <div className="flex items-center justify-center mb-14">
      <div className="dropdown dropdown-bottom dropdown-center ">
  <div tabIndex={0} role="button" className="btn m-1 bg-green-500 hover:bg-white hover:text-green-500">Sort By <FaAngleDown></FaAngleDown></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    </div>
      <div className="flex flex-1 items-center mx-4   sm:justify-start   text-gray-800 mb-8">
	<Link to='' onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex  items-center flex-shrink-0  px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 rounded-t-lg border-gray-600' : 'border-b  border-gray-600'} text-gray-900`}>
		<span>Read Books</span>
	</Link>
	<Link to='wishlist' onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex  items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 rounded-t-lg border-gray-600' : 'border-b border-gray-600'} text-gray-900`}>
		<span>Wishlist</span>
	</Link>
</div>
<Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;