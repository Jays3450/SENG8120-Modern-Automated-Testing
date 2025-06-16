#  Paint Calculator - Automated Testing (SENG8120)

## 🧾 Overview
This project demonstrates testing of a simple TypeScript application that:
1. Calculates the area of a canvas (length × width)
2. Calculates the paint required based on area and coverage

It uses **Jest** for unit testing, following basic TDD principles.

**Formulas:**
- `Area = Length × Width`
- `Paint Required = Area / CoveragePerLiter`

---

##  Testing Instructions

### Prerequisites

- Node.js installed
- TypeScript installed: `npm install -g typescript`
- Jest setup for TypeScript (via ts-jest)

## 📁 Files

- `main.ts` – Entry script for the application
- `calculateCanvasSize.ts` – Function to calculate canvas area
- `paintRequiredCalculator.ts` – Function to calculate paint required
- `calculateCanvasSize.test.ts` – Unit tests for area calculation
- `paintRequiredCalculator.test.ts` – Unit tests for paint calculation
- `README.md` – Project documentation


##  Implemented Test Cases

###  `calculateCanvasSize`

| Test Case Description             | Input (`length`, `width`) | Expected Output |
|----------------------------------|----------------------------|-----------------|
| Returns correct result           | `"10"`, `"100"`            | `1000`          |
| Returns 0 when one value is 0    | `"0"`, `"50"`              | `0`             |
| Returns NaN for non-numeric input| `"abc"`, `"10"`            | `NaN`           |
| Ignores decimals using parseInt | `"10.7"`, `"2.5"`          | `20`            |
| Handles negative values          | `"-10"`, `"5"`             | `-50`           |


###  `paintRequiredCalculator`

| Test Case Description                  | Input (`area`, `coverage`) | Expected Output |
|----------------------------------------|-----------------------------|-----------------|
| Returns correct result                 | `50`, `10`                  | `5`             |
| Returns 0 when area is 0               | `0`, `10`                   | `0`             |
| Returns Infinity when coverage is 0    | `100`, `0`                  | `Infinity`      |
| Returns decimal value accurately       | `25`, `4`                   | `6.25`          |
| Handles small coverage values          | `10`, `0.01`                | `1000`          |


##  Unimplemented Test Cases (Planned but Not Yet Implemented Test Cases)

### `calculateCanvasSize`

| Test Case Description                         | Example Input           | Expected Behavior           |
|----------------------------------------------|--------------------------|------------------------------|
| Should handle empty strings                  | `""`, `"5"`              | Return `NaN` or error        |
| Should trim whitespace before parsing        | `" 15 "`, `"10"`         | Return `150`                 |
| Should reject non-numeric strings            | `"12abc"`, `"5"`         | Return `NaN`                 |
| Should handle very large numbers             | `"999999"`, `"999999"`   | Return large number          |
| Should reject null or undefined              | `null`, `"10"`           | Return `NaN` or throw error  |


### `paintRequiredCalculator`

| Test Case Description                         | Example Input            | Expected Behavior            |
|----------------------------------------------|---------------------------|-------------------------------|
| Should handle undefined inputs               | `undefined`, `10`         | Return `NaN` or throw error   |
| Should reject negative area values           | `-10`, `10`               | Return negative or error      |
| Should validate positive coverage values     | `10`, `-5`                | Return negative or error      |
| Should always return a number                | `10`, `"abc"`             | Return `NaN` or throw error   |
| Should round output to 2 decimal places      | `25`, `3.3333`            | Return `7.50` (optional rule) |
