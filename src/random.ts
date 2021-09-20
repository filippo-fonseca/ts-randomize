/**
 * Returns a random item of an array
 * @param data The array
 * @returns A random item of the given array
 */
export function getRandomValue<T>(data: T[]) {
  const index = Math.floor(Math.random() * data.length);
  return data[index];
}
