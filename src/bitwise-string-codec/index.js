/**
 * This module provides functions to encode and decode strings using bitwise encoding.
 * The encode function splits the input string into segments of four characters and encodes each segment.
 * The decode function decodes an array of encoded values to retrieve the original string.
 * The encode4 and decode4 functions are internal functions used for encoding and decoding four-character segments.
 */

/**
 * Encodes a string by splitting it into segments of four characters and encoding each segment.
 * @param {string} rawText - The input string to encode.
 * @returns {number[]} An array of encoded values.
 */
export const encode = (rawText) => {
  const encoded = [];

  for (let i = 0; i < rawText.length; i += 4) {
    encoded.push(encode4(rawText.slice(i, i + 4)));
  }

  return encoded;
};

/**
 * Decodes an array of encoded values to retrieve the original string.
 * @param {number[]} encoded - The array of encoded values.
 * @returns {string} The decoded string.
 */
export const decode = (encoded) => {
  const rawTextSegments = [];

  for (let i = 0; i < encoded.length; i++) {
    const decoded4 = decode4(encoded[i]);
    rawTextSegments.push(decoded4);
  }

  return rawTextSegments.join("");
};

/**
 * Encodes a four-character string using bitwise encoding.
 * @param {string} rawText - The input string to encode (should have exactly four characters).
 * @returns {number} The encoded value.
 */
const encode4 = (rawText) => {
  let encodedValue = 0;

  // Pad with null characters if the length of rawText is less than four
  for (let i = rawText.length; i < 4; ++i) {
    rawText += "\0";
  }

  // Perform bitwise encoding
  for (let i = 0; i < 32; ++i) {
    const index = Math.floor(i / 8);
    const pos = i % 8;
    if (rawText.charCodeAt(index) & (1 << pos))
      encodedValue |= 1 << (pos * 4 + index);
  }

  return encodedValue;
};

/**
 * Decodes an encoded value to retrieve the original four-character string.
 * @param {number} encodedValue - The encoded value.
 * @returns {string} The decoded four-character string.
 */
const decode4 = (encodedValue) => {
  const rawTextCharCodes = [0, 0, 0, 0];

  // Perform bitwise decoding
  for (let i = 0; i < 32; ++i) {
    const index = Math.floor(i / 8);
    const pos = i % 8;
    if (encodedValue & (1 << (pos * 4 + index))) {
      rawTextCharCodes[index] |= 1 << pos;
    }
  }

  // Remove null characters from the end of the string
  const rawText = rawTextCharCodes
    .map((charCode) => String.fromCharCode(charCode))
    .join("")
    .replace(/\0+$/, "");

  return rawText;
};
