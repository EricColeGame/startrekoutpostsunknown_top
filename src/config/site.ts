export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Star Trek Outposts Unknown Wiki",
  shortName: "Star Trek Outposts Unknown",
  logoText: "S",
  tagline: "Outpost Building, Colony Management & X'Lehari System Guides",
  description: "Star Trek Outposts Unknown guides for beginners, outpost building, resource logistics, crew management, planet exploration, strategy tips, and updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://startrekoutpostsunknown.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://startrekoutpostsunknown.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3469910/Star_Trek_Outposts_Unknown/",
  heroVideoId: "9lIScmkR1IE", // IGN official Kourou planet gameplay reveal
  social: {
    youtube: "https://www.youtube.com/watch?v=9lIScmkR1IE",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
