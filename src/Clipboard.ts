import * as clipboard from "clipboard-polyfill/text";

/**
 * Clipboard utility.
 * Provides async read/write access to the system clipboard.
 */
export default class {

  /**
   * Write a string to the system clipboard.
   *
   * @param  {string}        str The text to copy.
   * @return {Promise<void>}
   */
  public static async save(str: string): Promise<void> {
    return clipboard.writeText(str);
  }
}
