import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/auth/login'
import Dashboard from './pages/dashboard'

import Register from './pages/auth/register'
import Protected from './components/protected'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth/login',
    element: <Login />
  },
  {
    path: '/auth/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    )
  }
])

function App() {

  return (
    <section>
      <RouterProvider router={router} />
    </section>
  )
}

export default App
