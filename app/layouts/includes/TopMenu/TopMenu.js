import UserMenu from "./UserMenu";
import PlatformLink from "./PlatformLink";
import { useUser } from "@/app/context/user";

function TopMenu() {
  const user = useUser();

  return (
    <div id="TopMenu" className="bg-amber-400">
      <div className="flex items-center justify-start sm:justify-between w-full mx-auto h-14 max-w-[80rem] md:px-10">
        <ul
          id="TopMenuLeft"
          className="flex items-center md:text-lg text-sm font-bold text-gray-800 sm:px-2 h-8">
          <PlatformLink
            href="https://www.ifood.com.br/"
            alt="ifood"
            src="/images/ifood-43.png"
          />
        </ul>
        <ul
          id="TopMenuRight"
          className="flex items-center text-gray-800 px-2 h-8 z-20">
          <UserMenu
            user={user}
            onSignOut={() => {
              user.signOut();
              setIsMenu(false);
              setError("");
              window.location.reload();
            }}
          />
        </ul>
      </div>
    </div>
  );
}

export default TopMenu;
