import Google from '../public/MdiGoogle.svg'

function App() {

  const styles = {
    label: `text-[1.4rem] font-medium block`,
    input: `text-[1.4rem] h-[4rem] font-medium px-4 rounded-md border w-full`
  }

  return (
    <section className="grid grid-cols-12">
      <nav className="col-span-full flex items-center justify-between py-4 border-b px-24">
        <h1 className="font-bold text-[2rem]">Sage</h1>
        <div className="flex justify-end items-center">
          <button className="px-4 py-2 border rounded-md font-medium text-[1.4rem]">Logout</button>
        </div>
      </nav>

      <section className="col-span-full mx-auto flex justify-center py-24">
        <div className="w-[40rem] border rounded-xl p-8 space-y-8">
          <form className="space-y-8">
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
              <a
                href='http://localhost:5000/api/v1/auth/google'
                className="text-[1.4rem] font-medium px-4 h-[4rem] border rounded-md w-full flex items-center justify-center gap-x-6">
                <span className='text-[1.4rem]'>Google</span>
                <img src={Google} alt='google' className="h-8 w-8" />
              </a>
            </div>
          </section>
        </div>

      </section>


    </section>
  )
}

export default App
