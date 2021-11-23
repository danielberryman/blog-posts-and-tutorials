# CSS Grid

## Terms
- Grid container: the element on which display: grid is applied
- Grid item: the direct children of the parent grid container
- Grid line: the dividing lines that make up the structure of the gird
  - Vertical: column grid lines
  - Horizontal: row grid lines
- Grid cell: the space between 2 adjacent row and two adjacent column grid lines
- Grid track: the space between 2 adjacent grid lines either vertical or horizontal
- Grid area: the total space surround by 4 grid lines (any number of grid items can be included)

## Properties

### Parent Props
- display
  - grid: block level grid
  - inline-grid: inline level grid
- grid-template-columns & grid-template-rows: Defines the cols and rows of grid with space-separated list of values
  - Possible values are:
    - track-size: use length, percent, or fraction of the free space in the grid using fr
    - line_name: an arbitrary name using bracket syntax []
    - Ex: `grid-template-columns: [first] 40px [line2] 50px [end]`
    - *A line can have more than one name `[first-name second-name] 40px`
  - Grid lines are auto assigned positive numbers  starting with 1 (use -1 to get the last line)