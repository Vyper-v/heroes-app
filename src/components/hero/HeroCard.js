import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imgSrc = `/assets/img/${id}.jpg`;
  const charactersArray = characters.split(",");
  return (
    <div className="max-w-lg overflow-hidden shadow-md rounded">
      <Link to={`/hero/${id}`} className="w-full">
        <img className="inherit-all" src={imgSrc} alt={superhero} />
      </Link>
      <div className="px-6 py-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl ">{superhero}</span>
          <span className="text-lg">{publisher}</span>
        </div>
        <span className="text-base">{alter_ego}</span>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {first_appearance}
          </span>
          {alter_ego !== characters &&
            charactersArray.map((char, i) => (
              <span
                key={i}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {char}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};
