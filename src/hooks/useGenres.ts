import useList from "./useList";

export interface Genre {
  id: number;
  slug: string;
  image_background: string;
  name: string;
}

const useGenres = () => useList<Genre>("/genres");

export default useGenres;
