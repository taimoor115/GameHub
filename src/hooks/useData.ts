import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { useInView } from "react-intersection-observer";

interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
interface Id {
  id: number;
}

const useData = <T extends Id>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchPage = async () => {
    setIsLoading(true);

    try {
      const response = await apiClient.get<FetchResponse<T>>(endpoint, {
        params: {
          page: page,
          page_size: 20,
        },
      });
      const newData = response.data.results;
      console.log("New Data", newData);
      console.log("URL", response.data.next);
      setData([...data, ...newData]);
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
  }, []);
  return { data, error, isLoading, hasMore, fetchPage };
};

export default useData;
