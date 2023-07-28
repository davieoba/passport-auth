import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Navbar } from "../../components/navbar"
import { useStore } from "../../features/store"

const Home = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useStore((state) => {
    console.log('zustand user', state.user)
  })

  // fetch the user name and details here
  useEffect(() => {
    const fetchUser = async () => {
      const data = await axios.get('http://localhost:5000/api/v1/user', { withCredentials: true })

      // console.log(data.data)
      setUser(data.data)
    }

    fetchUser()
  }, [])

  // console.log({ user })
  return (
    <>
      <Navbar />
      <main className="col-span-full px-24 py-12 space-y-12">
        <section className="flex justify-end">
          <button
            className='rounded-md py-3 px-4 border text-[1.4rem]'
            onClick={() => navigate('/dashboard')}>Go to the dashboard</button>
        </section>
        <h1 className="text-2xl font-bold"> Welcome {user && user.user.name} to the home page </h1>
      </main>
    </>
  )
}

export default Home