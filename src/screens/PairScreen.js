import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { generateCode } from "../utils/codeGenerator";
import { registerDevice } from "../utils/api";
import { saveDevice } from "../utils/storage";

export default function PairScreen({ onPaired }) {
  const [code] = useState(generateCode());
  const [status, setStatus] = useState("Waiting for pairing...");

  useEffect(() => {
    async function check() {
      const res = await registerDevice(code);
      if (res.success && res.deviceId) {
        await saveDevice({ deviceId: res.deviceId });
        onPaired();
      }
    }

    const id = setInterval(check, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pair Your Device</Text>
      <Text style={styles.code}>{code}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center",
    backgroundColor: "black",
  },
  title: { color: "white", fontSize: 32, marginBottom: 20 },
  code: { color: "#DF6229", fontSize: 64, fontWeight: "bold" },
  status: { color: "white", marginTop: 20, fontSize: 20 }
});
