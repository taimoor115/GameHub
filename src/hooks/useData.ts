import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get<FetchResponse<T>>(endpoint, {
        params: {
          page: page,
          page_size: 20,
        },
      });
      const newData = response.data.results;
      setData((prev) => [...prev, ...newData]);
      setPage((prev) => prev + 1);

      if (newData.length === 0) setHasMore(false);
    } catch (error) {
      setError("Error while Fetching");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNextPage = () => {
    if (!isLoading && hasMore) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);
  return { data, error, isLoading, hasMore, fetchNextPage };
};

export default useData;
