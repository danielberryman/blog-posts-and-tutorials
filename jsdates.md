# Cheatsheet Chart for JavaScript Date Objects
## Wait...is that timestamp local? Or UTC?

| function + params     | params viewed as | timestamp returned       |
| --------------------- | ---------------- | ------------------------ |
| new Date('string')    | utc              | local relative to params |
| new Date(set of ints) | local            | same as params           |
| new Date(timestamp)   | local            | same as params           |
| new Date()            | none             | current local time       |