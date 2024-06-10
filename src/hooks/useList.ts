import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { FetchResponse } from "./useData";

const useList = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(`${endpoint}`)
      .then((res) => setData(res.data.results))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useList;
