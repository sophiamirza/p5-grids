// variables
const canvasSize = 500;
const squaresPerSide = 10;
const squareSide = canvasSize / squaresPerSide;

// variables for images
let texture1;
let texture2;
let texture3;
let texture4;

let textures;

function preload() {
// load each image
    texture1 = loadImage("Textures/texture-trans1.png");
    texture2 = loadImage("Textures/texture-trans2.png");
    texture3 = loadImage("Textures/texture-trans3.png");
    texture4 = loadImage("Textures/texture-trans4.png");
}

function setup() {
  createCanvas(canvasSize, canvasSize);
 
// stops draw function from repeating continuously
  noLoop();
}

function draw() {
    background(220);

//   add all textures to one array
  textures = [texture1, texture2, texture3, texture4];
 
// nested loop 
  for(let column = 0; column < squaresPerSide; column = column + 1){
    for(let row = 0; row < squaresPerSide; row = row + 1){

//  select random texture from array       
        let randomTexture = random(textures);
    
// calculate random colour   
        let r = random (0, 255);
        let g = random (0, 255);
        let b = random (0, 255);
// apply colour on squares (not images)  
        // fill (r, g, b);
// apply tint (colour) over images
        tint(r, g, b);

// calculate offset for x (random between -5 and 5)
        let offsetX = random(-9, 9);
        let offsetY = random(-9, 9);

// calculate x and y for each column and row position
        let x = squareSide * column + offsetX;
        let y = squareSide * row + offsetY;

// calculate x and y for each column and row
    //    let x = column * squareSide;
    //    let y = row * squareSide;
        
// draw square
        // square(x, y, 100);
        image(randomTexture, x, y, squareSide, squareSide);
    }
  }
}
