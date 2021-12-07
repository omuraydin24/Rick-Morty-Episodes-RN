import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width * 0.27,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#3d9eac",
  },
  name: {
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  },
  image: {
    width: width * 0.27,
    height: width * 0.27,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  nameContainer: {
    height: 40,
    justifyContent: "center",
    margin: 3,
  },
  loading: {
    flex: 1,
    justifyContent: 'center'
  }


})