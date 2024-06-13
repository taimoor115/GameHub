import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { GameDetails, Response, ScreenShots } from "../type";

const useGameDetail = (endpoint: string) => {
  const [game, setGame] = useState<GameDetails[]>([]);
  const [movies, setMovies] = useState<Response[]>([]);
  const [error, setError] = useState("");
  const [trailerError, setTrailerError] = useState("");
  const [screenShots, setScreenShots] = useState<ScreenShots[]>([]);
  const [screenShotsErrors, setScreenShotsError] = useState("");

  useEffect(() => {
    apiClient
      .get(`/games/${endpoint}`)
      .then((res) => setGame([res.data]))
      .catch((err) => setError(err));

    apiClient
      .get(`/games/${endpoint}/movies`)
      .then((res) => setMovies([res.data]))
      .catch((err) => setTrailerError(err));

    apiClient
      .get(`/games/${endpoint}/screenshots`)
      .then((res) => setScreenShots([res.data]))
      .catch((err) => setScreenShotsError(err));
  }, [endpoint]);

  return {
    game,
    error,
    movies,
    trailerError,
    screenShots,
    screenShotsErrors,
  };
};

export default useGameDetail;
