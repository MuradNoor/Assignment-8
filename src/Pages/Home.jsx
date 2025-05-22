import { NavLink } from "react-router-dom";
import bookimage from "../assets/book1.png";

const Home = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800 rounded-xl">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-2xl ml-16 lg:text-left">
			<h1 className="text-5xl font-bold sm:text-6xl">Books to freshen up your bookshelf</h1>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x- lg:justify-start mt-12 ">
				<NavLink to="/listedbooks" rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold bg-green-600 text-white hover:text-black hover:bg-purple-400 rounded ">View The List</NavLink>
			</div>
		</div>
		<div className="flex mr-16 items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={bookimage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Home;