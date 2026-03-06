export default class {
    /**
     * Parse a user-agent string and return browser information.
     *
     * @param  {string} ua User-agent string (e.g. `navigator.userAgent`).
     * @return {{ platform: string, osName: string, osVersion: number|null, browserName: string }}
     *   Detected browser info. `osVersion` is `null` when it cannot be determined.
     */
    static parse(ua: string): {
        platform: string;
        osName: string;
        osVersion: number | null;
        browserName: string;
    };
}
