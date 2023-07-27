import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="col-span-full flex items-center justify-between py-4 border-b px-24">
      <h1 className="font-bold text-[3rem]">
        <Link to='/'>Sage</Link>
      </h1>
      <div className="flex justify-end gap-x-12 items-center">
        <Link
          to='/auth/login'
          className="px-4 py-2 border rounded-md font-medium text-[1.4rem]">
          Login
        </Link>
        <button className="px-4 py-2 border rounded-md font-medium text-[1.4rem]">Logout</button>
      </div>
    </nav>
  )
}
