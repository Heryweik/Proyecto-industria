import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* Importacion de rutas */
import Home from './routes/Home/Home'
import LogIn from "./routes/LogIn/Login";
import SignUp from "./routes/SignUp/SignUp";
import Error  from "./routes/Error";
import Menu from "./routes/Menu/Menu";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error/>,
    /* children: [
      {
        path:'contacts/:contactid',
        element: <h2>contact</h2>,
      }
    ] */
  },
  {
    path: '/login',
    element: <LogIn/>,
  },
  {
    path: '/signup',
    element: <SignUp/>,
  },
  {
    path: '/menu',
    element: <Menu/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
