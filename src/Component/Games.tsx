import GameCards from "./GameCards";
import useGames from "../hooks/useGames";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "./Header";
import PlatformList from "./PlatformList";

interface Props {
  genreId: string;
  platformId: number;
  platform: (platform: number) => void;
}
const Games = ({ genreId, platform, platformId }: Props) => {
  const { data: games, hasMore, fetchPage } = useGames(genreId, platformId);

  const genreName =
    genreId.charAt(0).toUpperCase() + genreId.slice(1, genreId.length);
  return (
    <div>
      <div className="flex flex-col p-4 justify-center gap-8">
        <Header
          name={genreId ? genreName : "Games"}
          className="text-[60px] font-bold text-white"
        />
        <PlatformList platformId={platform} />
      </div>

      <div className="items-center justify-center">
        <InfiniteScroll
          dataLength={games.length}
          hasMore={hasMore}
          next={fetchPage}
          loader={<span className="loading loading-spinner text-error"></span>}
        >
          <div className="grid text-white sm:grid-col-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center p-3 space-y-3 justify-items-center items-center ">
            {games &&
              games.map((game) => <GameCards key={game.slug} game={game} />)}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Games;
