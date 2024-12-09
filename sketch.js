const canvasSize = 500;
const squaresPerSide = 10;
const squareSide = canvasSize / squaresPerSide;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(220);
 
// nested loop 
  for(let column = 0; column < squaresPerSide; column = column + 1){
    for(let row = 0; row < squaresPerSide; row = row + 1){
    
// calculate random colour   
        let r = random (0, 255);
        let g = random (0, 255);
        let b = random (0, 255);
// apply colour   
        fill (r, g, b);

// calculate x and y for each column and row
       let x = column * squareSide;
       let y = row * squareSide;
        
// draw square
        square(x, y, 100);
    }
  }
}

function draw() {
}
