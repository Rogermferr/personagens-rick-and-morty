import { useState, useEffect } from "react";
import { Characters } from "./components/Characters";
import { api } from "./services/api";
import { AppStyle } from "./styles";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadCharacters() {
      try {
        const response = await api.get("character/", {
          params: {
            page: currentPage,
          },
        });
        setCharactersList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    loadCharacters();
  }, [currentPage]);

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function previusPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <AppStyle>
      <h1>Personagens de Rick and Morty</h1>
      <button onClick={previusPage}>Página anterior</button>
      <button onClick={nextPage}>Próxima página</button>
      <Characters charactersList={charactersList} />
    </AppStyle>
  );
}

export default App;
