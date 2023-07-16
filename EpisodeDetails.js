const fetchEpisodeData = async (
  showID,
  seasonNo,
  episdoeNo,
  overview,
  episodeName,
  runtime,
  air_date,
  still_path
) => {
  const API_KEY = "d159eaf1a8e9ef27976592ad48ed5a2a";
  const API_ENDPOINT = `https://api.themoviedb.org/3/tv/${showID}/season/${seasonNo}/episode/${episdoeNo}?api_key=${API_KEY}`;

  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();

    overview = data.overview;
    episodeName = data.name;
    runtime = data.runtime;
    air_date = data.air_date;
    still_path = data.still_path;
  } catch (error) {
    console.error("Error fetching episode data:", error);
  }

  console.log("Overview:", overview);
  console.log("Name:", episodeName);
  console.log("Runtime:", runtime);
  console.log("Air Date:", air_date);
  console.log("Still Path:", still_path);
};

fetchEpisodeData(
  showID,
  seasonNo,
  episdoeNo,
  overview,
  episodeName,
  runtime,
  air_date,
  still_path
);
