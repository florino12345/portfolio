import type { Social } from "@/data/site";

type IconProps = { size?: number };

function GithubIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.02-.01-1.85-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12s0-3.35-.43-4.96a2.78 2.78 0 0 0-1.95-1.97C17.99 4.6 12 4.6 12 4.6s-5.99 0-7.62.47a2.78 2.78 0 0 0-1.95 1.97C2 8.65 2 12 2 12s0 3.35.43 4.96a2.78 2.78 0 0 0 1.95 1.97c1.63.47 7.62.47 7.62.47s5.99 0 7.62-.47a2.78 2.78 0 0 0 1.95-1.97C22 15.35 22 12 22 12Z" opacity="0.35"/>
      <path d="M10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-3.42-4.22h-3.1v14.24a2.6 2.6 0 1 1-2.6-2.6c.18 0 .35.02.52.05V10.2a5.7 5.7 0 1 0 5.18 5.68V8.9a7.34 7.34 0 0 0 4.42 1.47V7.28a4.27 4.27 0 0 1-.99-1.46z" />
    </svg>
  );
}

function XIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.7l-5.2-6.8L5.6 22H2.5l8.1-9.3L1.7 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
    </svg>
  );
}

export function SocialIcon({ icon, size = 18 }: { icon: Social["icon"]; size?: number }) {
  switch (icon) {
    case "github":
      return <GithubIcon size={size} />;
    case "instagram":
      return <InstagramIcon size={size} />;
    case "youtube":
      return <YoutubeIcon size={size} />;
    case "tiktok":
      return <TikTokIcon size={size} />;
    case "x":
      return <XIcon size={size} />;
  }
}
