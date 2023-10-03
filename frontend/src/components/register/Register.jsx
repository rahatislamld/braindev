import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import postData from "../../helpers/postData";

export default function Register({ toggle, setError }) {
  const navigateTo = useNavigate();
  const nameRef = useRef();
  const passwordRef = useRef();
  const nidRef = useRef();
  const addressRef = useRef();

  const { setUser } = useUser();

  async function onSubmitHandler() {
    try {
      const newUserData = {
        name: nameRef.current.value,
        n_id: nidRef.current.value,
        address: addressRef.current.value,
        password: passwordRef.current.value,
      };

      const response = await postData(
        `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
        newUserData
      );

      setUser(response.data.data);
      navigateTo("/");
    } catch (error) {
      setError(error.response.data);
    }
  }
  return (
    <form className="flex flex-col w-1/3 gap-4">
      <div className="flex items-center justify-center py-2 my-6">
        <h1 className="text-3xl font-semibold">Sign Up</h1>
      </div>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="w-full p-4 text-xl text-center border-b border-gray-300 rounded-md focus:outline-none"
        ref={nameRef}
      />
      <input
        type="text"
        placeholder="Enrter Your NID Number"
        className="w-full p-4 text-xl text-center border-b border-gray-300 rounded-md focus:outline-none"
        ref={nidRef}
      />
      <input
        type="text"
        placeholder="Enter Your Address"
        className="w-full p-4 text-xl text-center border-b border-gray-300 rounded-md focus:outline-none"
        ref={addressRef}
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        className="w-full p-4 text-xl text-center border-b border-gray-300 rounded-md focus:outline-none"
        ref={passwordRef}
      />

      <button
        type="submit"
        className="inline-block p-4 text-xl bg-[#033D6C] rounded-md hover:bg-[#033D6C] hover:text-white"
        onClick={(event) => {
          event.preventDefault();
          onSubmitHandler();
        }}
      >
        Submit
      </button>
      <span>
        {"Already have an account ? "}
        <button
          className="text-blue-400 underline"
          onClick={(event) => {
            event.preventDefault();
            toggle((prev) => !prev);
          }}
        >
          Sign in
        </button>
      </span>
    </form>
  );
}
