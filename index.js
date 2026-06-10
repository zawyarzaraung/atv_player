// pages/index.js
import { useState, useEffect } from "react";
import ChannelList from "../components/ChannelList";
import { parseM3U } from "../utils/playlistParser";

export default function Home() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetch("/playlist.m3u")
      .then(res => res.text())
      .then(text => setChannels(parseM3U(text)));
  }, []);

  return <ChannelList channels={channels} />;
}
