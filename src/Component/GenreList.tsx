import { Link } from "react-router-dom";
import useGenres from "../hooks/useGenres";
import getCropImage from "../service/image-url";

interface Props {
  genreFn: (genreId: string) => void;
}
const GenreList = ({ genreFn }: Props) => {
  const { data } = useGenres();

  return (
    <>
      <h2 className="hidden mg:flex lg:flex font-bold text-2xl mb-4 text-white p-8 mt-5 ">
        Genres
      </h2>
      <div className="flex-col text-white md:text-sm lg:text-sm hidden p-10 mt-5 md:flex lg:flex">
        <div>
          {data.map((genre) =>
            genre.results.map((genre) => (
              <div className="flex gap-x-3 items-center mb-2" key={genre.id}>
                <img
                  src={getCropImage(genre.image_background)}
                  alt="genres"
                  className="w-12 h-12 gap-3 object-cover rounded-lg"
                />
                <Link to="/" onClick={() => genreFn(genre.slug)}>
                  {genre.name}
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default GenreList;
