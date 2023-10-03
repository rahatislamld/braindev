import useUser from "../../hooks/useUser";
import getData from "../../helpers/getData";
import postData from "../../helpers/postData";
import { useEffect, useState } from "react";


export default function Certificate() {
  const { user } = useUser();

  const [isCertificate, setIsCertificate] = useState(false);
  const [vaccinations, setVaccinations] = useState(null);

  const fetchVaccinationInfo = async () => {
    const response = await getData(
      `${import.meta.env.VITE_BACKEND_URL}/certificate/${user.n_id}`
    );
    console.log("Certificate", response.data);
    if (response.data.vaccinations) {
      setIsCertificate(true);
      setVaccinations(response.data.vaccinations);
    }
  };
  const createCertificate = async () => {
    const response = await postData(
      `${import.meta.env.VITE_BACKEND_URL}/certificate/`,
      { name: user.name, n_id: user.n_id }
    );
    setIsCertificate(true);
    setVaccinations(response.data.vaccinations);
  };

  useEffect(() => {
    fetchVaccinationInfo();
  }, []);

  return (
    <div className="flex flex-col justify-center my-16">
      <div className="my-3 border-b">
        <h1 className="px-6 py-4 text-4xl text-center">
          Certificate of Vaccination
        </h1>
      </div>
      {isCertificate ? (
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-lg">
              This is certified that <b>{user.name}</b>
            </h1>
            <h1 className="text-lg">
              who's National ID is: {user.n_id} successfully complete
              vaccination
            </h1>
          </div>
          <div className="mt-5">
            <h1 className="text-md">
              Here are the list of Vaccine Name and Date of Vaccination
            </h1>
            <div className="mt-2 text-xl">
              <div>
                <table className="border-black border-1">
                  <thead>
                    <tr>
                      <th className="border border-black">Vaccine Name</th>
                      <th className="border border-black">Vaccination Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vaccinations &&
                      vaccinations.map((vaccination, index) => (
                        <tr key={index}>
                          <td className="border border-black">
                            {vaccination.vaccine_name}
                          </td>
                          <td className="border border-black">
                            {vaccination.vaccination_date}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="mt-6">
                  <button
                    className="px-4 py-2 text-white bg-green-500 border-gray-700 rounded-md shadow-lg border-1"
                    onClick={createCertificate}
                  >
                    + Update Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <button
            className="px-4 py-2 text-white bg-green-500 border-gray-700 rounded-md shadow-lg border-1"
            onClick={createCertificate}
          >
            + Create Certificate
          </button>
        </div>
      )}
    </div>
  );
}
