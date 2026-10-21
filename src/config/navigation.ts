import {
  BookOpen,
  CalendarDays,
  Clapperboard,
  MessageSquareText,
  MonitorPlay,
  Star,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "demo", path: "/demo", icon: MonitorPlay, isContentType: true },
  { key: "reviews", path: "/reviews", icon: Star, isContentType: true },
  { key: "community", path: "/community", icon: MessageSquareText, isContentType: true },
  { key: "media", path: "/media", icon: Clapperboard, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.key);
