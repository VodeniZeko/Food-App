import React from "react";
import { View, Linking, Text, StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const InfoBoardLocation = ({ results }) => {
  const address = results.location.display_address;
  const googleSearch = `https://www.google.com/maps/search/?api=1&query=${address}`;
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={() => Linking.openURL(googleSearch)}>
        <Entypo
          style={{ paddingTop: 5, color: "blue", opacity: 0.4 }}
          size={30}
          name="location-pin"
        />
      </TouchableOpacity>
      <Entypo name="chevron-down" />
      <Text style={styles.addressInfo}>{`${address}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addressInfo: {
    // fontFamily: "Avenir-MediumOblique",
    fontSize: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  }
});
export default InfoBoardLocation;
