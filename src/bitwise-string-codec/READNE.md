# `Bitwise String Encoding/Decoding`

This module provides functions to encode and decode strings using bitwise encoding.

## Functions

### encode(rawText: string): number[]

Encodes a string by splitting it into segments of four characters and encoding each segment.

rawText (string): The input string to encode.
Returns an array of encoded values.

### decode(encoded: number[]): string

Decodes an array of encoded values to retrieve the original string.

encoded (number[]): The array of encoded values.
Returns the decoded string.

## Usage

```js
import { encode, decode } from "./bitwise-string-codec";

const inputText = "tacocat";

// Encode the string
const encoded = encode(inputText);
console.log(encoded); // Output: [267487694, 125043731]

// Decode the encoded values
const decoded = decode(encoded);
console.log(decoded); // Output: "tacocat"
```
