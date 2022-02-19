import heroes from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = new Set(heroes.map((hero) => hero.publisher));
  if (!validPublishers.has(publisher)) {
    return [];
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};
