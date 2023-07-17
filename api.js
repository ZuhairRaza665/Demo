import axios from "axios";
import { AsyncStorage } from "react-native";

export const tv = [];
export const movies = [];
export const shows = [];
export const showsName = [];

export const fetchData = () => {
  return fetch(
    "http://b1g.one/get.php?username=entireservices&password=entireservices&type=m3u"
  )
    .then((response) => response.text())
    .then((data) => {
      const lines = data.split("\n");

      const channelData = [];
      let currentIndex = 0;

      while (currentIndex < lines.length) {
        if (lines[currentIndex].startsWith("#EXTINF:-1,")) {
          const title = lines[currentIndex].substring(10).trim().substring(1);
          const link = lines[currentIndex + 1].trim();
          const overview = null;
          const poster = null;
          const vote_average = null;
          const vote_count = null;
          const year = null;

          channelData.push({
            title,
            link,
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

      const pattern = /S\d{1,2} E\d{1,2}/;

      for (let i = 0; i < channelData.length; i++) {
        const link = channelData[i].link.toLowerCase();

        if (
          !link.includes(".mp4") &&
          !link.includes(".mkv") &&
          !link.includes(".avi") &&
          !link.includes(".srt") &&
          !link.includes(".mpg") &&
          !link.includes(".webg") &&
          !link.includes(".mp2") &&
          !link.includes(".mpeg") &&
          !link.includes(".mpe") &&
          !link.includes(".ogg") &&
          !link.includes(".m4p") &&
          !link.includes(".m4v") &&
          !link.includes(".wmv") &&
          !link.includes(".mov") &&
          !link.includes(".qt") &&
          !link.includes(".flv") &&
          !link.includes(".swf") &&
          !link.includes(".avchd")
        ) {
          tv.push(channelData[i]);
        } else if (pattern.test(channelData[i].title)) {
          shows.push(channelData[i]);
        } else {
          movies.push(channelData[i]);
        }
      }

      console.log("Last index of tv array:", tv.length);
      console.log("Last index of tv array:", tv[tv.length]);

      const searchString = "293456";
      const indexOfItemWithSearchString = tv.findIndex((item) =>
        item.link.includes(searchString)
      );

      console.log(
        "Index of item in tv array with link including '293456':",
        indexOfItemWithSearchString
      );

      // for (let i = 0; i < movies.length; i++) {
      //   /*
      //       temp = fetchedData
      //       movies[i].overview = temp.overview;
      //       movies[i].poster = temp.poster_path;
      //       movies[i].vote_average = temp.vote_average;
      //       movies[i].vote_count = temp.vote_count;
      //       movies[i].year = release_date;

      //   */
      // }

      // for (let i = 0; i < shows.length; i++) {}

      // const index = channelData[i].title.indexOf(" - ");
      // const name = channelData[i].title.substring(0, index);
      // const year = channelData[i].title.substring(index + 3, index + 7);

      // console.log("TV 1st:", tv[0]);
      // console.log("TV Length:", tv.length);
      // console.log("Shows 1st:", shows[50]);
      // console.log("Shows Length:", shows.length);
      // console.log("Movies 1st:", movies[0]);
      // console.log("Movies Length:", movies.length);

      for (let i = 0; i < 13000; i++) {
        const nam = shows[i].title;
        const index2 = nam.indexOf("S0");
        const substring2 = nam.substring(0, index2 - 1);

        if (!showsName.includes(substring2)) {
          const title = substring2;
          const overview = null;
          const poster = null;
          const vote_average = null;
          const vote_count = null;
          const year = null;

          showsName.push({
            title,
            overview,
            poster,
            vote_average,
            vote_count,
            year,
          });
        }
      }

      console.log("Shows Name: ", showsName.length);
      console.log("Shows Name: ", showsName[0]);

      return channelData;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
};
