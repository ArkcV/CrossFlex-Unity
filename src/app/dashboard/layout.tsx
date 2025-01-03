"use client"

import Sidebar from "../../components/SideBar"

const layout = ({children}:any) => {
  return (
    <>
     <div>
      <><Sidebar/></>
     </div>
     <div>
       NAVBAR
       {children}
     </div>
    </>
  )
}

export default layout
