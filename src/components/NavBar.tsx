"use client";

import { Session } from "next-auth";
import { usePathname } from "next/navigation";

interface NavBarProps {
  session: Session | null;
}

// Mapeamento de rotas para títulos
const routeTitles: { [key: string]: string } = {
  "/dashboard": "Inicio",
  "/dashboard/profile": "Perfil"
};

export default function NavBar({ session }: NavBarProps) {

  const pathname = usePathname();
  const title = routeTitles[pathname] || "Page";

  return (
    <div>
      <div>{title}</div>
      {session ? (
        <div>{session.user?.name}</div>
      ) : (
        <div>Please log in</div>
      )}
    </div>
  );
}
