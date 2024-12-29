"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-6 space-y-8 bg-gray-cf_gray1 rounded-2xl md:flex-row md:space-y-0 md:space-x-8">
        <div className="flex flex-col justify-center p-8 md:p-14 md:w-1/2">
          <form>
            <h2 className="mb-3 text-3xl font-bold text-blue-cf_blue">Bem-Vindo</h2>
            <p className="font-light text-gray-400 mb-8">
              Bem-vindo de volta!, Por favor insira seus dados.
            </p>
            <div className="py-4">
              <label
                htmlFor="email"
                className="mb-2 text-md text-blue-cf_blue font-semibold"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full p-2 border-4 border-blue-cf_blue rounded-md placeholder:font-light
                 placeholder:text-gray-500 focus:border-4 focus:border-blue-cf_blue focus:outline-none"
                name="email"
                autoComplete="email"
              />
            </div>

            <div className="py-4">
              <label
                htmlFor="password"
                className="mb-2 text-md text-blue-cf_blue font-semibold"
              >
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 border-4 border-blue-cf_blue rounded-md placeholder:font-light
                   placeholder:text-gray-500 focus:border-4 focus:border-blue-cf_blue focus:outline-none"
                  name="password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-4 text-blue-cf_blue"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex justify-between w-full py-4">
              <div className="mr-24 flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  className="mr-2 md:mt-2"
                />
                <label htmlFor="remember" className="text-xs md:text-base mt-2 ">
                  Lembrar
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-xs md:text-base text-blue-cf_blue mt-2 flex items-center"
                prefetch={true}
              >
                Esqueceu a senha?
              </Link>
            </div>

            <button
              className="w-full bg-blue-cf_blue text-white-100 text-xl font-semibold p-4 rounded-2xl mb-6 hover:bg-blue-950 
             disabled:bg-blue-cf_blue disabled:cursor-not-allowed"
              type="submit"
            >
              <div className="flex justify-center items-center space-x-2 text-white-cf_white">
                Entrar
              </div>
            </button>
          </form>
        </div>

        <div className="md:w-1/2">
          <div className="relative hidden md:block">
            <Image
              src="/crossflex-logo.png"
              alt="crossflex-logo"
              width={500}
              height={100}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}