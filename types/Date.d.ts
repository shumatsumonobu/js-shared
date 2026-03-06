export default class {
    /**
     * Format a date string.
     *
     * - No arguments  → format the current date/time with ISO 8601.
     * - One argument  → treated as a format string if it is not a valid date,
     *                    otherwise treated as a date and formatted with ISO 8601.
     * - Two arguments → `(date, format)`.
     *
     * @param  {...string} args Date and/or format string.
     * @return {string}         Formatted date string.
     */
    static format(...args: string[]): string;
    /**
     * Generate an array of hourly time labels spanning a full day (25 entries).
     *
     * - No arguments  → starts at 00:00 with `'HH:mm'` format.
     * - One argument  → start hour (number) or format string.
     * - Two arguments → `(startHour, format)`.
     *
     * @param  {...string} args Start hour and/or format string.
     * @return {string[]}       Array of 25 formatted time strings.
     */
    static timesOneDay(...args: string[]): string[];
    /**
     * Return an array of day labels for a given month.
     *
     * - No arguments  → current month with `'D'` format.
     * - One argument  → year-month string (`'YYYY-MM'`) or format string.
     * - Two arguments → `(yearMonth, format)`.
     *
     * @param  {...string} args Year-month and/or format string.
     * @return {string[]}       Array of formatted day strings.
     */
    static daysInMonth(...args: string[]): string[];
    /**
     * Generate consecutive dates at regular intervals between a start and end date.
     *
     * @param  {number}                                                      step   Interval size.
     * @param  {'years'|'months'|'weeks'|'days'|'hours'|'minutes'|'seconds'} unit   Interval unit.
     * @param  {string}                                                      start  Start date string.
     * @param  {string}                                                      end    End date string (inclusive).
     * @param  {string}                                                      format Output format (default: ISO 8601).
     * @return {string[]}                                                           Array of formatted date strings.
     */
    static range(step: number, unit: 'years' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds', start: string, end: string, format?: string): string[];
    /**
     * Add a duration to a date.
     *
     * @param  {string}                                                      date   Base date string.
     * @param  {number}                                                      step   Amount to add.
     * @param  {'years'|'months'|'weeks'|'days'|'hours'|'minutes'|'seconds'} unit   Duration unit.
     * @param  {string}                                                      format Output format (default: ISO 8601).
     * @return {string}                                                             Formatted result date.
     */
    static add(date: string, step: number, unit: 'years' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds', format?: string): string;
    /**
     * Validate whether a string represents a valid date.
     *
     * @param  {string}           date   The date string to validate.
     * @param  {string|undefined} format Expected format (when omitted, any parseable format is accepted).
     * @return {boolean}                 `true` if valid.
     */
    static isValid(date: string, format?: string | undefined): boolean;
}
