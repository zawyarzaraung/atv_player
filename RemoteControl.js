import { useEffect } from "react";

export default function RemoteControl({ onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp": onNavigate("up"); break;
        case "ArrowDown": onNavigate("down"); break;
        case "ArrowLeft": onNavigate("left"); break;
        case "ArrowRight": onNavigate("right"); break;
        case "Enter": onNavigate("select"); break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNavigate]);

  return null;
}
