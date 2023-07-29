import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/auth/login'
import Dashboard from './pages/dashboard'

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
    path: '/dashboard',
    element: <Dashboard />
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
