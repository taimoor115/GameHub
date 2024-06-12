import platforms from "../data/platforms";

export interface Platform {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}

const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
export default usePlatforms;
