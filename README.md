# Project README.md

## Project Mission Statement

The project aims to provide a bitwise string encoding and decoding functionality. It allows users to encode strings by splitting them into segments of four characters and encoding each segment using bitwise encoding. The encoded values can then be decoded back to retrieve the original string. The project provides an intuitive and efficient solution for encoding and decoding strings using bitwise operations.

## Tech Stack

The project is built using the following technologies:

- React: JavaScript library for building user interfaces.
- HTML: Markup language for creating the structure of web pages.
- CSS: Style sheet language for designing the presentation of web pages.

## Development Environment Setup

To set up the development environment for this project, follow the steps below:

1. Clone the project repository from [GitHub](https://github.com/keven-chhen/bitwise-string-codec-app).
2. Install Node.js and npm (Node Package Manager) if they are not already installed on your system.
3. Navigate to the project directory in your terminal or command prompt.
4. Run the command `npm install` to install the project dependencies.
5. Once the dependencies are installed, you can start the development server using the command `npm start`.
6. Open your web browser and visit `http://localhost:3000` to access the application.

## Operation Details

The project consists of a single component named `App`, which provides a user interface for encoding and decoding strings. The main functionality is implemented in the `encode` and `decode` functions located in the `bitwise-string-codec/index.js` file.

The `App` component renders a text area where the user can enter their text. Upon clicking the "Convert" button, the input value is encoded using the `encode` function. The encoded values are then displayed in the output section of the UI.

Additionally, the `decode` function is used to perform a decoding and assertion process. The decoded value is compared with the original input value, and if they match, a success message is logged to the console. Otherwise, an error message is logged.

## Testing Details

The project includes a test suite located in the `bitwise-string-codec/__tests__/sampletestcase.js` file. The test suite uses the Jest testing framework to verify the correctness of the encoding and decoding functions.

The test suite includes multiple test cases that cover different input strings. Each test case compares the output of the `encode` and `decode` functions with the expected encoded and decoded values, respectively. If the output matches the expected values, the test case passes; otherwise, it fails.

To run the test suite, execute the command `npm test` in the project directory. The test results will be displayed in the terminal or command prompt, indicating the success or failure of each test case.

---
