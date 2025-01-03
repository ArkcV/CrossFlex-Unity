import { usePathname } from "next/navigation"

export default function Navbar () {

  const  pathname = usePathname()
  return (
    <nav>
      <div className="capitalize">
       {pathname.split("/").pop()} 
      </div>
    </nav>
  )
}