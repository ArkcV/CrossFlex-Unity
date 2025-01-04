
import { RxDashboard } from "react-icons/rx";
import { BsHouse } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { LuFileCheck, LuBookOpen } from "react-icons/lu";
import { TfiWallet } from "react-icons/tfi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineInventory2 } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import LogoutButton from "./LogoutButton";
import { Session } from "next-auth";
import Image from "next/image";


interface SideBarProps {
  session: Session | null;
}

const menuItems = [
  {
    list: [
      { title: "Inicio", path: "/dashboard", icon: <RxDashboard /> },
      { title: "Perfil", path: "/dashboard/profile", icon: <BsHouse /> },
      { title: "Registrar", path: "/dashboard/registration", icon: <FaRegPenToSquare /> },
      { title: "Planos", path: "/dashboard/plan", icon: <LuFileCheck /> },
      { title: "Inscrição", path: "/dashboard/payment", icon: <TfiWallet /> },
      { title: "Alunos", path: "/dashboard/members", icon: <HiOutlineUsers /> },
      { title: "Inventário", path: "/dashboard/inventory", icon: <MdOutlineInventory2 /> },
      { title: "Treinadores", path: "/dashboard/coaches", icon: <CgGym /> },
      { title: "Ajuda", path: "/dashboard/help", icon: <LuBookOpen /> },
    ],
  },
];


export default async function Sidebar({ session }: SideBarProps) {
  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border pt-8 px-4 bg-blue-cf_blue">
      <nav>
        <div  className="flex flex-col items-center">

        <div className="mb-2">
          <Image
            src="/person-circle-side.png"
            alt="crossflex-logo"
            width={50}
            height={100}
            priority
          />
        </div>
      
        <div className="text-center mb-4 ">
          {session ? (
            <div>
              <div >{session.user?.name}</div>
              <div>{session.user?.email}</div>
            </div>
          ) : (
            <div className="text-sm">Please log in</div>
          )}
        </div>
      

        </div>
        <ul>
          {menuItems.map((cat, index) => (
            <li key={index}>
              <ul>
                {cat.list.map((item) => (
                  <li key={item.path}>
                    {item.icon}
                    <a href={item.path}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div>
          <LogoutButton />
        </div>
      </nav>
    </div>
  );
}
