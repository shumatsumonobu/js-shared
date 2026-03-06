/**
 * Graphics utility.
 * Canvas drawing helpers for points, rectangles, media layout and coordinate math.
 */
import ICoordinate from '~/interfaces/ICoordinate';
import IRect from '~/interfaces/IRect';
import IDimensions from '~/interfaces/IDimensions';
export default class {
    /**
     * Return the intrinsic (natural) dimensions of a media element or ImageData.
     *
     * @param  {HTMLImageElement|HTMLVideoElement|ImageData} media Target media.
     * @return {IDimensions} Intrinsic width and height.
     */
    static getMediaDimensions(media: HTMLImageElement | HTMLVideoElement | ImageData): IDimensions;
    /**
     * Check whether a media element has finished loading its resource.
     *
     * @param  {HTMLImageElement|HTMLVideoElement} media Target media element.
     * @return {boolean} `true` if the resource is ready to use.
     */
    static isMediaLoaded(media: HTMLImageElement | HTMLVideoElement): boolean;
    /**
     * Return the inner dimensions of a media element (excluding padding).
     *
     * @param  {HTMLImageElement|HTMLVideoElement} media Target media element.
     * @return {IDimensions} Content-box width and height.
     */
    static getInnerDimensions(media: HTMLImageElement | HTMLVideoElement): IDimensions;
    /**
     * Return a Promise that resolves when a media element finishes loading.
     *
     * @param  {HTMLImageElement|HTMLVideoElement} media Target media element.
     * @return {Promise<Event>} Resolves with the load event, rejects on error.
     */
    static awaitMediaLoaded(media: HTMLImageElement | HTMLVideoElement): Promise<Event>;
    /**
     * Calculate the four corner coordinates of a rectangle after rotation.
     *
     * @param  {number} x      Top-left X position.
     * @param  {number} y      Top-left Y position.
     * @param  {number} width  Rectangle width.
     * @param  {number} height Rectangle height.
     * @param  {number} degree Rotation angle in degrees (default: 0).
     * @return {ICoordinate[]}  Corners in order: top-left, top-right, bottom-right, bottom-left.
     */
    static getRotatedRectCoordinates(x: number, y: number, width: number, height: number, degree?: number): ICoordinate[];
    /**
     * Rotate a point (x1, y1) around a center (x2, y2) by the given angle.
     *
     * @param  {number} x1     Point X.
     * @param  {number} y1     Point Y.
     * @param  {number} x2     Center of rotation X.
     * @param  {number} y2     Center of rotation Y.
     * @param  {number} degree Rotation angle in degrees.
     * @return {ICoordinate}   Rotated coordinate.
     */
    private static getRotationCoordinate;
    /**
     * Calculate the centroid (average) of multiple coordinates.
     *
     * @param  {...ICoordinate} coordinates One or more coordinate objects.
     * @return {ICoordinate}                Center coordinate.
     */
    static getCenterCoordinate(...coordinates: ICoordinate[]): ICoordinate;
    /**
     * Calculate the angle (in degrees) between two points.
     *
     * @param  {number} x1 First point X.
     * @param  {number} y1 First point Y.
     * @param  {number} x2 Second point X.
     * @param  {number} y2 Second point Y.
     * @return {number}    Angle in degrees.
     */
    static getAngleBetweenCoordinates(x1: number, y1: number, x2: number, y2: number): number;
    /**
     * Calculate the Euclidean distance between two points.
     *
     * @param  {number} x1 First point X.
     * @param  {number} y1 First point Y.
     * @param  {number} x2 Second point X.
     * @param  {number} y2 Second point Y.
     * @return {number}    Distance in pixels.
     */
    static getDistance(x1: number, y1: number, x2: number, y2: number): number;
    /**
     * Return a bounding box that covers the media element within its container,
     * accounting for the CSS `object-fit` property.
     *
     * @param  {HTMLElement}                      container Parent container element.
     * @param  {HTMLImageElement|HTMLVideoElement} media     Media element inside the container.
     * @return {IRect}                                      Bounding rect relative to the container.
     */
    static getOverlayRect(container: HTMLElement, media: HTMLImageElement | HTMLVideoElement): IRect;
    /**
     * Return the rendered (visible) rect of a media element, accounting for
     * `object-fit` and `object-position` CSS properties.
     *
     * The returned rect describes both the source crop area and destination
     * position/size as ratios of the visible element dimensions.
     *
     * @param  {HTMLImageElement|HTMLVideoElement} media Target media element.
     * @return {IRect} Rendered rect with optional destination fields:
     *   - `x`, `y`, `width`, `height`               — source crop area.
     *   - `destinationX`, `destinationY`             — position ratio on the visible area.
     *   - `destinationWidth`, `destinationHeight`    — size ratio on the visible area.
     */
    static getRenderedRect(media: HTMLImageElement | HTMLVideoElement): IRect;
    /**
     * Draw a filled circle (point) on a canvas.
     *
     * @param {HTMLCanvasElement} canvas          Target canvas.
     * @param {number}           x               Center X.
     * @param {number}           y               Center Y.
     * @param {object}           [options]        Drawing options.
     * @param {number}           [options.radius] Circle radius (default: 3).
     * @param {string}           [options.color]  Fill color (default: accessibleBlue).
     */
    static drawPoint(canvas: HTMLCanvasElement, x: number, y: number, { radius, color }?: {
        radius?: number;
        color?: string;
    }): void;
    /**
     * Draw a point at the centroid of the given coordinates.
     *
     * @param {HTMLCanvasElement} canvas          Target canvas.
     * @param {ICoordinate[]}    coordinates     Array of coordinate objects.
     * @param {object}           [options]        Drawing options.
     * @param {number}           [options.radius] Circle radius (default: 3).
     * @param {string}           [options.color]  Fill color (default: accessibleBlue).
     */
    static drawCenterPoint(canvas: HTMLCanvasElement, coordinates: ICoordinate[], { radius, color }?: {
        radius?: number;
        color?: string;
    }): void;
    /**
     * Draw a rectangle on a canvas, optionally rotated and/or filled.
     *
     * @param {HTMLCanvasElement} canvas               Target canvas.
     * @param {number}           x                    Top-left X.
     * @param {number}           y                    Top-left Y.
     * @param {number}           width                Rectangle width.
     * @param {number}           height               Rectangle height.
     * @param {object}           [options]             Drawing options.
     * @param {number}           [options.degree]      Rotation angle in degrees (default: 0).
     * @param {number}           [options.lineWidth]   Stroke width (default: 2).
     * @param {string}           [options.lineColor]   Stroke color (default: accessibleBlue).
     * @param {number}           [options.shadowBlur]  Shadow blur radius (default: 0).
     * @param {string}           [options.shadowColor] Shadow color (default: accessibleBlue).
     * @param {string}           [options.fill]        Fill color (default: none).
     */
    static drawRectangle(canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number, { degree, lineWidth, lineColor, shadowBlur, shadowColor, fill }?: {
        degree?: number;
        lineWidth?: number;
        lineColor?: string;
        shadowBlur?: number;
        shadowColor?: string;
        fill?: string;
    }): void;
    /**
     * Draw only the corner marks of a rectangle (L-shaped brackets at each corner).
     *
     * @param {HTMLCanvasElement} canvas               Target canvas.
     * @param {number}           x                    Top-left X.
     * @param {number}           y                    Top-left Y.
     * @param {number}           width                Rectangle width.
     * @param {number}           height               Rectangle height.
     * @param {object}           [options]             Drawing options.
     * @param {number}           [options.lineWidth]   Stroke width (default: 2).
     * @param {string}           [options.lineColor]   Stroke color (default: accessibleBlue).
     * @param {number}           [options.shadowBlur]  Shadow blur radius (default: 0).
     * @param {string}           [options.shadowColor] Shadow color (default: accessibleBlue).
     */
    static drawRectangleCorners(canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number, { lineWidth, lineColor, shadowBlur, shadowColor }?: {
        lineWidth?: number;
        lineColor?: string;
        shadowBlur?: number;
        shadowColor?: string;
    }): void;
    /**
     * Clear the entire canvas.
     *
     * @param {HTMLCanvasElement} canvas Target canvas to clear.
     */
    static clearCanvas(canvas: HTMLCanvasElement): void;
    /**
     * Flip the canvas content horizontally (mirror).
     *
     * @param {HTMLCanvasElement} canvas Target canvas to flip.
     */
    static flipHorizontal(canvas: HTMLCanvasElement): void;
}
