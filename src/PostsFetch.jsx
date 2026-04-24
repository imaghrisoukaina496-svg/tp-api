import { useEffect, useState } from "react";

function PostsFetch() {
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState("");

  const chargerArticles = async () => {
    setChargement(true);
    setErreur("");

    try {
      const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!reponse.ok) {
        throw new Error("Impossible de récupérer les articles");
      }

      const donnees = await reponse.json();
      setArticles(donnees.slice(0, 8));
    } catch (error) {
      setErreur(error.message);
    } finally {
      setChargement(false);
    }
  };

  useEffect(() => {
    chargerArticles();
  }, []);

  return (
    <section className="bloc">
      <div className="bloc-header">
        <h2>Articles avec Fetch</h2>
        <button onClick={chargerArticles}>Recharger</button>
      </div>

      {chargement && <p className="info">Chargement des articles...</p>}
      {erreur && <p className="erreur">{erreur}</p>}

      <div className="grid">
        {articles.map((article) => (
          <div className="carte" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostsFetch;