import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/auth/login'
import Dashboard from './pages/dashboard'
import { useAuth } from './hooks'
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
    element: <Protected />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
])

function App() {
  const { isLoggedIn } = useAuth()

  console.log({ isLoggedIn })

  return (
    <section>
      <RouterProvider router={router} />
    </section>
  )
}

export default App
