import { RouterProvider } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import routerInst from './router'

import './App.css'

function App() {
  return (
    <>
      <RouterProvider router={routerInst} />
      <CssBaseline />
    </>
  )
}

export default App
