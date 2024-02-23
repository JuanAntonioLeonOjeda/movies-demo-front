import { createBrowserRouter, redirect } from "react-router-dom"

import LoginCard from "../components/LoginCard/LoginCard"
import Dashboard from "../pages/Dashboard"
import Movies from "../pages/Movies"
import Genres from "../pages/Genres"
import Root from '../layouts'

const router = createBrowserRouter([
  {
    path:'/login',
    element: <LoginCard />,
  },
  {
    path: '/home',
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Dashboard />,
        loader: () => {
          if (!localStorage.getItem('token')) {
            return redirect('/')
          } else {
            return null
          }
        }
      },
      {
        path: '/home/movies',
        element: <Movies />
      },
      {
        path: '/home/genres',
        elemetn: <Genres />
      }
    ]
  }
])

export default router