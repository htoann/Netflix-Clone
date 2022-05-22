import { getByUrl } from "./getApi";

export const getTrendingMovies = getByUrl(
  "/trending/movie/week",
  "Trending Now",
  {
    params: {
      sort_by: "popularity.desc",
    },
  }
);
export const getPopularMovies = getByUrl(
  "/movie/popular",
  "Popular on Netflix"
);
export const getMostPopularMovies = getByUrl("/discover/movie", "Most Popular");
export const getTopRatedMovies = getByUrl(
  "/movie/top_rated",
  "Top Rated Movies"
);
export const getUpcomingMovies = getByUrl("/movie/upcoming", "Upcoming");
export const getLatestMovies = getByUrl("/discover/movie", "Lastest Movies", {
  params: {
    sort_by: "release_date.desc",
    "vote_count.gte": 5,
  },
});
