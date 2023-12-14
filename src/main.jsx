import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import ErrorElement from './Components/ErrorElement/ErrorElement.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/Register/Register.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    errorElement:<ErrorElement />,
    children:[
      {
        path:"/blogs",
        element:<Blogs />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/register",
        element:<Register />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
