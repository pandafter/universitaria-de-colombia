import { Outlet } from "react-router-dom"
import { Navbar } from "../ui/Navbar/Navbar"
import { Footer } from "../ui/Footer/Footer"

export const LayoutMain = () => {
  return (
    <div style={{marginLeft: -8, marginRight: -8, marginTop: -8}}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
