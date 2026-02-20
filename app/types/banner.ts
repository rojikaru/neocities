export interface Banner {
  /**
   * The name of the banner, used for display purposes.
   *
   * Also the alt text for the banner image.
   * @example "Neocities Logo"
   */
  name: string;

  /**
   * The URL of the banner image.
   * @example "/neocities.png"
   */
  img: string;
}