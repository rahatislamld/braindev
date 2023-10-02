import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import postData from "../../helpers/postData";

export default function Login({ toggle, setError }) {
  const navigateTo = useNavigate();
  const nidRef = useRef();
  const passwordRef = useRef();

  const { setUser } = useUser();

  async function onSubmitHandler() {
    try {
      const userData = {
        n_id: nidRef.current.value,
        password: passwordRef.current.value,
      };

      console.log("ok");
      const response = await postData(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        userData
      );
      const user = response.data.data;
      setUser(user);
      navigateTo("/");
    } catch (error) {
      setError(error.response.data);
    }
  }

  return (
    <form className="flex flex-col w-1/3 gap-4">
      <input
        type="text"
        placeholder="Enrter Your NID Number"
        className="w-full p-4 text-xl text-center border-b border-gray-300 rounded-md focus:outline-none"
        ref={nidRef}
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        className="w-full p-4 text-xl text-center border-b border-gray-300 rounded-md focus:outline-none"
        ref={passwordRef}
      />
      <button
        type="submit"
        className="inline-block p-4 text-xl  bg-[#033D6C] rounded-md hover:bg-[#033D6C] hover:text-white"
        onClick={(event) => {
          event.preventDefault();
          onSubmitHandler();
        }}
      >
        Submit
      </button>
      <span>
        {"Don't have an account ? "}
        <button
          className="text-blue-400 underline"
          onClick={(event) => {
            event.preventDefault();
            toggle((prev) => !prev);
          }}
        >
          Create an account
        </button>
      </span>
    </form>
  );
}
