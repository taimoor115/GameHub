import GameCards from "../Component/GameCards";
import useGames from "../hooks/useGames";
import Skeleton from "../Component/Skeleton";
import InfiniteScroll from "react-infinite-scroll-component";

const Gamepage = () => {
  const { data: games, isLoading, hasMore } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <InfiniteScroll
      dataLength={games.length}
      hasMore={hasMore}
      next={useGames}
      loader={<h4>Loading....</h4>}
    >
      <div className="grid text-white grid-col-1 lg:grid-cols-3 md:grid-cols-2 justify-center space-y-3  p-3  justify-items-center items-center ">
        {isLoading && skeleton.map((s) => <Skeleton key={s} />)}
        <GameCards game={games} />
      </div>
    </InfiniteScroll>
  );
};

export default Gamepage;
