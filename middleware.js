import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  console.log(req.nextUrl, "req aquir");
  const supabase = createMiddlewareClient({ req, res });
  const { data } = await supabase.auth.getSession();

  if (data?.session && req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (
    !data?.session &&
    (req.nexUrl.pathname.startsWith("/checkout") ||
      req.nexUrl.pathname.startsWith("/success") ||
      req.nexUrl.pathname.startsWith("/orders") ||
      req.nexUrl.pathname.startsWith("/address"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}
// middleware();
