import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: "contain",
    width: deviceSize.width,
    height: deviceSize.width,
  },
  name: {
    fontSize: 25,
    fontWeight: "600",
    color: "#2f8293",
    marginVertical: 5,
  },

  statusAlive: {
    color: "green",
    fontSize: 17,
    fontWeight: "400",
    marginTop: 5,
  },
  statusDead: {
    fontWeight: "400",
    fontSize: 17,
    color: "red",
    marginTop: 5,
  },
  info: {
    fontSize: 16,
    fontWeight: "400",
    color: "#202d43",

  },

});
