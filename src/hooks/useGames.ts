import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { FetchResponse, Game, Params } from "../type";

const useGames = <T extends Game>(
  genreId?: string,
  platformId?: number,
  order?: string,
  search?: string
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState<number>(1);

  const fetchPage = async () => {
    setIsLoading(true);
    let params: Params = {
      page: page,
      search: search,
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
      }
      const response = await apiClient.get<FetchResponse<T>>("/games", {
        params: params,
      });

      if (genreId || platformId || order || search) {
        setData([...response.data.results, ...data]);
        console.log(search, genreId, order, platformId);
      } else {
        setData([...data, ...response.data.results]);
      }

      setPage((prev) => prev + 1);

      if (!response.data.next) setHasMore(false);
    } catch (error) {
      setError("Error while Fetching");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPage();
  }, [genreId, platformId, order, search]);
  return { data, error, isLoading, hasMore, fetchPage };
};

export default useGames;
