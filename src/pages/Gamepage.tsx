import GenreList from "../Component/GenreList";
import Games from "../Component/Games";
import { useState } from "react";

const Gamepage = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<number>(0);

  const handleGenre = (genreId: string) => {
    setSelectedGenre(genreId);
  };

  const handlePlatform = (platform: number) => {
    setSelectedPlatform(platform);
  };
  return (
    <div className="grid grid-cols-1 md:grid-col-[1fr,6fr] lg:grid-cols-[1fr,6fr]">
      <div className="sm:hidden md:block lg:block">
        <GenreList genreFn={handleGenre} />
      </div>
      <div className="w-full">
        <Games
          platformId={selectedPlatform}
          genreId={selectedGenre}
          platform={handlePlatform}
        />
      </div>
    </div>
  );
};

export default Gamepage;
