import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableWithoutFeedback } from 'react-native';

import styles from "./Episodes.style";

import axios from 'axios';

const Episodes = ({ navigation }) => {
  const [episodeData, setEpisodeData] = useState();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((response) => response.data)
      .then((data) => setEpisodeData(data.results))
      .catch((error) => console.log(error))
  }, [])

  const handleDetail = EpisodeID => {
    navigation.navigate('DetailScreen', { EpisodeID });
  };

  const renderEpisodes = ({ item }) => {
    return (
      <View style={styles.episodeContainer}>
        <TouchableWithoutFeedback style={{backgroundColor: "red"}} onPress={() => handleDetail(item.id)}>
          <View>
            <View style={styles.left}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.episode}</Text>
            </View>
            <Text>{item.air_date}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
  return (
    <View>
      <FlatList
        renderItem={renderEpisodes}
        data={episodeData}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Episodes;
