import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useAuth = () => {
  let isLoggedIn = false

  const fetchUser = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/user', { withCredentials: true })
    return response.data
  }

  const { data } = useQuery(['isAuthenticated'], fetchUser)

  if (data?.user) {
    isLoggedIn = true
  }

  return {
    isLoggedIn,
    user: data?.user
  }
}