import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })
  // Test case # 1
   test("returns 0 when one value is 0", () => {
    const result = calculateCanvasSize("0", "50");
    expect(result).toEqual(0);
  });
});
