/**
 * Date utility.
 * Formatting, ranges, arithmetic and validation powered by Moment.js.
 */
import moment from 'moment';

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
  public static format(...args: string[]): string {
    let format = 'YYYY-MM-DDTHH:mm:ssZ';
    let date = moment();
    if (args.length === 1) {
      if (moment(args[0]).isValid()) {
        date = moment(args[0]);
      } else {
        format = args[0];
      }
    } else if (args.length === 2) {
      if (moment(args[0]).isValid()) {
        date = moment(args[0]);
        format = args[1];
      } else {
        throw new Error('Invalid argument');
      }
    }
    return date.format(format);
  }

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
  public static timesOneDay(...args: string[]): string[] {
    let format = 'HH:mm';
    let startHour = 0;
    if (args.length === 1) {
      if (moment(args[0], 'H').isValid()) {
        startHour = parseInt(args[0], 10);
      } else {
        format = args[0];
      }
    } else if (args.length === 2) {
      if (moment(args[0], 'H').isValid()) {
        startHour = parseInt(args[0], 10);
        format = args[1];
      } else {
        throw new Error('Invalid argument');
      }
    }
    const date = moment({ hour: startHour, minute: 0});
    return Array
      .from({ length: 25 }, (_, i) => i)
      .reduce((acc: string[], addHours: number) => {
        acc.push(moment({ hour: (startHour + addHours) % 24, minute: 0 }).format(format));
        return acc;
      }, []);
  }

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
  public static daysInMonth(...args: string[]): string[] {
    let month = moment().format('YYYY-MM');
    let format = 'D';
    if (args.length === 1) {
      if (moment(args[0], 'YYYY-MM').isValid()) {
        month = args[0];
      } else {
        format = args[0];
      }
    } else if (args.length === 2) {
      if (moment(args[0], 'YYYY-MM').isValid()) {
        month = args[0];
        format = args[1];
      } else {
        throw new Error('Invalid argument');
      }
    }
    const date = moment(month, 'YYYY-MM');
    return Array
      .from({ length: date.daysInMonth() }, (_, i) => i)
      .reduce((acc: string[], day: number) => {
        const addDays = day === 0 ? 0 : 1;
        acc.push(date.add(addDays, 'days').format(format));
        return acc;
      }, []);
  }

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
  public static range(
    step: number,
    unit: 'years'|'months'|'weeks'|'days'|'hours'|'minutes'|'seconds',
    start: string,
    end: string,
    format = 'YYYY-MM-DDTHH:mm:ssZ'
  ): string[] {
    const range = [];
    for (let target=moment(start).clone(); target.isSameOrBefore(moment(end)); target.add(step, unit)) {
      range.push(target.format(format));
    }
    return range;
  }

  /**
   * Add a duration to a date.
   *
   * @param  {string}                                                      date   Base date string.
   * @param  {number}                                                      step   Amount to add.
   * @param  {'years'|'months'|'weeks'|'days'|'hours'|'minutes'|'seconds'} unit   Duration unit.
   * @param  {string}                                                      format Output format (default: ISO 8601).
   * @return {string}                                                             Formatted result date.
   */
  public static add(date: string, step: number, unit: 'years'|'months'|'weeks'|'days'|'hours'|'minutes'|'seconds', format = 'YYYY-MM-DDTHH:mm:ssZ'): string {
    return moment(date).add(step, unit).format(format);
  }

  /**
   * Validate whether a string represents a valid date.
   *
   * @param  {string}           date   The date string to validate.
   * @param  {string|undefined} format Expected format (when omitted, any parseable format is accepted).
   * @return {boolean}                 `true` if valid.
   */
  public static isValid(date: string, format: string|undefined = undefined): boolean {
    if (format !== undefined) {
      return moment(date, format, true).isValid();
    } else {
      return moment(date).isValid();
    }
  }
}
