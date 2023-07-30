/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks'

function Protected({ children }) {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected