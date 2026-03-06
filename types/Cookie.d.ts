export default class {
    /**
     * Set a cookie value.
     *
     * @param {string} key   Cookie name.
     * @param {string} value Cookie value.
     */
    static set(key: string, value: string): void;
    /**
     * Get a cookie value by name.
     *
     * @param  {string}           key Cookie name.
     * @return {string|undefined}     The cookie value, or `undefined` if not found.
     */
    static get(key: string): string | undefined;
    /**
     * Remove a cookie by name.
     *
     * @param {string} key Cookie name.
     */
    static remove(key: string): void;
}
