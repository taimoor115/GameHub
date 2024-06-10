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

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        params: {
          page: page,
          page_size: 20,
        },
      })
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data.results]);
        setIsLoading(false);

        if (res.data.results.length === 0) {
          setHasMore(false);
        } else {
          setPage((prev) => prev + 1);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [endpoint, page]);

  return { data, error, isLoading, hasMore };
};

export default useData;
