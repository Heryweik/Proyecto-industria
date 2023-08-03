import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* Importacion de rutas */
import Home from './routes/Home'
import LogIn from "./routes/Login";
import SignUp from "./routes/SignUp";
import Error  from "./routes/Error";
import Menu from "./routes/Menu";
import Clientes from "./routes/Clientes";
import Empleados from "./routes/Empleados";
import Productos from "./routes/Productos";
import Proveedores from "./routes/Proveedores";
import Servicios from "./routes/Servicios";
import Ventas from "./routes/Ventas";

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
  {
    path: '/clientes',
    element: <Clientes/>,
  },
  {
    path: '/empleados',
    element: <Empleados/>,
  },
  {
    path: '/proveedores',
    element: <Proveedores/>,
  },
  {
    path: '/productos',
    element: <Productos/>,
  },
  {
    path: '/servicios',
    element: <Servicios/>,
  },
  {
    path: '/ventas',
    element: <Ventas/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
