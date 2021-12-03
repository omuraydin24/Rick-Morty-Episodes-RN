import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  episodeContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: "row",
  },
  name: {
    color: "black"

  },
  left: {
    flex: 1,
    
  }
})