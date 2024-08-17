import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './components/layouts/LayoutMain'
import { HomePage } from './pages/Home/HomePage'

const router = createBrowserRouter([{
  path: "/",
  element: <LayoutMain/>,
  children: [
    {index: true, element: <HomePage/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
