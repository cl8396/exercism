//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// 3
export const rows = (numberOfRows) => {
  const triangle = [];
  let rowLength = 1;

  let prevRow = [];
  let currentRow = [];

  if (!numberOfRows) {
    return triangle;
  }

  currentRow.push(1);
  triangle.push(currentRow);
  prevRow = currentRow;
  rowLength++;

  while (triangle.length < numberOfRows) {
    currentRow = [];

    for (let i = 0; i < rowLength; i++) {
      currentRow.push((prevRow[i - 1] || 0) + (prevRow[i] || 0));
    }

    triangle.push(currentRow);
    rowLength++;

    prevRow = currentRow;
  }

  return triangle;
};
