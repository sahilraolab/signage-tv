import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveDevice(data) {
  await AsyncStorage.setItem("device", JSON.stringify(data));
}

export async function getStoredDevice() {
  const d = await AsyncStorage.getItem("device");
  return d ? JSON.parse(d) : null;
}

export async function clearDevice() {
  await AsyncStorage.removeItem("device");
}
