"use client"

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <button onClick={handleLogout}>Sair</button>
  );
}
