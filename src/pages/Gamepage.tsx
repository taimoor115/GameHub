import GameCards from "../Component/GameCards";
import useGames from "../hooks/useGames";
import InfiniteScroll from "react-infinite-scroll-component";

const Gamepage = () => {
  const { data: games, hasMore, fetchPage } = useGames();

  console.log(games);

  return (
    <InfiniteScroll
      dataLength={games.length}
      hasMore={hasMore}
      next={fetchPage}
      loader={<span className="loading loading-spinner text-error"></span>}
    >
      <div className="grid text-white grid-col-2 lg:grid-cols-3 md:grid-cols-3 justify-center p-3 space-y-3 justify-items-center items-center ">
        {games && games.map((game) => <GameCards key={game.id} game={game} />)}
      </div>
    </InfiniteScroll>
  );
};

export default Gamepage;
