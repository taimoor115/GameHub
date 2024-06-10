import GameCards from "../Component/GameCards";
import useGames from "../hooks/useGames";
import Skeleton from "../Component/Skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Component/Loader";

const Gamepage = () => {
  console.log("Hello");
  const { data: games, isLoading, hasMore, fetchNextPage } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];

  console.log(games);
  console.log(isLoading);

  return (
    <InfiniteScroll
      dataLength={games.length}
      hasMore={hasMore}
      next={fetchNextPage}
      loader={<span className="loading loading-spinner text-success"></span>}
    >
      <div className="grid text-white grid-col-1 lg:grid-cols-3 md:grid-cols-2 justify-center space-y-3  p-3  justify-items-center items-center ">
        {isLoading
          ? skeleton.map((s) => <Skeleton key={s} />)
          : games.map((game) => <GameCards key={game.id} game={game} />)}
      </div>
    </InfiniteScroll>
  );
};

export default Gamepage;
