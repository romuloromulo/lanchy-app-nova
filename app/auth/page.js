"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";
import { useState } from "react";
import isEmailValid from "../hooks/isEmailValid";
// import { useRouter } from "next/navigation";

import MainLayout from "../layouts/MainLayout";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emailValidation, setEmailValidation] = useState("");
  const supabase = createClientComponentClient();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function signInWithEmail(e) {
    e.preventDefault();
    // console.log("submitendo!");
    if (!isEmailValid(email)) {
      setEmailValidation("Formato de e-mail inválido");
      return; // Impede o envio do formulário se o e-mail for inválido
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setError("Usuário ou senha inválidos. Tente novamente.");
    }

    if (!error) {
      // Registro bem-sucedido, redirecione o usuário para a página desejada
      setEmailValidation("");
      setError("");
      window.location.reload();
    }
    console.log("DATA SIGNUP:", data, "ERRO SIGNUP:", error);
  }

  let reference;

  if (typeof window !== "undefined") {
    reference = `${window.location.origin}/auth/callback`;
  }

  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
        <div className="bg-amber-400 h-auto py-5 border-2 rounded-md shadow-lg flex flex-col items-center justify-center">
          <form
            id="credenciais"
            onSubmit={signInWithEmail}
            className="flex flex-col mx-auto justify-center items-center">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">
                E-mail
              </label>
              <input
                id="email"
                type="text"
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
                onChange={handlePasswordChange}
                required
                className="h-10 w-64 mt-2 p-5 rounded-md"
              />
              <p className="text-sm mt-2 ml-1 text-amber-600">
                Esqueceu sua senha?
              </p>
            </div>
            <p className=" text-red-600 text-sm mt-1"> {error}</p>
            <button
              type="submit"
              className="mt-5 bg-red-500 text-white hover:bg-transparent border-2 border-red-500  hover:border-black py-2 px-12 rounded-md hover:text-black font-bold text-lg duration-300">
              Login
            </button>
          </form>
          <div>
            <p className="text-sm flex mt-2">
              Não possui conta?{" "}
              <Link href="/sign-up">
                <span className="ml-1 text-red-500 hover:underline">
                  Cadastre-se agora!
                </span>
              </Link>
            </p>
          </div>
          <div className="w-full flex items-center justify-center p-5 border-b-gray-300 font-bold">
            Ou faça login com sua conta Google.
          </div>
          <div className="max-w-[400px] mt-[-7%] mx-auto px-2">
            <Auth
              onlyThirdPartyProviders
              redirectTo={reference}
              supabaseClient={supabase}
              providers={["google"]}
              appearance={{ theme: ThemeSupa }}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
