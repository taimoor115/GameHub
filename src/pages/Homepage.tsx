import Carousell from "../Component/Carousell";
import CreatorList from "../Component/CreatorList";
import GameList from "../Component/GameList";

const Homepage = () => {
  return (
    <>
      <div>
        <Carousell />
        <GameList />
        <CreatorList />
      </div>
    </>
  );
};

export default Homepage;
