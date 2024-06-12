import useList from "./useList";

export interface Platform {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}

const usePlatforms = () => useList<Platform>("/platforms/lists/parents");

export default usePlatforms;
