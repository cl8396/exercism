// @ts-check

// import { get } from 'core-js/es6/reflect';

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    let width = newSize.width;
    let height = newSize.height;

    if (width < 1) {
      width = 1;
    }

    if (height < 1) {
      height = 1;
    }

    if (width + this.position.x > this.screenSize.width) {
      width = this.screenSize.width - this.position.x;
    }

    if (height + this.position.y >= this.screenSize.height) {
      height = this.screenSize.height - this.position.y;
    }

    this.size = new Size(width, height);
  }

  move(newPosition) {
    let x = newPosition.x;
    let y = newPosition.y;

    x < 0 ? (x = 0) : null;
    y < 0 ? (y = 0) : null;

    if (x + this.size.width > this.screenSize.width) {
      x = this.screenSize.width - this.size.width;
    }
    if (y + this.size.height > this.screenSize.height) {
      y = this.screenSize.height - this.size.height;
    }

    this.position = new Position(x, y);
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
