export default function Instruction() {
  return (
    <div>
      <h1 className="px-6 mt-12 text-5xl font-semibold border-b border-gray-300">
        Vaccination Intruction
      </h1>
      <h1 className="px-6 py-6 mx-6 mt-12 text-lg border-2 shadow-lg ">
        <b>Step 1:</b> Users can apply for the vaccine after register into
        vaccine management system by input name, n_id, address and password then
        eligibility criteria. Then User get a date for vaccination. User can
        apply for multiple vaccination and show dates of vaccination.
      </h1>
      <h1 className="px-6 py-6 mx-6 mt-12 text-lg border-2 shadow-lg ">
        <b>Step 2:</b> Once the user's vaccine application is approved, the
        system assigns a vaccination date. This date should be within the
        required timeframe after the first dose. The vaccination date can be
        generated using the getVaccinationDate function we discussed earlier,
        and the details can be stored in a Vaccination schema.
      </h1>
      <h1 className="px-6 py-6 mx-6 mt-12 text-lg border-2 shadow-lg ">
        <b>Step 3:</b> When a user requests a vaccine certificate, the system
        retrieves the user's vaccination records from the Vaccination record and
        then and generates a certificate with the necessary details. This
        certificate will update after each new vaccination
      </h1>
    </div>
  );
}
