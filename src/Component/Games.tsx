import GameCards from "./GameCards";
import useGames from "../hooks/useGames";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "./Header";

const Games = () => {
  const { data: games, hasMore, fetchPage } = useGames();
  return (
    <div>
      <div>
        <Header
          name={"Games"}
          className="text-[60px] p-5 mt-3 font-bold text-white"
        />
      </div>
      <div className="items-center justify-center">
        <InfiniteScroll
          dataLength={games.length}
          hasMore={hasMore}
          next={fetchPage}
          loader={<span className="loading loading-spinner text-error"></span>}
        >
          <div className="grid text-white lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center p-3 space-y-3 justify-items-center items-center ">
            {games &&
              games.map((game) => (
                <div className="flex items-start justify-start">
                  <GameCards key={game.id} game={game} />
                </div>
              ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Games;
