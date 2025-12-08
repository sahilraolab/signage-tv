import Constants from "expo-constants";
const BASE = Constants.expoConfig.extra.BASE_URL;

export async function registerDevice(code) {
  const res = await fetch(`${BASE}/api/signage/tv/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  });
  return res.json();
}

export async function fetchPlaylist(deviceId) {
  const res = await fetch(`${BASE}/api/signage/tv/playlist/${deviceId}`);
  return res.json();
}
