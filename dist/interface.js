"use strict";
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
    return width + length;
}
const rectangle = drawRectangle({
    width: 30,
    length: 20,
});
console.log(rectangle);
