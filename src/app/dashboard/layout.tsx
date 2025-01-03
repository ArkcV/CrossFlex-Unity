"use client"

import Navbar from "../../components/NavBar"
import Sidebar from "../../components/SideBar"

const layout = ({children}:any) => {
  return (
    <main>
     <div>
      <><Sidebar/></>
     </div>
     <div>
       <Navbar/>
       {children}
     </div>
    </main>
  )
}

export default layout
