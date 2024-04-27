import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home';
import AllArtCraft from './Components/AllArtCraft/AllArtCraft';
import AddCraftItem from './Components/AddCraftItem/AddCraftItem';
import MyArtCraft from './Components/MyArtCraft/MyArtCraft'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import Root from './Components/Root/Root';

const router = createBrowserRouter([
  {
      path:'/',
      element:<Root></Root>,
      children:[
          {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/addCraftItem')
          },

          {
            path:"/allArtCraft",
            element:<AllArtCraft></AllArtCraft>,
            loader: () => fetch('http://localhost:5000/addCraftItem')
          },

          {
            path:'/addCraftItem',
            element:<AddCraftItem></AddCraftItem>
          },

          {
            path:'/myArtCraft',
            element:<MyArtCraft></MyArtCraft>
          },

          {
            path:'/logIn',
            element:<LogIn></LogIn>
          },

          {
            path:'/register',
            element:<Register></Register>
          }
      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
