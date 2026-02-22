const originalMusicPaths = [
  "/music/omori-not-so-empty-house.ogg",
  "/music/sans.mp3",
  "/music/nicosnextbotsost-saferoom.mp3",
  "/music/undertale-home.mp3",
] as const;

const hostingPrefix =
  "https://raw.githubusercontent.com/rojikaru/neocities/refs/heads/main/public";

export const musicPaths = originalMusicPaths.map(
  (path) => `${hostingPrefix}${path}` as const,
);
