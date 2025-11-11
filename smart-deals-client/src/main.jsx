import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import Root from './layouts/Root.jsx'
import { RouterProvider } from 'react-router/dom'
import Home from './components/Home/Home.jsx'
import AllProducts from './components/AllProducts/AllProducts.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import Register from './components/Register/Register.jsx'
import MyProducts from './components/MyProducts/MyProducts.jsx'
import MyBids from './components/MyBids/MyBids.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'allProducts',
        Component: AllProducts
      },
      {
        path : 'register',
        Component : Register
      },
      {
        path : 'myProducts',
        Component : MyProducts
      },
      {
        path : 'myBids',
        Component : MyBids
      },
      {
        path: 'productDetails/:id',
        loader : ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        Component : ProductDetails
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
