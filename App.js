import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
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

    console.log("App js showsName length: ", showsName.length);

    fetchMovieData(movies[1]);
    console.log("overview: ", item.poster_path);

    // console.log("tv: ", tv[0]);
    // console.log("movie: ", movies[0]);
    // console.log("showsName: ", showsName[10]);
  }, []);

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
          <FlatList
            data={movies} // Using tv array, index 1 as data source
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
          />
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
