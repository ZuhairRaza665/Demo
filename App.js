import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { fetchData, tv, movies, shows, showsName } from "./api";
import { fetchMovieData } from "./MovieDetailsRequest";

const App = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetchData().then((data) => {
        setChannels(data);
      });
    };
    getData();

    if (movies[0] != null) {
      console.log("New Updated  : ", movies[21172]);

      fetchMovieData(movies[21172]);

      console.log("New Updated  2: ", movies[12]);

      fetchMovieData(movies[12]);
    }
  }, [fetchMovieData()]);

  // let targetMovieIndex = -1;

  // // Use the map method to iterate through the array
  // movies.map((movie, index) => {
  //   // Check if the current movie's title matches the target title
  //   if (movie.title === "Nusrat Fateh Ali Khan Live At Birmingham Town Hall - 1993") {
  //     // Save the index of the movie in the variable
  //     targetMovieIndex = index;
  //   }
  // });

  // // The variable targetMovieIndex will now hold the index of the movie
  // console.log("Index of the target movie:", targetMovieIndex);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.title}</Text>
      <Text style={styles.itemLink}>{item.link}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Channels</Text>
      {channels.length > 0 ? (
        <View>
          {/* <FlatList
            data={[tv[tv.length - 1]]}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
          />
          <FlatList
            data={[movies[movies.length - 1]]} // Using tv array, index 1 as data source
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
          />
          <FlatList
            data={[shows[shows.length - 2]]} // Using tv array, index 1 as data source
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
          /> */}
          {/* <FlatList
            data={movies} // Using tv array, index 1 as data source
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
          />
           */}
          <Text>{movies[12].overview}</Text>
          {/*
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500//" + movies[0].poster_path,
            }}
            style={styles.image}
          /> */}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    height: 400,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemLink: {
    fontSize: 14,
    color: "#666",
  },
});

export default App;
