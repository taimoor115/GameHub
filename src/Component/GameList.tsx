import useGames from "../hooks/useGames";
import ListCarousel from "./ListCarousel";

const GameList = () => {
  const { data: games } = useGames();

  console.log(games);
  return <ListCarousel name="Games" games={games} />;
};

export default GameList;
