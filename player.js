// pages/player.js
import { useRouter } from "next/router";
import VideoPlayer from "../components/VideoPlayer";

export default function PlayerPage() {
  const router = useRouter();
  const { url } = router.query;

  if (!url) return <p>No channel selected</p>;

  return (
    <div>
      <h2>Now Playing</h2>
      <VideoPlayer url={url} />
    </div>
  );
}
