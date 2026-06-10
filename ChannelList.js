// components/ChannelList.js
import Link from "next/link";

export default function ChannelList({ channels }) {
  return (
    <div>
      <h2>Channel List</h2>
      <ul>
        {channels.map((ch, i) => (
          <li key={i}>
            <Link href={`/player?url=${encodeURIComponent(ch.url)}`}>
              {ch.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
