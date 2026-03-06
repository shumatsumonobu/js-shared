/**
 * Rectangle with position, size, and optional destination mapping.
 */
export default interface IRect {
    /** Left edge of the source crop area. */
    x: number;
    /** Top edge of the source crop area. */
    y: number;
    /** Width of the source crop area. */
    width: number;
    /** Height of the source crop area. */
    height: number;
    /** Horizontal position ratio on the destination frame (0-1). */
    destinationX?: number;
    /** Vertical position ratio on the destination frame (0-1). */
    destinationY?: number;
    /** Width ratio on the destination frame (0-1). */
    destinationWidth?: number;
    /** Height ratio on the destination frame (0-1). */
    destinationHeight?: number;
}
