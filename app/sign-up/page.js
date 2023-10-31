"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useState, useRef } from "react";
import MainLayout from "../layouts/MainLayout";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const supabase = createClientComponentClient();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (typeof window !== "undefined") {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      console.log(data, error);
    } else {
      console.log("falhou");
    }

    console.log("Submitted:", { email, password });
  }

  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
        <div className="bg-amber-400 h-auto pb-12 pt-10 px-10 border-2 rounded-md shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6">Criar Conta</h1>
          <form
            onSubmit={handleSubmit}
            id="credenciais"
            className="flex flex-col mx-auto justify-center items-center">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">
                E-mail
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={handleEmailChange}
                required
                className="h-10 w-64 mt-2 p-5 rounded-md"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="senha" className="font-bold">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
                minLength={6}
                maxLength={10}
                className="h-10 w-64 mt-2 p-5 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="mt-5 bg-red-500 text-white hover:bg-transparent border-2 border-red-500  hover:border-black py-2 px-12 rounded-md hover:text-black font-bold text-lg duration-300 w-full">
              Criar
            </button>
            <p className="text-sm flex mt-2">
              Já possui uma conta?
              <Link href="/auth">
                <span className="ml-1 text-red-500 hover:underline">
                  Faça login!
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
