import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from './Cart.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"cart",
          element:<Cart/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
