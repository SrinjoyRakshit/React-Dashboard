import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/home/Home'
import Customers from "./pages/customers/Customers";
import Product from "./pages/product/Product";
import New from './pages/new/New'
import Single from './pages/single/Single'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { userInputs, productInputs } from "./formData";
import './style/dark.scss'
import { DarkModeContext } from "./context/darkmodeContext";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/customers',
    element: <Customers />
  },
  {
    path: '/users',
    element: <Customers />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/products',
    element: <Product />
  },
  {
    path: '/users/:userId/new',
    element: <New inputs = {userInputs} title = {'Add New User'} />
  },
  {
    path: '/products/:productId/new',
    element: <New inputs = {productInputs} title = {'Add New Product'} />
  },
  {
    path: '/customers/:productId/new',
    element: <New />
  },
  {
    path: '/users/:userid',
    element: <Single />
  },
  {
    path: '/customers/:customerId',
    element: <Single />
  },
  {
    path: '/products/:productId',
    element: <Single />
  },
])

function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark"  : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
