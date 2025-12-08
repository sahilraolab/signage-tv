const BASE = __DEV__
  ? "http://localhost:5000"
  : "https://api.techseventeen.com";

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
