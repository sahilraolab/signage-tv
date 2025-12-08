import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { fetchPlaylist } from "../utils/api";
import { getStoredDevice } from "../utils/storage";
import usePolling from "../hooks/usePolling";
import VideoPlayer from "../components/VideoPlayer";
import ImagePlayer from "../components/ImagePlayer";

export default function PlayerScreen({ onReset }) {
  const [mediaList, setMediaList] = useState([]);
  const [index, setIndex] = useState(0);

  async function load() {
    const device = await getStoredDevice();
    if (!device) return;

    const res = await fetchPlaylist(device.deviceId);
    if (res.success && res.items) {
      setMediaList(res.items);
      setIndex(0);
    }
  }

  usePolling(load, 15000);

  useEffect(() => {
    if (mediaList.length === 0) return;

    let timer;
    const current = mediaList[index];

    if (current.type === "image") {
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % mediaList.length);
      }, 7000);
    }

    return () => clearTimeout(timer);
  }, [index, mediaList]);

  if (mediaList.length === 0) return null;

  const item = mediaList[index];

  return (
    <TouchableWithoutFeedback onLongPress={onReset}>
      <View style={styles.container}>
        {item.type === "video" ? (
          <VideoPlayer uri={item.url} onEnd={() => setIndex((i) => (i + 1) % mediaList.length)} />
        ) : (
          <ImagePlayer uri={item.url} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" }
});
