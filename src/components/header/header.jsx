import { Link, useLocation } from "react-router-dom";
import HeaderMenu from "../header-menu/HeaderMenu";
import useUser from "../../hooks/useUser";

export default function Header() {
  const location = useLocation();
  const { user } = useUser();

  return (
    <header className="flex flex-row items-center justify-between w-full pl-8 pr-8 h-14 bg-[#033D6C]">
      <Link to="/" className="font-mono text-2xl font-semibold text-white">
        VMS
      </Link>
      <div className="flex flex-row h-full gap-5">
        <HeaderMenu />
        <Link
          to="/auth"
          className={`flex flex-row items-center h-full pl-6 pr-6 border  hover:border-black hover:bg-black ${
            location.pathname === "/auth"
              ? "bg-black border-black"
              : "border-white"
          }`}
        >
          <p className={`font-mono font-semibold text-center text-white`}>
            {user.name !== undefined && user.name !== "" ? user.name : "Guest"}
          </p>
        </Link>
      </div>
    </header>
  );
}
