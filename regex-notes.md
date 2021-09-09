# Regex notes

## General
- If you want to put quotes around a list you can use newline character:
  - Regex: \n Replace with: ',\n
- Take the first x number of characters just after a match:
  - *match*.{x}
  - x is a number

## Positive Lookbehind
- (?<=*match*)(.*)
- The lookbehind: (?<)
- Positive: =
- Match all character after the lookbehind match: (.*)
- Examples:
  - Regex: (?<=AHJ .{4})(.*)
    - Text: AHJ Bozeman => Match: man
    - Text: AHJ Clagary => Match: ary