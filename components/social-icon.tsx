import { Github, Instagram, Youtube } from "lucide-react";
import type { Social } from "@/data/site";

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-3.42-4.22h-3.1v14.24a2.6 2.6 0 1 1-2.6-2.6c.18 0 .35.02.52.05V10.2a5.7 5.7 0 1 0 5.18 5.68V8.9a7.34 7.34 0 0 0 4.42 1.47V7.28a4.27 4.27 0 0 1-.99-1.46z" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.7l-5.2-6.8L5.6 22H2.5l8.1-9.3L1.7 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
    </svg>
  );
}

export function SocialIcon({ icon, size = 18 }: { icon: Social["icon"]; size?: number }) {
  switch (icon) {
    case "github":
      return <Github size={size} />;
    case "instagram":
      return <Instagram size={size} />;
    case "youtube":
      return <Youtube size={size} />;
    case "tiktok":
      return <TikTokIcon size={size} />;
    case "x":
      return <XIcon size={size} />;
  }
}
