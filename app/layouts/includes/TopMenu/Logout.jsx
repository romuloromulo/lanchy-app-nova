import { useUser } from "@/app/context/user";

function Logout() {
  const user = useUser();

  const handleSignOut = () => {
    user.signOut();
    setIsMenu(false);
    setError("");
    window.location.reload(); // Adicione sua lógica de logout aqui
  };

  return (
    <div
      className="flex items-center  hover:underline   
      duration-100 
      cursor-pointer text-sm mx-4 font-semibold transform hover:scale-115 transition-transform"
      onClick={handleSignOut}>
      Logout
    </div>
  );
}

export default Logout;
