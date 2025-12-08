import React from "react";
import { Image, View } from "react-native";

export default function ImagePlayer({ uri }) {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Image
        source={{ uri }}
        resizeMode="contain"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
}
