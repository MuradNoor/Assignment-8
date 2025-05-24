
import { Link } from 'react-router-dom';

const EmptyPagesToRead = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='text-5xl font-bold text-black text-center items-center'>The Book list is Empty</h1>
            <p className='font-medium text-2xl'>Add books to see the chart </p>
            <Link to='/' type="button" className="px-8 hover:bg-purple-400 hover:text-white bg-green-500 py-3 font-semibold rounded text-gray-800">Add Books</Link>
        </div>
    );
};

export default EmptyPagesToRead;