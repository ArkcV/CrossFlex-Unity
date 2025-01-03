"use client"

import Navbar from "../../components/NavBar"
import Sidebar from "../../components/SideBar"

const Layout = ({ children }: any) => {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-16 md:ml-56">
          <Navbar />
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout
