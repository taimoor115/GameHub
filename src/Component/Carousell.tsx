import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import useGames from "../hooks/useGames";
import Loader from "./Loader";

const Carousell = () => {
  const { data, isLoading } = useGames();
  return (
    <div className="flex justify-center items-center">
      {isLoading && <Loader />}
      <Carousel
        autoFocus={true}
        autoPlay
        infiniteLoop={true}
        interval={4000}
        emulateTouch={true}
        transitionTime={4000}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={true}
        useKeyboardArrows={true}
      >
        {data.map((game) => (
          <Link to={`/games/${game.slug}`} key={game.id}>
            <div className="relative">
              <img
                className="h-[200px] opacity-80 lg:h-[550px] md:h-[550px] object-fit-cover"
                src={game.background_image}
                alt={game.name}
              />
              <div className="absolute text-left top-1/4 pl-12 text-white">
                <div className="text-3xl lg:text-6xl md:text-6xl w-3/4 font-extrabold">
                  {game.name}
                </div>
                <div className="pt-1 md:pt-3 lg:pt-3">
                  <span className="font-bold">
                    Released Date: {game.released}
                  </span>
                </div>
                <div className="font-bold">Rating: {game.rating}</div>
                <div className="font-bold">Metacitics: {game.metacritic}</div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousell;
