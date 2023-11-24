import { getLevel } from "../src/js/level.js";
import fetchData from "../src/js/http.js";

jest.mock("../src/js/http.js");

beforeEach(() => {
  jest.resetAllMocks();
});


test.each([
  [1, {status: "ok", level: "advanced"}, "Ваш текущий уровень: advanced"],
  [2, {status: "false"}, "Информация об уровне временно недоступна"],
])(
  "test user %i", (id, response, expected) => {
    console.log(response)
    fetchData.mockReturnValue(response);
    let result = getLevel(id);
    expect(result).toBe(expected);
  }
);