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
   // Test case # 2
    test("returns NaN for non-numeric input", () => {
    const result = calculateCanvasSize("xyz", "10");
    expect(result).toEqual(NaN);
  });
  // Test case # 3
   test("parseInt and ignores decimals i.e., 10.7 = 10 ", () => {
    const result = calculateCanvasSize("10.7", "2.5"); 
    expect(result).toEqual(20);
  });
   // Test case # 4
  test("returns negative area value for negative values", () => {
    const result = calculateCanvasSize("-10", "5");
    expect(result).toEqual(-50);
  });
});
