import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { Hero } from "./Hero";

export const HeroList = ({ publisher = "Marvel Comics" }) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};
