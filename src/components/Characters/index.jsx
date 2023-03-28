import { CharCard } from "../CharCard";
import { CharactersStyle } from "./style";

export function Characters({ charactersList }) {
  return (
    <CharactersStyle>
      {charactersList.map((character) => (
        <CharCard character={character} key={character.id} />
      ))}
    </CharactersStyle>
  );
}
