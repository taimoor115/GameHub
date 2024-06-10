import GenreList from "../Component/GenreList";
import Games from "../Component/Games";

const Gamepage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-col-[1fr,6fr] lg:grid-cols-[1fr,5fr]">
        <div className="sm:hidden md:block lg:block">
          <GenreList />
        </div>
        <Games />
      </div>
    </div>
  );
};

export default Gamepage;
