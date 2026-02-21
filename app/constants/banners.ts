import type { Banner } from "~/types/banner";

export const amatsuki: Banner = {
  id: 'amatsuki',
  name: "Amatsuki",
  img: "/banners/amatsuki.gif",
};

export const animeBlink: Banner = {
  id: 'anime-blink',
  name: "Anime Blink",
  img: "/banners/anime-blink.gif",
};

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

export const privacy: Banner = {
  id: 'privacy',
  name: "Internet privacy, now!",
  img: "/banners/privacy.gif",
};

export const sayNoToWeb3: Banner = {
  id: 'say-no-to-web3',
  name: "Say No to Web3",
  img: "/banners/say-no-to-web3.gif",
};

export const webDesign: Banner = {
  id: 'web-design',
  name: "Web Design is my Passion",
  img: "/banners/web-design.gif",
};

export const banners = [
  amatsuki,
  animeBlink,
  animeNow,
  anyBrowser,
  visitMyGuestbook,
  ibBanner,
  killua,
  kurapika,
  nekoscape,
  oldCastle,
  prettyBoysClub,
  privacy,
  sayNoToWeb3,
  webDesign,
] as const satisfies Banner[];
