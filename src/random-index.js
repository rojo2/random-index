import linear from "@rojo2/linear-interpolation";

/**
 * Returns an array random index.
 *
 * @param {Array} list - Array of values
 * @param {Function} [random=Math.random] - Random generator function to be used
 * @returns {number} - Returns a random index (within 0 and list.length - 1)
 */
export default function randomIndex(list, random = Math.random) {
  if (!Array.isArray(list)) {
    throw new Error("Invalid list, it must be an Array");
  }
  return Math.round(linear(random(), 0, list.length - 1));
}

