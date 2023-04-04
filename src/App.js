
import React from 'react';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import './App.css';
import Main from './Component/layout/Main';
import Blog from './Component/News/Blog';
import Contact from './Component/News/Contact';
import Destination from './Component/News/Destination';

import News from './Component/News/News';
import {Login} from './Component/News/Login';
import {Signup} from './Component/News/Signup';

import ErrorPage from './Component/Errorpage/Errorpage';


function App() {
  const router = createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[

        {
          path:'/',
          element:<News></News>
        },
        {
          path:'/destination',
          element:<Destination></Destination>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        }
      ]
    }




  ])
  return (
    <div className="App text-black">

      <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
