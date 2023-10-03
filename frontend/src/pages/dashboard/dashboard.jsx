import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import getData from "../../helpers/getData";
import postData from "../../helpers/postData";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user } = useUser();

  const [isVaccination, setIsVaccination] = useState(false);
  const [vaccinations, setVaccinations] = useState([]);

  const fetchVaccinationInfo = async () => {
    const response = await getData(
      `${import.meta.env.VITE_BACKEND_URL}/vaccination/${user.n_id}`
    );
    if (response.data.length > 0) {
      setIsVaccination(true);
      setVaccinations(response.data);
    }
  };

  const createVaccination = async () => {
    const response = await postData(
      `${import.meta.env.VITE_BACKEND_URL}/vaccination/`,
      { n_id: user.n_id }
    );
    if (response.data.length > 0) {
      setIsVaccination(true);
      setVaccinations(response.data);
    }
  };

  useEffect(() => {
    fetchVaccinationInfo();
  }, []);

  return (
    <div>
      <h1 className="px-6 mt-12 text-5xl font-semibold border-b border-gray-300">
        Dashboard
      </h1>
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-3xl">Name: {user.name}</h1>
        <h1 className="text-2xl">NID: {user.n_id}</h1>
        <h1 className="text-2xl">Address: {user.address}</h1>

        <div className="mt-16 text-xl">
          {isVaccination ? (
            <div>
              <table className="border-black border-1">
                <thead>
                  <tr>
                    <th className="border border-black">No</th>
                    <th className="border border-black">Vaccination Date</th>
                  </tr>
                </thead>
                <tbody>
                  {vaccinations ? (
                    vaccinations.map((vaccination, index) => (
                      <tr key={index}>
                        <td className="border border-black">{index}</td>
                        <td className="border border-black">
                          {vaccination.vaccination_date}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div></div>
                  )}
                </tbody>
              </table>
              <div className="mt-6">
                <button
                  className="-ml-12 px-4 py-2 text-white bg-[#033D6C] border-gray-700 shadow-lg border-1 rounded-md"
                  onClick={createVaccination}
                >
                  + Get More Vaccination Date
                </button>
              </div>
            </div>
          ) : (
            <div className="">
              <button
                className="px-4 py-2 text-white bg-[#033D6C] border-gray-700 shadow-lg border-1 rounded-md"
                onClick={createVaccination}
              >
                + Get First Vaccination Date
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
