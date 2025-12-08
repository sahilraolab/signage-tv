import React, { useEffect, useState } from "react";
import PairScreen from "./src/screens/PairScreen";
import PlayerScreen from "./src/screens/PlayerScreen";
import { getStoredDevice } from "./src/utils/storage";

export default function App() {
  const [paired, setPaired] = useState(false);

  useEffect(() => {
    async function load() {
      const saved = await getStoredDevice();
      if (saved?.deviceId) setPaired(true);
    }
    load();
  }, []);

  return paired ? (
    <PlayerScreen onReset={() => setPaired(false)} />
  ) : (
    <PairScreen onPaired={() => setPaired(true)} />
  );
}
