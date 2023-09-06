"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MainLayout from "../layouts/MainLayout";

export default function AuthPage() {
  const supabase = createClientComponentClient();

  return (
    <>
      <MainLayout>
        <div id="AuthPage" className="w-full min-h-screen bg-white">
          <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
            Login / Register
          </div>

          <div className="max-w-[400px] mx-auto px-2">
            <Auth
              onlyThirdPartyProviders
              redirectTo={`${window.location.origin}/auth/callback`}
              supabaseClient={supabase}
              providers={["google"]}
              appearance={{ theme: ThemeSupa }}
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
