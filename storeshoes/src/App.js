import React from 'react'
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import { ProductPage } from './Components/ProductPage/ProductPage';
import { ProductDetail } from './Components/ProductPage/ProductDetail';
import { EditProduct } from './Components/ProductPage/EditProduct';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>

    },{
      path:'/products',
      element:<ProductPage/>,

    },{
      path:"/products/:productId",
      element:<ProductDetail/>
    },{
      path:"/products/:productId/edit",
      element:<EditProduct/>
    }

  ])
  return (
   <div className='App'>
     <RouterProvider router={router}/>
   </div>
  );
}

export default App;
