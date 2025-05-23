import { useEffect, useState } from "react";
import { getBooks } from "../Utility/Utility";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import EmptyPagesToRead from "../Components/EmptyPagesToRead";



const ReadPages = () => {
    const [books, setBooks] = useState([]);
        useEffect(() => {
            const storedBook = getBooks()
            setBooks(storedBook)
        },[])

        const data = books;
        const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
          const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
  );

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
    if(books.length === 0){
        return <EmptyPagesToRead />
    }
    else
    return (
        <div className="w-full bg-gray-100 p-10 rounded-xl">
            <div className="w-full overflow-hidden">
                 <BarChart width={1400} height={700} data={data}>
                   <XAxis dataKey='bookName'  />
                   <YAxis />
                   <Tooltip></Tooltip>
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top', fontSize: 12}}>
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
      </Bar>
                 </BarChart>
               </div>
        </div>
    );
};

export default ReadPages;