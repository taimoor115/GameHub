import { Link } from "react-router-dom";
import useGenres from "../hooks/useGenres";
import getCropImage from "../service/image-url";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <>
      <h2 className="font-bold text-2xl mb-4 text-white p-5 mt-5 ">
        Genre List
      </h2>
      <div className="flex-col text-white md:text-sm lg:text-sm hidden p-6 mt-5 md:flex lg:flex">
        <div>
          {genres.map((genre) => (
            <div className="flex gap-x-3 items-center mb-2" key={genre.id}>
              <img
                src={getCropImage(genre.image_background)}
                alt="genres"
                className="w-12 h-12 gap-3 object-cover rounded-lg"
              />
              <Link to="/detail/games">{genre.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GenreList;
