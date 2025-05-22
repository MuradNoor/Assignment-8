import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Pages/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import ListedBooks from './Pages/ListedBooks.jsx';
import ReadPages from './Pages/ReadPages.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
      path: "/home",
      element: <Home />
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />
      },
      {
        path: "/readpages",
        element: <ReadPages />
      }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
