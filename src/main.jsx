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
import ErrorPage from './Components/ErrorPage/ErrorPage';
import SingleItemDetails from './Components/SingleItemDetails/SingleItemDetails';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRoutes from './Components/PrivateRoute/PrivateRoutes';


const router = createBrowserRouter([
  {
      path:'/',
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
          {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/addCraftItem')
          },
          
          
           {
            element:<ErrorPage></ErrorPage>
           },

          {
            path:"/allArtCraft",
            element:<AllArtCraft></AllArtCraft>,
            loader: () => fetch('http://localhost:5000/addCraftItem')
          },

          {
            path:'/addCraftItems',
            element:<PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
          },

          {
            path:'/addCraftItem/:id',
            element:<SingleItemDetails></SingleItemDetails>,
            loader:({params}) => fetch(`http://localhost:5000/addCraftItem/${params.id}`)
          },

          {
            path:'/myArtCraft',
            element:<MyArtCraft></MyArtCraft>,
            loader: () => fetch('http://localhost:5000/addCraftItem')
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
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
