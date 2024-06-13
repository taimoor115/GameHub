import { Link, useNavigate } from "react-router-dom";

import getCropImage from "../service/image-url";
import { Game } from "../type";

interface Props {
  games: Game[];
  name: string;
}

const ListCarousel = ({ games, name }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/games");
  };
  return (
    <>
      <div className="flex justify-between m-6 items-center ">
        <h1 className="font-bold text-white text-lg ">{name}</h1>
        <button
          onClick={handleClick}
          className="btn text-sm text-white btn-ghost"
        >
          View More
        </button>
      </div>
      <div className="m-6 rounded-lg flex scroll-smooth overflow-x-auto whitespace-nowrap ">
        {games.map((game) => (
          <div key={game.id} className="relative group">
            <div className="w-52 h-52 lg:w-72 lg:h-60 md:w-72 md:h-72 overflow-hidden">
              <Link to={`/detail/games/${game.slug}`}>
                <img
                  className="w-full h-full object-cover transition duration-700 hover:opacity-20 opacity-100"
                  src={getCropImage(game.background_image)}
                  alt={game.name}
                />
              </Link>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0  transition duration-700  group-hover:opacity-100">
              <span className="px-4 py-8 text-white text-3xl lg:text-4xl md:text-4xl text-wrap font-bold">
                <Link to={`/detail/games/${game.slug}`}></Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListCarousel;
