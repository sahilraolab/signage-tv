const BASE = "https://api.techseventeen.com";

export async function registerDevice(code) {
  try {
    const res = await fetch(`${BASE}/api/signage/tv/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code })
    });

    return await res.json();
  } catch (e) {
    console.log("registerDevice error", e);
    return { success: false };
  }
}

export async function fetchPlaylist(deviceId) {
  try {
    const res = await fetch(`${BASE}/api/signage/tv/playlist/${deviceId}`);
    return await res.json();
  } catch (e) {
    console.log("fetchPlaylist error", e);
    return { success: false, items: [] };
  }
}
