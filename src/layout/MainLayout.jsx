import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/navbar/Navbar"
import Footer from "../components/shared/footer/Footer"

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* children components */}
      <Outlet />

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout