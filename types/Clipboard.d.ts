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
    static save(str: string): Promise<void>;
}
