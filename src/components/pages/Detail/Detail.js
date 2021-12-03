import React from 'react';
import { View, StyleSheet } from 'react-native';

import EpisodeCard from "../../Cards/EpisodeCard";

const Detail = ({ route, navigation }) => {
  const { EpisodeID } = route.params;
  const { data } = useFetch(`https://rickandmortyapi.com/api/episode/${EpisodeID}`);

  const renderEpisode = ({ item }) => <EpisodeCard episode={item} navigation={navigation} />

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.EpisodeID}
        renderItems={renderEpisode}
      >
      </FlatList>
    </View>
  );
}


export default Detail;
