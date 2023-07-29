import axios from 'axios'
import Google from '../../assets/MdiGoogle.svg'
import { Navbar } from '../../components/navbar'
import { Navigate } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const styles = {
  label: `text-[1.4rem] font-medium block`,
  input: `text-[1.4rem] h-[4rem] font-medium px-4 rounded-md border w-full`
}

const Login = () => {
  const [errorAuthMessage, setErrorAuthMessage] = useState(null)

  const fetchUser = async () => {
    let status, url, message
    const response = await axios.get('http://localhost:5000/api/v1/user', { withCredentials: true }).catch((err) => {
      status = err.response.status
      url = err.response.data.redirectUrl
      // message = err.response

      console.log({ status, url, message })
    })

    if (status === 401) {
      return setErrorAuthMessage(message)
    }

    // return response.data.user
    console.log('fetch the user information', response.data.user)
    window.location.href = '/'
  }

  const handleGoogleSSO = () => {
    let timer = null
    const newAuthWindow = window.open('http://localhost:5000/api/v1/auth/google', '_blank', 'width=500, height=600')

    if (newAuthWindow) {
      timer = setInterval(() => {
        if (newAuthWindow.closed) {
          console.log('Authenticated')
          fetchUser()

          if (timer) {
            clearInterval(timer)
          }
        }
      }, 500)
    }
    <Navigate to="/dashboard" replace={true} />
  }

  return (
    <section className="grid grid-cols-12">
      <Navbar />

      <section className="col-span-full mx-auto flex justify-center py-24">
        <div className="w-[40rem] border rounded-xl p-8 space-y-8">
          <form className="space-y-8">
            {errorAuthMessage && <p className='text-red-500 text-[1.4rem] font-medium'> {errorAuthMessage} </p>}
            <h1 className="font-medium text-[1.5rem]">Login</h1>
            <div>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="text" placeholder="Enter Email" className={styles.input} />
            </div>

            <div>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" placeholder="Enter Password" className={styles.input} />
            </div>

            <button className="bg-blue-500 h-[4rem] text-white rounded-md text-[1.4rem] font-medium w-full py-4">
              Login
            </button>
          </form>

          <section className="flex items-center gap-x-8">
            <div className="h-1 flex-grow bg-slate-200"></div>
            <div className="font-medium text-[1.4rem] uppercase">OR</div>
            <div className="h-1 flex-grow bg-slate-200"></div>
          </section>

          <section>
            <div>
              <button
                onClick={handleGoogleSSO}
                className="text-[1.4rem] font-medium px-4 h-[4rem] border rounded-md w-full flex items-center justify-center gap-x-6">
                <span className='text-[1.4rem]'>Google</span>
                <img src={Google} alt='google' className="h-8 w-8" />
              </button>
            </div>
          </section>
        </div>

      </section>


    </section>
  )
}

export default Login