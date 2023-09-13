import { encode, decode } from "../";

describe("Bitwise Encoding", () => {
  test("String: tacocat", () => {
    const inputText = "tacocat";
    const expectedEncoded = [267487694, 125043731];

    expect(encode(inputText)).toEqual(expectedEncoded);
    expect(decode(expectedEncoded)).toEqual(inputText);
  });

  test("String: never odd or even", () => {
    const inputText = "never odd or even";
    const expectedEncoded = [
      267657050, 233917524, 234374596, 250875466, 17830160,
    ];

    expect(encode(inputText)).toEqual(expectedEncoded);
    expect(decode(expectedEncoded)).toEqual(inputText);
  });

  test("String: lager, sir, is regal", () => {
    const inputText = "lager, sir, is regal";
    const expectedEncoded = [
      267394382, 167322264, 66212897, 200937635, 267422503,
    ];

    expect(encode(inputText)).toEqual(expectedEncoded);
    expect(decode(expectedEncoded)).toEqual(inputText);
  });

  test("String: go hang a salami, I'm a lasagna hog", () => {
    const inputText = "go hang a salami, I'm a lasagna hog";
    const expectedEncoded = [
      200319795, 133178981, 234094669, 267441422, 78666124, 99619077, 267653454,
      133178165, 124794470,
    ];

    expect(encode(inputText)).toEqual(expectedEncoded);
    expect(decode(expectedEncoded)).toEqual(inputText);
  });

  test("String: egad, a base tone denotes a bad age", () => {
    const inputText = "egad, a base tone denotes a bad age";
    const expectedEncoded = [
      267389735, 82841860, 267651166, 250793668, 233835785, 267665210, 99680277,
      133170194, 124782119,
    ];

    expect(encode(inputText)).toEqual(expectedEncoded);
    expect(decode(expectedEncoded)).toEqual(inputText);
  });
});
