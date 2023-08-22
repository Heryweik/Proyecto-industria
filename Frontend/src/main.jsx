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
import Clientes from "./routes/Clientes/Clientes";
import Empleados from "./routes/Empleados/Empleados";
import Productos from "./routes/Productos/Productos";
import Proveedores from "./routes/Proveedores/Proveedores";
import Servicios from "./routes/Servicios/Servicios";
import Ventas from "./routes/Ventas/Ventas";
import DeployFileReader  from "./routes/Deploy/Deploy";

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
    path: '/menu/:id',
    element: <Menu/>,
  },
  {
    path: '/clientes/:id',
    element: <Clientes/>,
  },
  {
    path: '/empleados/:id',
    element: <Empleados/>,
  },
  {
    path: '/proveedores/:id',
    element: <Proveedores/>,
  },
  {
    path: '/productos/:id',
    element: <Productos/>,
  },
  {
    path: '/servicios/:id',
    element: <Servicios/>,
  },
  {
    path: '/ventas/:id',
    element: <Ventas/>,
  },
  {
    path: '/deploy',
    element: <DeployFileReader/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)