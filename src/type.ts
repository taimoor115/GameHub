export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface GamesPlatform {
  platform: Platform;
  requirements: { minimum: string; recommended: string };
}
export interface Game {
  name: string;
  id: number;
  slug: string;
  metacritic: number;
  rating: number;
  released: string;
  background_image: string;
  genres: Genre[];
  platforms: GamesPlatform[];
  parent_platforms: { platform: Platform }[];
}

export interface Params {
  page?: number;
  page_size?: number;
  genres?: string;
  parent_platforms?: number;
  ordering?: string;
  search?: string;
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}

export interface Genre {
  id: number;
  slug: string;
  image_background: string;
  name: string;
}

export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  metacritic: number;
  released: string;
  background_image: string;
  background_image_additional: string;
  rating: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: { name: string }[];
  platforms: GamesPlatform[];
}

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}
export interface Response {
  count: number;
  results: Trailer[];
}
export interface ScreenShots {
  results: { id: string; image: string; height: number; width: number }[];
}
