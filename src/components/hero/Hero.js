import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const Hero = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  const charactersArray = characters.split(",");
  const imgSrc = `/assets/img/${id}.jpg`;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return hero ? (
    <div className="flex flex-wrap justify-center gap-2 p-1 overflow-hidden bg-gray-100">
      <div className="relative">
        <img src={imgSrc} alt={superhero} className="rounded" />
        <button
          onClick={handleClick}
          className="absolute right-4 bottom-4 shadow hover:border-dotted button border-gray-300 text-gray-300"
        >
          Back
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-2 overflow-hidden">
        <h1 className="text-2xl font-bold">{superhero}</h1>
        <div className="bg-gray-200 p-2 rounded">
          <h2 className="text-xl font-semibold mb-2">Alter Ego</h2>
          <span className="bg-gray-300 rounded px-2 py-1">{alter_ego}</span>
        </div>

        <div className="bg-gray-200 p-2 rounded">
          <h2 className="text-xl font-semibold mb-2">Publisher</h2>
          <span className="bg-gray-300 rounded px-2 py-1">{publisher}</span>
        </div>

        <div className="bg-gray-200 p-2 rounded">
          <h2 className="text-xl font-semibold mb-2">First Appearance</h2>
          <span className="bg-gray-300 rounded px-2 py-1">{first_appearance}</span>
        </div>

        <div className="bg-gray-200 p-2 rounded">
          <h2 className="text-xl font-semibold mb-2">Characters</h2>
          <div className="inline-flex flex-wrap gap-2 mb-4">
            {charactersArray.map((char) => (
              <span key={char} className="bg-gray-300 rounded px-2 py-1">
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={-1} replace={true} />
  );
};
