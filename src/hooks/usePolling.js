import { useEffect } from "react";

export default function usePolling(callback, interval = 10000) {
  useEffect(() => {
    callback(); // run immediately

    const id = setInterval(callback, interval);
    return () => clearInterval(id);
  }, []);
}
