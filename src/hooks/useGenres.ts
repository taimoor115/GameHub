import genre from "../data/genre";

export interface Genre {
  id: number;
  slug: string;
  image_background: string;
  name: string;
}

const useGenres = () => ({ data: genre, isLoading: false, error: null });

export default useGenres;
