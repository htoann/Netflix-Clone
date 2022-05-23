import { shuffle } from "../utils";
import { getMoviesByType, getTVByType } from "./getApi";
import {
  getLatestMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "./getMovies";
import {
  getLatestTV,
  getPopularTV,
  getTopRatedTV,
  getTrendingTV,
  getTVOnTheAir,
  getTVOnTheAirToday,
} from "./getTv";

export const getAll = async (genre, setGenre, type, setIsLoading, setLists) => {
  let allList = [];

  if (type) {
    type === "movie" &&
      allList.push(await getMoviesByType(genre, setGenre, type, setIsLoading));

    type === "series" &&
      allList.push(await getTVByType(genre, setGenre, type, setIsLoading));

    if (type === "movie" && genre == null) {
      setGenre(null);

      allList.push(
        await getTrendingMovies,
        await getUpcomingMovies,
        await getPopularMovies,
        await getTopRatedMovies,
        await getLatestMovies
      );
    } else if (type === "series" && genre == null) {
      allList.push(
        await getTrendingTV,
        await getPopularTV,
        await getTopRatedTV,
        await getTVOnTheAir,
        await getTVOnTheAirToday,
        await getLatestTV
      );
    } else if (type === "popular") {
      allList.push(
        await getPopularTV,
        await getLatestTV,
        await getUpcomingMovies,
        await getPopularMovies,
        await getLatestMovies
      );
    }
  } else {
    allList.push(
      await getTrendingMovies,
      await getUpcomingMovies,
      await getPopularMovies,
      await getTopRatedMovies,
      await getLatestMovies,
      await getTrendingTV,
      await getPopularTV,
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
