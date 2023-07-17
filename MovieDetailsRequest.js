export const fetchMovieData = async (item, movieID) => {
  const API_ENDPOINT = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=d159eaf1a8e9ef27976592ad48ed5a2a`;

  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();

    item.overview = data.overview;
    item.episodeName = data.name;
    item.runtime = data.runtime;
    item.air_date = data.air_date;
    item.still_path = data.still_path;
  } catch (error) {
    console.error("Error fetching episode data:", error);
  }

  console.log("Overview:", overview);
  console.log("Name:", episodeName);
  console.log("Runtime:", runtime);
  console.log("Air Date:", air_date);
  console.log("Still Path:", still_path);
};
