import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });
  // Test case # 1
  test("returns 0 when area is 0", () => {
    const result = paintRequiredCalculator(0, 10);
    expect(result).toEqual(0);
  });
  //Test case # 2
  test("returns Infinity when coveragePerLiter is 0", () => {
    const result = paintRequiredCalculator(100, 0);
    expect(result).toEqual(Infinity);
  });
});
