// components/VideoPlayer.js
import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function VideoPlayer({ url }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoRef.current);
    } else {
      videoRef.current.src = url;
    }
  }, [url]);

  return <video ref={videoRef} controls autoPlay style={{ width: "100%" }} />;
}
