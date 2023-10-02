import { useState } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";

import CrossSvg from "../../assets/cross-white.svg";

export default function Auth() {
  const [hasAccount, setHasAccount] = useState(false);
  const [authError, setAuthError] = useState(null);

  return (
    <div className="flex flex-col items-center h-full mt-20">
      {hasAccount ? (
        <Login toggle={setHasAccount} setError={setAuthError} />
      ) : (
        <Register toggle={setHasAccount} setError={setAuthError} />
      )}
      {authError && (
        <div className="flex flex-row justify-between w-1/2 gap-6 pl-5 pr-5 mt-4 text-white bg-red-500 rounded-md">
          <h1>{authError}</h1>
          <button
            className="h-7"
            onClick={() => {
              setAuthError(null);
            }}
          >
            <img src={CrossSvg} alt="Close" className="h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
