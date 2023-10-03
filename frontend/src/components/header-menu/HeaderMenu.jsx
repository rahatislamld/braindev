import { Link, useLocation } from "react-router-dom";

export default function HeaderMenu() {
  const location = useLocation();

  return (
    <div className="flex flex-row items-center justify-start h-full">
      <Link
        to="/"
        className={`flex flex-row items-center ${
          location.pathname === "/" && "border-b-4 border-green-500"
        } h-full pl-2 pr-2 text-center hover:border-b-4 hover:border-green-500`}
      >
        <p className="font-mono font-semibold text-white">Home</p>
      </Link>
      <Link
        to="/dashboard"
        className={`flex flex-row items-center ${
          location.pathname === "/dashboard" && "border-b-4 border-green-500"
        } h-full pl-2 pr-2 text-center hover:border-b-4 hover:border-green-500`}
      >
        <p className="font-mono font-semibold text-white">Dashboard</p>
      </Link>
      <Link
        to="/instruction"
        className={`flex flex-row items-center ${
          location.pathname === "/instruction" && "border-b-4 border-green-500"
        } h-full pl-2 pr-2 text-center hover:border-b-4 hover:border-green-500`}
      >
        <p className="font-mono font-semibold text-white">Instruction</p>
      </Link>
      <Link
        to="/certificate"
        className={`flex flex-row items-center ${
          location.pathname === "/certificate" && "border-b-4 border-green-500"
        } h-full pl-2 pr-2 text-center hover:border-b-4 hover:border-green-500`}
      >
        <p className="font-mono font-semibold text-white">Certificatertre</p>
      </Link>
    </div>
  );
}
