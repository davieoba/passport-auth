import { Navbar } from "../../components/navbar"

const ProtectedPage = () => {
  return (
    <div>
      <Navbar />

      <section className="grid grid-cols-12">
        <section className="col-start-2 col-end-12 py-24">
          <p className="text-[1.4rem] font-medium">
            This is the user dashboard
          </p>
        </section>
      </section>
    </div>
  )
}

export default ProtectedPage