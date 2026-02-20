import type { Banner } from "@/types/banner";

export const defaultHeightPixels = 48;

export const animeNow: Banner = {
  name: "Anime Now",
  img: "/banners/anime-now.gif",
};

export const anyBrowser: Banner = {
  name: "Any Browser You Like",
  img: "/banners/any-browser.png",
};

export const visitMyGuestbook: Banner = {
  name: "Visit my Guestbook",
  img: "/banners/guestbook.gif",
};

export const ibBanner: Banner = {
  name: "Ib Banner",
  img: "/banners/ib.png",
};

export const killua: Banner = {
  name: "Killua",
  img: "/banners/killua.gif",
};

export const kurapika: Banner = {
  name: "Kurapika",
  img: "/banners/kurapika.gif",
};

export const nekoscape: Banner = {
  name: "Kurapika",
  img: "/banners/nekoscape.gif",
};

export const oldCastle: Banner = {
  name: "Old Castle",
  img: "/banners/old-castle.png",
};

export const prettyBoysClub: Banner = {
  name: "Pretty Boys Club",
  img: "/banners/pretty-boys-club.png",
};

export const banners = [
  animeNow,
  anyBrowser,
  visitMyGuestbook,
  ibBanner,
  killua,
  kurapika,
  nekoscape,
  oldCastle,
  prettyBoysClub,
] as const satisfies Banner[];
