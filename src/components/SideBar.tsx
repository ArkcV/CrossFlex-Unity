import { BsHouse } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { FaRegPenToSquare } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { LuBookOpen, LuFileCheck } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TfiWallet } from "react-icons/tfi";
import { getServerSession } from "next-auth"

import Image from "next/image";
import LoginButton from "./LogoutButton";

const menuItems = [
  {
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <RxDashboard /> },
      { title: "Profile", path: "/dashboard/profile", icon: <BsHouse /> },
      { title: "Registration", path: "/dashboard/registration", icon: <FaRegPenToSquare /> },
      { title: "Plan", path: "/dashboard/plan", icon: <LuFileCheck /> },
      { title: "Payment", path: "/dashboard/payment", icon: <TfiWallet /> },
      { title: "Members", path: "/dashboard/members", icon: <HiOutlineUsers /> },
      { title: "Inventory", path: "/dashboard/inventory", icon: <MdOutlineInventory2 /> },
      { title: "Coaches", path: "/dashboard/coaches", icon: <CgGym /> },
      { title: "Help", path: "/dashboard/help", icon: <LuBookOpen /> },
    ],
  },
];


export default async function Sidebar () {

  const session = await getServerSession();

  return (
    <main>
      <nav>
        <div>
          <Image
            src="/user-avatar.jpeg"
            alt="user-avatar"
            width={75}
            height={100}
                      />
        </div>
        <span>{session?.user?.name}</span>
      </nav>
      <ul>
        {menuItems.map((cat, index) => (
          <li key={index}>
            <ul>
              {cat.list.map((item) => (
                <li key={item.path}>
                  {item.icon}
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <LoginButton/>
    </main>
  );
} 
