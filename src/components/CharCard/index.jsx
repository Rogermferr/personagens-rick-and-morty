import { CharAliveCardStyle, CharCardStyle } from "./style";

export function CharCard({ character }) {
  return (
    <>
      {character.status === "Alive" ? (
        <CharAliveCardStyle>
          <h2>{character.name.substring(0, 15)}</h2>
          <img src={character.image} alt="" />
          <p>Status: Vivo</p>
        </CharAliveCardStyle>
      ) : (
        <CharCardStyle>
          <h2>{character.name.substring(0, 15)}</h2>
          <img src={character.image} alt="" />
          <p>
            Status: {character.status === "Dead" ? "Morto" : "Desconhecido"}
          </p>
        </CharCardStyle>
      )}
    </>
  );
}
