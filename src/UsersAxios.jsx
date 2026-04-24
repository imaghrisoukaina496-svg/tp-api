import { useEffect, useState } from "react";
import axios from "axios";

function UsersAxios() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState("");

  const chargerUtilisateurs = async () => {
    setChargement(true);
    setErreur("");

    try {
      const reponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUtilisateurs(reponse.data);
    } catch (error) {
      setErreur("Erreur lors du chargement des utilisateurs");
    } finally {
      setChargement(false);
    }
  };

  useEffect(() => {
    chargerUtilisateurs();
  }, []);

  return (
    <section className="bloc">
      <div className="bloc-header">
        <h2>Utilisateurs avec Axios</h2>
        <button onClick={chargerUtilisateurs}>Actualiser</button>
      </div>

      {chargement && <p className="info">Chargement des utilisateurs...</p>}
      {erreur && <p className="erreur">{erreur}</p>}

      <div className="grid">
        {utilisateurs.map((user) => (
          <div className="carte user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Email : {user.email}</p>
            <p>Ville : {user.address.city}</p>
            <p>Entreprise : {user.company.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UsersAxios;