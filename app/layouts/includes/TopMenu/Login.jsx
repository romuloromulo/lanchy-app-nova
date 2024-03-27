import Link from "next/link";

function Login() {
  return (
    <Link href="/auth">
      <div className="flex items-center hover:underline duration-100 cursor-pointer text-sm mx-4 font-semibold transform hover:scale-115 transition-transform">
        Login
      </div>
    </Link>
  );
}

export default Login;
