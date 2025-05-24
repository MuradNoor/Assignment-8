import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Pages/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import ListedBooks from './Pages/ListedBooks.jsx';
import ReadPages from './Pages/ReadPages.jsx';
import BookDetails from './Components/BookDetails.jsx';
import ReadBook from './Components/ReadBook.jsx';
import Wishlist from './Components/Wishlist.jsx';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
      path: "/",
      element: <Home />,
      loader: () => fetch('/books.json')
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
        children: [
          {
            index: "true",
            element: <ReadBook />
          },
          {
            path: 'wishlist',
            element: <Wishlist />
          }
        ]
      },
      {
        path: "/readpages",
        element: <ReadPages />
      },  
      {
        path: "/bookdetails/:id",
        element: <BookDetails />,
        loader: () => fetch(`/books.json`)
      }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>,
)
