
import Navbar from "../../components/NavBar"
import Sidebar from "../../components/SideBar"
import { getServerSession } from "next-auth";

export default async function Layout ({ children }: { children: React.ReactNode })  {

  const session = await getServerSession();

  return (
    <main>
      <div className="flex">
        <Sidebar session={session} />
        <div className="w-full ml-16 md:ml-56">
          <Navbar session={session} />
          {children}
        </div>
      </div>
    </main>
  )
}


