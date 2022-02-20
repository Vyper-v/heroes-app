import heroes from "../data/heroes";
export const getHeroesByName = (searchHero = "") => {
  searchHero = searchHero.replaceAll(' ', '');
  if (searchHero === "") return [];
  return heroes.filter((hero) =>
    hero.superhero.replaceAll(' ', '').match(new RegExp(searchHero, "i"))
  );
};
