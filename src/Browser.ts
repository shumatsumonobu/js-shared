/**
 * Browser detection utility.
 * Parses user-agent strings to identify platform, OS and browser.
 */
import Bowser from 'bowser';

export default class {

  /**
   * Parse a user-agent string and return browser information.
   *
   * @param  {string} ua User-agent string (e.g. `navigator.userAgent`).
   * @return {{ platform: string, osName: string, osVersion: number|null, browserName: string }}
   *   Detected browser info. `osVersion` is `null` when it cannot be determined.
   */
  public static parse(ua: string): { platform: string, osName: string, osVersion: number|null, browserName: string} {
    const parser = Bowser.getParser(ua);
    const platform = parser.getPlatformType();
    const browserName = parser.getBrowserName();
    let osName = parser.getOSName();
    let osVersion: string|number|null = parser.getOSVersion();

    // Handle OS versions like "Catalina 10.15" → osName: "macOS Catalina", osVersion: 10.15
    const matched = osVersion.match(/^([A-Za-z]+)\s+([\d.]+)$/);
    if (matched) {
      osName += ` ${matched[1]}`;
      osVersion = matched[2];
    }
    osVersion = <number>parseFloat(osVersion);
    if(isNaN(osVersion)) osVersion = null;
    return {
      platform,
      osName,
      osVersion,
      browserName
    };
  }
}
