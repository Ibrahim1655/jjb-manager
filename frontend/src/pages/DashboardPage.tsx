import { useEffect, useState } from "react";
import type { Licencie } from "../types/Licencie";
import { getLicencies } from "../api/licencies";

function DashboardPage() {
  const [licencie, setLicencie] = useState<Licencie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getLicencies();
      setLicencie(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>Liste des licenciés</div>
      {licencie.map((l) => (
        <ul key={l.id}>
          <li>{l.id}</li>
          <li>{l.ceinture}</li>
          <li>{l.poids}</li>
          <li>{l.cotisationPaid ? "Payée" : "Non payée"}</li>
        </ul>
      ))}
    </div>
  );
}

export default DashboardPage;
