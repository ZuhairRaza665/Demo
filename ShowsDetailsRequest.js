import axios from "axios";

export const fetchData = () => {
  return axios
    .get(
      "http://b1g.ooo/get.php?username=entireservices&password=entireservices&type=m3u&output=ts"
    )
    .then((response) => {
      const data = response.data;

      const channelData = [];
      let currentIndex = 0;

      while (currentIndex < lines.length) {
        if (lines[currentIndex].startsWith("#EXTINF:-1,")) {
          const title = lines[currentIndex].substring(10).trim().substring(1);
          const link = lines[currentIndex + 1].trim();
          const language = null;
          const overview = null;
          const poster = null;
          const vote_average = null;
          const vote_count = null;
          const year = null;

          channelData.push({
            title,
            link,
            language,
            overview,
            poster,
            vote_average,
            vote_count,
            year,
          });
        }

        currentIndex++;
      }

      // console.log("first channel:", channelData[0]);
      // console.log("last channel:", channelData[225583]);
      // console.log("Length of channels:", channelData.length);
      // console.log("TV Length:", tv.length);

      for (let i = 0; i < channelData.length; i++) {
        if (
          !channelData[i].link.includes(".mp4") &&
          !channelData[i].link.includes(".mkv")
        ) {
          tv.push(channelData[i]);
        } else if (channelData[i].title.includes("S0")) {
          shows.push(channelData[i]);
        } else {
          movies.push();
        }
      }

      for (let i = 0; i < movies.length; i++) {}

      for (let i = 0; i < shows.length; i++) {}

      // const index = channelData[i].title.indexOf(" - ");
      // const name = channelData[i].title.substring(0, index);
      // const year = channelData[i].title.substring(index + 3, index + 7);

      console.log("Substring:", substring);
      console.log("Substring2:", substring2);
      console.log("TV 1st:", tv[0]);
      console.log("TV Length:", tv.length);
      console.log("Shows 1st:", shows[0]);
      console.log("Shows Length:", shows.length);
      console.log("Movies 1st:", movies[0]);
      console.log("Movies Length:", movies.length);

      return channelData;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
};
