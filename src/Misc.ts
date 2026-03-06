/**
 * Miscellaneous utility.
 * Runtime environment detection and global object access.
 */
export default class {

  private static fallbackGlobalObject: {} = {};

  /**
   * Detect whether the current runtime is Node.js.
   *
   * @return {boolean} `true` in Node.js, `false` in a browser.
   */
  public static isNodeEnvironment(): boolean {
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
  }

  /**
   * Return the global object for the current runtime.
   *
   * @return {T} `window` in browsers, `global` in Node.js, or `self` in Web Workers.
   */
  public static getGlobal<T>(): T {
    return (this.isNodeEnvironment()
      ? global
      : typeof window !== 'undefined'
      ? window
      : typeof self !== 'undefined'
      ? self
      : this.fallbackGlobalObject) as T;
  }
}
