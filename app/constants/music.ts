const musicFiles = [
  "omori-not-so-empty-house.ogg",
  "sans.mp3",
  "nicosnextbotsost-saferoom.mp3",
  "undertale-home.mp3",
] as const;

const hostingPrefix =
  "https://raw.githubusercontent.com/rojikaru/neocities/refs/heads/main/public/music/";

export const musicPaths = musicFiles.map(
  (path) => `${hostingPrefix}${path}`,
);
