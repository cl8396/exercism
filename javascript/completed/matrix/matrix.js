//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    this.string = input;
  }

  get rows() {
    let rows = [];

    this.string.split('\n').forEach((row) => {
      rows.push(row.split(' ').map((item) => parseInt(item, 10)));
    });

    return rows;
  }

  get columns() {
    let cols = [];
    for (let i = 0; i < this.rows[0].length; i++) {
      cols[i] = [];
      for (let j = 0; j < this.rows.length; j++) {
        cols[i][j] = this.rows[j][i];
      }
    }
    return cols;
  }
}
