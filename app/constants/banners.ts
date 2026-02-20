import type { Banner } from "~/types/banner";

export const defaultHeightPixels = 48;

export const animeNow: Banner = {
  id: 'anime-now',
  name: "Anime Now",
  img: "/banners/anime-now.gif",
};

export const anyBrowser: Banner = {
  id: 'any-browser',
  name: "Any Browser You Like",
  img: "/banners/any-browser.png",
};

export const visitMyGuestbook: Banner = {
  id: 'visit-my-guestbook',
  name: "Visit my Guestbook",
  img: "/banners/guestbook.gif",
};

export const ibBanner: Banner = {
  id: 'ib-banner',
  name: "Ib Banner",
  img: "/banners/ib.png",
};

export const killua: Banner = {
  id: 'killua',
  name: "Killua",
  img: "/banners/killua.gif",
};

export const kurapika: Banner = {
  id: 'kurapika',
  name: "Kurapika",
  img: "/banners/kurapika.gif",
};

export const nekoscape: Banner = {
  id: 'nekoscape',
  name: "Nekoscape",
  img: "/banners/nekoscape.gif",
};

export const oldCastle: Banner = {
  id: 'old-castle',
  name: "Old Castle",
  img: "/banners/old-castle.png",
};

export const prettyBoysClub: Banner = {
  id: 'pretty-boys-club',
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
