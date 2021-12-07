import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';

import styles from "./Episodes.style";

import axios from 'axios';
import MainCard from '../../Cards/MainCard';

const URL = "https://rickandmortyapi.com/api/episode";

const Episodes = ({ navigation }) => {
  const [episodeData, setEpisodeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      const response = await axios.get(URL);
      setEpisodeData(response.data.results);
    } catch (err) {
      Alert.alert(err.message);
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // console.log(episodeData)
  }, [])

  if (loading) {
    return <View style={styles.loading}>
      <ActivityIndicator size="large" color="#2a3c5f" />
    </View>
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const handleDetail = EpisodeID => {
    navigation.navigate('DetailScreen', { EpisodeID });
  };

  const renderEpisodes = ({ item }) => {
    return (
      <MainCard data={item} onPress={() => handleDetail(item.id)} />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Episodes</Text>
      <View style={styles.listContainer}>
        <FlatList
          renderItem={renderEpisodes}
          data={episodeData}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default Episodes;
