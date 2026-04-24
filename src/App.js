import PostsFetch from "./PostsFetch";
import UsersAxios from "./UsersAxios";
import "./App.css";

function App() {
  return (
    <main className="app">
      <header className="hero">
        <h1>Consommation d’API avec React</h1>
        <p>
          Exemple pratique utilisant Fetch et Axios pour récupérer des données
          depuis une API externe.
        </p>
      </header>

      <PostsFetch />
      <UsersAxios />
    </main>
  );
}

export default App;