"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import MainLayout from "../layouts/MainLayout";

export default function AuthPage() {
  const supabase = createClientComponentClient();
  let reference;
  if (typeof window !== "undefined") {
    reference = `${window.location.origin}/auth/callback`;
  }
  return (
    <>
      <MainLayout>
        <div
          id="AuthPage"
          className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
          <div className="bg-amber-400 h-56 border-2 border-black flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center p-5 border-b-gray-300 font-bold ">
              Faça login com sua conta Google.
            </div>

            <div className="max-w-[400px] mx-auto px-2">
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
    </>
  );
}
