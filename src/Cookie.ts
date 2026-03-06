/**
 * Cookie utility.
 * Simple get / set / remove wrapper around js-cookie.
 */
import Cookies from 'js-cookie';

export default class {

  /**
   * Set a cookie value.
   *
   * @param {string} key   Cookie name.
   * @param {string} value Cookie value.
   */
  static set(key: string, value: string): void {
    Cookies.set(key, value);
  }

  /**
   * Get a cookie value by name.
   *
   * @param  {string}           key Cookie name.
   * @return {string|undefined}     The cookie value, or `undefined` if not found.
   */
  static get(key: string): string|undefined {
    return Cookies.get(key);
  }

  /**
   * Remove a cookie by name.
   *
   * @param {string} key Cookie name.
   */
  static remove(key: string): void {
    Cookies.remove(key);
  }
}
