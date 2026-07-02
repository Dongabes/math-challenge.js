# Random Number Math Operations

A small JavaScript exercise that generates two random numbers and performs basic arithmetic operations on them, displaying the results using template literals.

## What It Does

- Generates a random integer `x` between 1 and 100
- Generates a random integer `y` between 1 and 50
- Calculates and logs the following, formatted as readable equations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
  - Remainder (modulo)

## Example Output

```
73 + 22 = 95
73 - 22 = 51
73 * 22 = 1606
73 / 22 = 3.3181818181818183
73 % 22 = 7
```

(Values will differ each run since `x` and `y` are randomly generated.)

## How to Run

```bash
node script.js
```

## Key Concepts Practiced

- `Math.random()` and `Math.floor()` for generating random integers within a range
- Template literals (`` `${x} + ${y} = ${x + y}` ``) for cleaner string formatting, instead of manual string conversion and concatenation
- `let` vs `const` — variables that don't get reassigned can use `const`

## Notes

- The first attempt (commented out at the top of the file) used `String()` conversion and separate variables for each value. The corrected version replaces this with template literals for cleaner, more readable output.
- Division and remainder results are rarely whole numbers, since `x` and `y` are independent random values — this is expected behavior, not a bug.

## Author

Gabriel Onoriukpe
