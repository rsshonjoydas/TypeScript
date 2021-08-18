// ! interface in object
interface RectangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;

  return width + length;
}

const rectangle = drawRectangle({
  width: 30,
  length: 20,
});

console.log(rectangle);
