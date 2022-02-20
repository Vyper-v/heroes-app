import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name = "" } = queryString.parse(location.search);

  const [{ searchHero }, handleInputChange, reset] = useForm({
    searchHero: name,
  });
  const heroes = useMemo(() => getHeroesByName(name), [name]);
  const heroesCards = heroes.map((hero, i) => <HeroCard key={i} {...hero} />);

  const handleSearchHero = (e) => {
    e.preventDefault();
    navigate(`?name=${searchHero}`);
  };

  return (
    <div>
      <form
        onSubmit={handleSearchHero}
        className="flex justify-between gap-2 max-w-md mx-auto bg-gray-50 shadow-lg py-5 px-6 rounded mt-4"
      >
        <input
          name="searchHero"
          type="text"
          onChange={handleInputChange}
          value={searchHero}
          placeholder="Search a hero..."
          className="input"
        />
        <input
          type="submit"
          className="button active:bg-slate-600 active:text-gray-50"
          value="Search"
        />
      </form>
      <div className="shadow py-5 px-6 rounded">
        {heroesCards.length > 0 && heroesCards}
        {heroesCards.length === 0 && name !== "" && (
          <p className="text-center">
            No Superhero found for{" "}
            <strong className="font-semibold">{name}</strong>😔
          </p>
        )}
      </div>
    </div>
  );
};
