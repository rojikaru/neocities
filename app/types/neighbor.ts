import type { Banner } from "./banner";

/**
 * Represents a neighbor to be displayed anywhere.
 */
export interface Neighbor extends Banner {
  /**
   * The URL to link to when the banner is clicked.
   * @example "https://neocities.org/"
   */
  link: string;
}

export const isNeighbor = (content: Banner): content is Neighbor =>
  "link" in content;
