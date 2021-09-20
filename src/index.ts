/**
 * An *incredibly* complex util function that returns the value of a random index (from a provided array).
 */

import { getRandomValue } from "./random";

/**
 * Returns a random item of an array
 * @param data The array
 * @returns A random item of the given array
 */
export function random<T>(data: T[]): T {
    const run = getRandomValue<T>(data);

    return run;
}
