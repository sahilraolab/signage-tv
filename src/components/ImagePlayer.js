import React from "react";
import { Image, View } from "react-native";

export default function ImagePlayer({ uri }) {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Image
        source={{ uri }}
        resizeMode="contain"
        style={{ flex: 1 }}
        onError={(e) => console.log("Image load error", e)}
      />
    </View>
  );
}
