/**
 * Random utility.
 * Generate random integers, pick array elements, and create HSL colors.
 */
export default class {

  /**
   * Return a random integer between `start` and `stop` (inclusive).
   *
   * @param  {number} start Lower bound (inclusive).
   * @param  {number} stop  Upper bound (inclusive).
   * @return {number}       Random integer in the range [start, stop].
   */
  public static randInt(start: number, stop: number): number {
    start = Math.ceil(start);
    stop = Math.floor(stop);
    return Math.floor(Math.random() * (stop - start + 1)) + start;
  }

  /**
   * Pick a random element from an array.
   *
   * @param  {any[]} collection Source array.
   * @return {any}              A randomly selected element.
   */
  public static sample(collection: any[]): any {
    return collection[Math.floor(Math.random() * collection.length)];
  }

  /**
   * Generate a random HSL color string within the given ranges.
   *
   * @param  {object} options        HSL range options.
   * @param  {number} [options.hmin] Minimum hue (0-360, default: 0).
   * @param  {number} [options.hmax] Maximum hue (0-360, default: 360).
   * @param  {number} [options.smin] Minimum saturation (0-100, default: 0).
   * @param  {number} [options.smax] Maximum saturation (0-100, default: 100).
   * @param  {number} [options.lmin] Minimum lightness (0-100, default: 0).
   * @param  {number} [options.lmax] Maximum lightness (0-100, default: 100).
   * @return {string}                HSL color string, e.g. `'hsl(210, 80%, 50%)'`.
   */
  public static randHSL({ hmax = 0, hmin = 360, smax = 0, smin = 100, lmax = 0, lmin = 100 }: { hmax?: number, hmin?: number, smax?: number, smin?: number, lmax?: number, lmin?: number }): string {
    const h = parseInt((Math.random() * (hmax - hmin + 1)).toString(), 10) + hmin;
    const s = parseInt((Math.random() * (smax - smin + 1)).toString(), 10) + smin;
    const l = parseInt((Math.random() * (lmax - lmin + 1)).toString(), 10) + lmin;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
}
