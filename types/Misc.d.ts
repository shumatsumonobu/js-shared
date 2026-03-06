/**
 * Miscellaneous utility.
 * Runtime environment detection and global object access.
 */
export default class {
    private static fallbackGlobalObject;
    /**
     * Detect whether the current runtime is Node.js.
     *
     * @return {boolean} `true` in Node.js, `false` in a browser.
     */
    static isNodeEnvironment(): boolean;
    /**
     * Return the global object for the current runtime.
     *
     * @return {T} `window` in browsers, `global` in Node.js, or `self` in Web Workers.
     */
    static getGlobal<T>(): T;
}
