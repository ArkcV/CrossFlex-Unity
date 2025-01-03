"use client"

const layout = ({children}:any) => {
  return (
    <>
     <div>
     <>SIDEBAR</>
     </div>
     <div>
       NAVBAR
       {children}
     </div>
    </>
  )
}

export default layout
