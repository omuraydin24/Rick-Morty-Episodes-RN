import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import axios from 'axios';

import EpisodeDetailCard from "../../Cards/EpisodeDetailCard"

import styles from "./EpisodeDetail.styles"

const URL = "https://rickandmortyapi.com/api/episode";

const Detail = ({ route, navigation }) => {
  const [episodeData, setEpisodeData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { EpisodeID } = route.params;

  async function fetchData() {
    try {
      const response = await axios.get(`${URL}/${EpisodeID}`);
      setEpisodeData(response.data);
      setLoading(false)
    } catch (err) {
      Alert.alert(err.message);
      setError(true)
    }
  }

  useEffect(() => {
    fetchData();
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
  return (
    <EpisodeDetailCard episodeData={episodeData} />

  );
}
export default Detail;
