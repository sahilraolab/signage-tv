import React from "react";
import { Video } from "expo-av";

export default function VideoPlayer({ uri, onEnd }) {
  return (
    <Video
      source={{ uri }}
      style={{ flex: 1 }}
      resizeMode="contain"
      shouldPlay
      isLooping={false}
      onPlaybackStatusUpdate={(s) => {
        if (s.didJustFinish) onEnd();
      }}
    />
  );
}
