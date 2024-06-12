import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { Platform } from "./usePlatforms";
import { Genre } from "./useGenres";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface GamesPlatform {
  platform: Platform;
  requirements: { minimum: string; recommended: string };
}
export interface Game {
  name: string;
  id: number;
  slug: string;
  metacritic: number;
  rating: number;
  released: string;
  background_image: string;
  genres: Genre[];
  platforms: GamesPlatform[];
  parent_platforms: { platform: Platform }[];
}

interface Params {
  page: number;
  page_size: number;
  genres?: string;
  parent_platforms?: number;
  ordering?: string;
}

const useGames = <T extends Game>(
  genreId?: string,
  platformId?: number,
  order?: string
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchPage = async () => {
    setIsLoading(true);
    let params: Params = {
      page: page,
      page_size: 25,
    };

    try {
      if (genreId) {
        params["genres"] = genreId;
      }

      if (platformId) {
        params["parent_platforms"] = platformId;
      }

      if (order) {
        params["ordering"] = order.toLowerCase();
        console.log(order.toLowerCase());
      }
      const response = await apiClient.get<FetchResponse<T>>("/games", {
        params: params,
      });

      if (genreId || platformId || order) {
        setData([...response.data.results, ...data]);
      } else {
        setData([...data, ...response.data.results]);
      }
      setPage((prev) => prev + 1);
      console.log(data);

      if (!response.data.next) setHasMore(false);
    } catch (error) {
      setError("Error while Fetching");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPage();
  }, [genreId, platformId, order]);
  return { data, error, isLoading, hasMore, fetchPage };
};

export default useGames;
