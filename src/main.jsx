import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingInPage from './auth/signin/index.jsx'
import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'


// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const PUBLISHABLE_KEY = 'pk_test_dW5pZmllZC1hbW9lYmEtNjYuY2xlcmsuYWNjb3VudHMuZGV2JA';

const router = createBrowserRouter([
  {
    
    element: <App/>,
    children:[
      {
        path: '/dashboard',
        element:<Dashboard/>
      }
    ]
  },
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/auth/signin',
    element:<SingInPage/>
   }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      </ClerkProvider>
  </StrictMode>,
)
