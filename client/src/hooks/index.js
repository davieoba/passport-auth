import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useAuth = () => {
  let isLoggedIn = null

  const fetchUser = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/user', { withCredentials: true })
    return response.data
  }

  const { isLoading, data } = useQuery(['isAuthenticated'], fetchUser)

  if (isLoading === false) {
    if (data?.user) {
      isLoggedIn = true
    } else {
      isLoggedIn = false
    }
  }

  return {
    isLoggedIn,
    user: data?.user
  }
}