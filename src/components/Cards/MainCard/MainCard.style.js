import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  episodeContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: "row",
    backgroundColor: "#ecede8",
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: "#2a3c5f",
    fontSize: 23,
    fontWeight: "600",
    textAlign: "center",
  },
  episode: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "#2a3c5f",
  },
  date: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
    color: "#2a3c5f",

  }


})