/**
 * Collection utility.
 * Array helper methods for common operations.
 */
export default class {

  /**
   * Remove duplicate values from an array.
   *
   * @param  {any[]} items The array to deduplicate.
   * @return {any[]}       A new array with duplicates removed (first occurrence kept).
   */
  public static unique(items: any[]): any {
    return items.filter((element, index, items) => items.indexOf(element) === index);
  }
}
