/**
 * Type utility.
 * Runtime type checking helpers.
 */
export default class {
    /**
     * Check whether a function is an `async` function.
     *
     * @example
     * import { Types } from 'js-shared';
     *
     * async function myAsyncFunction() {}
     * function myFunction() {}
     *
     * Types.isAsync(myAsyncFunction); // => true
     * Types.isAsync(myFunction);      // => false
     *
     * @param  {Function} value The function to check.
     * @return {boolean}        `true` if the function is async.
     */
    static isAsync(value: Function): boolean;
}
