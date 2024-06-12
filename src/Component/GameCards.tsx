import { Link } from "react-router-dom";
import getCropImage from "../service/image-url";
import CriticScore from "./CriticScore";

import Skeleton from "./Skeleton";
import { Game } from "../hooks/useGames";
import ProgressRadial from "./ProgressRadial";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <>
      {game ? (
        <div
          className="card w-64 text-wrap bg-neutral-950 shadow-xl"
          key={game.id}
        >
          <figure>
            <img
              className="object-cover"
              src={getCropImage(game.background_image)}
              alt={`${game.name} Background`}
            />
          </figure>
          <div className="card-body" key={game.id}>
            <h2 className="card-title text-[16px] font-extrabold text-left w-full">
              <Link to={`/games/${game.slug}`}>{game.name}</Link>
            </h2>

            <div className="grid grid-cols-2 text-wrap text-sm">
              {game.genres.map((g) => (
                <p className="text-wrap" key={g.id}>
                  {g.name}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <ProgressRadial value={game.rating} /> {game.released}
            </div>
            <div className="grid grid-cols-2 justify-center  text-sm text-gray-500">
              {game?.parent_platforms?.map((p) => (
                <span className="text-wrap" key={p.platform.id}>
                  {p.platform.name}
                </span>
              ))}
            </div>
            {game.metacritic && <CriticScore score={game.metacritic} />}
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default GameCards;
