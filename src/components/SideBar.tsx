"use client"

import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { BsBook, BsBox2, BsFileEarmarkCheck, BsHouse, BsPencilSquare, BsPeople, BsWallet2 } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import LogoutButton from "./LogoutButton";

interface SideBarProps {
  session: Session | null;
}

const menuItems = [
  {
    list: [
      { title: "Inicio", path: "/dashboard", icon: <RxDashboard /> },
      { title: "Perfil", path: "/dashboard/profile", icon: <BsHouse /> },
      { title: "Registrar", path: "/dashboard/registration", icon: <BsPencilSquare /> },
      { title: "Planos", path: "/dashboard/plan", icon: <BsFileEarmarkCheck /> },
      { title: "Inscrição", path: "/dashboard/payment", icon: <BsWallet2 /> },
      { title: "Alunos", path: "/dashboard/members", icon: <BsPeople /> },
      { title: "Inventário", path: "/dashboard/inventory", icon: <BsBox2 /> },
      { title: "Treinadores", path: "/dashboard/coaches", icon: <CgGym /> },
      { title: "Ajuda", path: "/dashboard/help", icon: <BsBook /> },
    ],
  },
];

export default function Sidebar({ session }: SideBarProps) {

  const [activeLink, setActiveLink] = useState<string>("/dashboard");

  return (
    <nav className="w-16 md:w-64 fixed left-0 top-0 z-10 h-screen border pt-8 px-4 bg-blue-cf_blue">
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <Image
            src="/person-circle-side.png"
            alt="crossflex-logo"
            width={50}
            height={100}
            priority
          />
        </div>
        <>
          {session ? (
            <div className="md:flex flex-col items-center text-white-cf_white hidden">
              <span className="text-base font-bold">{session.user?.name}</span>
              <span className="text-xs">{session.user?.email}</span>
            </div>
          ) : (
            <p>Please log in</p>
          )}
        </>
      </div>
      <ul>
        {menuItems.map((cat, index) => (
          <li key={index}>
            <ul className="mt-10 space-y-2">
              {cat.list.map((item) => (
                <li
                  key={item.path}
                  onClick={() => setActiveLink(item.path)}
                  className={`rounded-md py-2 text-white-cf_white hover:bg-white-cf_white hover:text-blue-cf_blue hover:font-bold 
                  ${activeLink === item.path ? 'bg-white-cf_white text-blue-950 font-bold' : ''}`}>
                  <Link href={item.path} className="flex items-center justify-center md:justify-start md:space-x-3">
                    <span className="md:ml-4 text-lg">{item.icon}</span>
                    <span className="hidden md:flex text-sm">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="w-full absolute bottom-5 left-0 p-y-2 cursor-pointer text-center">
        <LogoutButton />
      </div>
    </nav>
  );
}
