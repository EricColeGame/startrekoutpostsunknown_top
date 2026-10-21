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
  supportEmail: "support@startrekoutpostsunknown.top",
  gameUrl: "https://store.steampowered.com/app/3469910/Star_Trek_Outposts_Unknown/",
  heroVideoId: "c2h39AsRVKo", // Star Trek: Outposts Unknown - Official Announcement Trailer
  social: {
    discord: "https://discord.gg/Kepp479Ub",
    youtube: "https://www.youtube.com/@Playstack",
  },
  locales: ["en", "de", "es", "fr"],
  defaultLocale: "en",
};
