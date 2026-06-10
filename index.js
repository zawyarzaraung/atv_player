// components/ChannelList.js
import { useState } from "react";
import RemoteControl from "./RemoteControl";

export default function ChannelList({ channels }) {
  const [focusIndex, setFocusIndex] = useState(0);

  const handleNavigate = (direction) => {
    if (direction === "down" && focusIndex < channels.length - 1) {
      setFocusIndex(focusIndex + 1);
    } else if (direction === "up" && focusIndex > 0) {
      setFocusIndex(focusIndex - 1);
    } else if (direction === "select") {
      window.location.href = `/player?url=${encodeURIComponent(channels[focusIndex].url)}`;
    }
  };

  return (
    <div>
      <h2>Channel List</h2>
      <RemoteControl onNavigate={handleNavigate} />
      <ul>
        {channels.map((ch, i) => (
          <li key={i} className={i === focusIndex ? "focused" : ""}>
            {ch.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
