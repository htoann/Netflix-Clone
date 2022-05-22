import { shuffle } from "../utils";
import { getMoviesByType } from "./getApi";
import {
  getLatestMovies,
  getMostPopularMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "./getMovies";
import {
  getLatestTV,
  getMostPopularTV,
  getPopularTV,
  getTopRatedTV,
  getTrendingTV,
  getTVOnTheAir,
  getTVOnTheAirToday,
} from "./getTv";

export const getAll = async (genre, setGenre, type, setIsLoading, setLists) => {
  let allList = [];

  if (type) {
    allList.push(await getMoviesByType(genre, setGenre, type, setIsLoading));

    if (type === "movie" && genre == null) {
      allList.push(
        await getTrendingMovies,
        await getUpcomingMovies,
        await getPopularMovies,
        await getTopRatedMovies,
        await getLatestMovies,
        await getMostPopularMovies
      );
    } else if (type === "series" && genre == null) {
      allList.push(
        await getTrendingTV,
        await getPopularTV,
        await getMostPopularTV,
        await getTopRatedTV,
        await getTVOnTheAir,
        await getTVOnTheAirToday,
        await getLatestTV
      );
    } else if (type === "popular" && genre == null) {
      allList.push(
        await getPopularTV,
        await getMostPopularTV,
        await getLatestTV,
        await getUpcomingMovies,
        await getPopularMovies,
        await getLatestMovies,
        await getMostPopularMovies
      );
    }
  } else {
    allList.push(
      await getTrendingMovies,
      await getUpcomingMovies,
      await getPopularMovies,
      await getTopRatedMovies,
      await getLatestMovies,
      await getMostPopularMovies,
      await getTrendingTV,
      await getPopularTV,
      await getMostPopularTV,
      await getTopRatedTV,
      await getTVOnTheAir,
      await getTVOnTheAirToday,
      await getLatestTV
    );
  }

  allList = allList.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.total_pages === value.total_pages &&
          t.total_results === value.total_results
      )
  );

  allList = shuffle(allList);

  setLists(allList);
};
