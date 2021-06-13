/**
 * Custom error generator
 *
 * @param {Integer} code
 * @param {String} message
 * @returns
 */
export default function (code, message) {
  const error = new Error(message);
  error.statusCode = code;
  return error;
}
