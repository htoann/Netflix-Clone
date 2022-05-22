import { getByUrl } from "./getApi";

export const getTrendingTV = getByUrl("/trending/tv/week", "Trending Now", {
  params: {
    sort_by: "popularity.desc",
  },
});
export const getPopularTV = getByUrl("/tv/popular", "Popular on Netflix");
export const getMostPopularTV = getByUrl("/discover/tv", "Most Popular");
export const getTopRatedTV = getByUrl("/tv/top_rated", "Top Rated TV Shows");
export const getTVOnTheAir = getByUrl("/tv/on_the_air", "TV On The Air");
export const getTVOnTheAirToday = getByUrl(
  "/tv/airing_today",
  "TV On The Air Today"
);
export const getLatestTV = getByUrl("/discover/tv", "Lastest TV Shows", {
  params: {
    sort_by: "release_date.desc",
    "vote_count.gte": 1,
  },
});
