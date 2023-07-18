export const fetchMovieData = async (item) => {
  const fullTitle = item.title;

  const index = fullTitle.indexOf(" - ");
  const name = fullTitle.substring(0, index - 1);
  const year = fullTitle.substring(index + 1, index + 5);

  const modifiedName = name.replace(/ /g, "%20"); /* 
  as in the api there should be no spaces in beteeen the name and spaces should be 
  replaced by %20 , for example The SpiderMan = The%20SpiderMan
  */

  const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?query=${modifiedName}&%20US&primary_release_year=${year}&page=1&api_key=d159eaf1a8e9ef27976592ad48ed5a2a`;

  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    const movieData = data.results[0]; // Assuming there's only one result in the response
    const movieId = movieData.id || null;

    console.log("movie id: ", movieId);

    if (movieId) {
      await fetchMovieDetails(item, movieId);
      console.log("overview: ", item.poster_path);
    } else {
      console.error("Movie not found");
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
};

const fetchMovieDetails = async (item, movieID) => {
  const API_ENDPOINT = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=d159eaf1a8e9ef27976592ad48ed5a2a`;

  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    item.backdrop_path = data.backdrop_path;
    item.genreNames = data.genres.map((genre) => genre.name);
    item.overview = data.overview;
    item.poster_path = data.poster_path;
    item.release_date = data.release_date;
    item.runtime = data.runtime;
    item.vote_average = data.vote_average;
    item.vote_count = data.vote_count;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};
