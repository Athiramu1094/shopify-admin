import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home,{loader as homeLoader} from './routes/home';
import AddProduct,{loader as addProductLoader} from './routes/add-product';
import EditProduct,{loader as editProductLoader} from './routes/edit-product';
import Product, {loader as productLoader} from './routes/product';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,

    children:[
      {
        path:"/",
        element:<Home/>,
        loader:homeLoader
      },

      {
        path:"/add-product",
        element:<AddProduct/>,
        loader:addProductLoader
      },
      
      {
      path:"/edit-product/:productId",
      element:<EditProduct/>,
      loader:editProductLoader
      },

      {
        path:"/products/:productId",
        element:<Product/>,
        loader:productLoader
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
