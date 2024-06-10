import GameCards from "../Component/GameCards";
import useGames from "../hooks/useGames";
import Skeleton from "../Component/Skeleton";

const Gamepage = () => {
  const { data: games, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid text-white grid-col-1 lg:grid-cols-3 md:grid-cols-2 justify-center space-y-3  p-3  justify-items-center items-center ">
      {isLoading && skeleton.map((s) => <Skeleton key={s} />)}
      <GameCards game={games} />
    </div>
  );
};

export default Gamepage;
