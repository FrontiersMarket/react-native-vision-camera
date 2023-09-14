import type { CameraDevice, CameraDeviceFormat } from '../CameraDevice';
/**
 * Compares two devices by the following criteria:
 * * `wide-angle-camera`s are ranked higher than others
 * * Devices with more physical cameras are ranked higher than ones with less. (e.g. "Triple Camera" > "Wide-Angle Camera")
 *
 * > Note that this makes the `sort()` function descending, so the first element (`[0]`) is the "best" device.
 *
 * @example
 * ```ts
 * const devices = camera.devices.sort(sortDevices)
 * const bestDevice = devices[0]
 * ```
 * @method
 */
export declare const sortDevices: (left: CameraDevice, right: CameraDevice) => number;
/**
 * Sort formats by resolution and aspect ratio difference (to the Screen size).
 *
 * > Note that this makes the `sort()` function descending, so the first element (`[0]`) is the "best" device.
 */
export declare const sortFormats: (left: CameraDeviceFormat, right: CameraDeviceFormat) => number;
//# sourceMappingURL=FormatFilter.d.ts.map