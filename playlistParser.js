// utils/playlistParser.js
export function parseM3U(m3uText) {
  const lines = m3uText.split("\n");
  const channels = [];
  let currentChannel = {};

  lines.forEach(line => {
    if (line.startsWith("#EXTINF")) {
      const name = line.split(",")[1]?.trim();
      currentChannel = { name };
    } else if (line.startsWith("http")) {
      currentChannel.url = line.trim();
      channels.push(currentChannel);
    }
  });

  return channels;
}
