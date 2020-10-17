let width;
let height;

let yellowImg;
let greenImg;
let blueImg;
let orangeImg;
let redImg;

let birdSlot;
let birds;

let leftJail;
let rightJail;

let birdSelect = undefined;

let inputOne;
let inputTwo;
let inputThree;
let inputFour;
let inputFive;
let inputSix;

let button;
let inputs;

let screen;

function setup() {
  screen = 5;
  width = 1280;
  height = 720;
  birdSlot = [];
  birds = [];
  createCanvas(width, height);

  leftJail = new Jail(341, height / 2, 0);
  rightJail = new Jail(774, height / 2, 0);

  leftJail.compareJail(rightJail);
  rightJail.compareJail(leftJail);

  weightOne = loadImage('../src/img/pesa-img.png')
  yellowImg = loadImage('../src/img/yellow-img.png');
  greenImg = loadImage('../src/img/green-img.png');
  blueImg = loadImage('../src/img/blue-img.png');
  orangeImg = loadImage('../src/img/orange-img.png');
  redImg = loadImage('../src/img/red-img.png');

  for (let i = 0; i < 6; i++) {
    birdSlot.push(new BirdSlot(1159, 52 + 99 * i));
  }

  var pesa = new Bird(1177, 62, false, false, true, weightOne, 1);
  pesa.setBounds(-13);
  birds.push(pesa);
  birds.push(new Bird(1177, 162, false, false, true, yellowImg, 2));
  birds.push(new Bird(1177, 262, false, false, true, greenImg, 5));
  birds.push(new Bird(1177, 362, false, false, true, blueImg, 0));
  birds.push(new Bird(1177, 462, false, false, true, orangeImg, 1));
  birds.push(new Bird(1177, 562, false, false, true, redImg, 3));


  leftJail.addBird(birds[0]);
  leftJail.addBird(birds[3]);

  inputOne = createInput();
  inputOne.position(1087, 75);
  inputOne.size(50, 50);

  inputTwo = createInput();
  inputTwo.position(1087, 175);
  inputTwo.size(50, 50);

  inputThree = createInput();
  inputThree.position(1087, 275);
  inputThree.size(50, 50);

  inputFour = createInput();
  inputFour.position(1087, 375);
  inputFour.size(50, 50);

  inputFive = createInput();
  inputFive.position(1087, 475);
  inputFive.size(50, 50);

  inputSix = createInput();
  inputSix.position(1087, 575);
  inputSix.size(50, 50);

  listoBtn = createButton('Listo');
  listoBtn.position(575, 550);

  inputs = document.querySelectorAll('input');

  inputs.forEach(function (elem, i) {
    elem.setAttribute('type', 'number');
    console.log(elem)
  })

  button = document.querySelector('button');
  console.log(button)

}

function draw() {

  // Paint background
  background("#FFFBD4");
  fill("#0B8481");
  rect(0, height - 41, width, 41);

  if (inputOne.value() != "" &&
    inputTwo.value() != "" &&
    inputThree.value() != "" &&
    inputFour.value() != "" &&
    inputFive.value() != "" &&
    inputSix.value() != "") {
    button.classList.add('btn--active');
    button.disabled = false;
  } else {
    button.classList.remove('btn--active');
    button.disabled = true;
  }

  // Paint bird slots
  for (let i = 0; i < birdSlot.length; i++) {
    birdSlot[i].paint();
  }

  // Paint birds
  for (let i = 0; i < birds.length; i++) {
    birds[i].paint();
  }

  // Paint objects
  leftJail.paint();
  rightJail.paint();
}

function mousePressed() {


  for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];

    if (bird.isHover()) {
      bird.isGrabbed = true;
      bird.isOutside = false;
      birdSelect = bird;
    }
  }

  //let object = birds[i];
  /*
  if (mouseX > object.posX - object.width / 2 && mouseX < object.posX + object.width / 2
    && mouseY > object.posY - object.height / 2 && mouseY < object.posY + object.height / 2 && object.isOutside == true && object.isInside == false) {
    object.isGrabbed = true;
    object.isOutside = false;
  }
 

  if (mouseX > object.posX - object.width / 2 && mouseX < object.posX + object.width / 2
    && mouseY > object.posY - object.height / 2 && mouseY < object.posY + object.height / 2 && object.isOutside == false && object.isInside == true) {
    object.isGrabbed = true;
    object.isInside = false;
  }
    */

}

function mouseDragged() {

  if (birdSelect != undefined) {
    if (birdSelect.isGrabbed == true) {
      birdSelect.posX = mouseX;
      birdSelect.posY = mouseY;
    }
  }
}

function mouseReleased() {


  if (birdSelect != undefined && leftJail.isHover()) {
    birdSelect.removeJail();
    leftJail.addBird(birdSelect);

  } else if (birdSelect != undefined && rightJail.isHover()) {
    birdSelect.removeJail();
    rightJail.addBird(birdSelect);

  } else if (birdSelect != undefined && birdSelect.isGrabbed == true) {

    birdSelect.removeJail();
    birdSelect.posInit();

  }

  birdSelect = undefined;
}
