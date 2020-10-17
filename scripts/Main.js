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


let startScreen;
let startBtn;
let contextScreen;
let instruct1Screen;
let instruct2Screen;
let passwordScreen;
let backArrow;


let inputPassword;

let listoBtn;
let verificarBtn;

let button;

let buttonFirst;
let buttonLast;

let inputs;

let currentScreen;

let timer;
let isRunning;

function setup() {
  timer = 300;
  isRunning = false;

  currentScreen = 1;
  width = 1280;
  height = 720;
  birdSlot = [];
  birds = [];

  createCanvas(width, height);

  leftJail = new Jail(360, height / 2, 0);
  rightJail = new Jail(920, height / 2, 0);

  leftJail.compareJail(rightJail);
  rightJail.compareJail(leftJail);

  // Birds
  weightOne = loadImage("./../src/img/pesa-img.png")
  yellowImg = loadImage("./../src/img/yellow-img.png");
  greenImg = loadImage("./../src/img/green-img.png");
  blueImg = loadImage("./../src/img/blue-img.png");
  orangeImg = loadImage("./../src/img/orange-img.png");
  redImg = loadImage("./../src/img/red-img.png");

  // Screens
  startScreen = loadImage("./../src/img/startscreen-img.png");
  startBtn = loadImage("./../src/img/starbutton-img.png")
  contextScreen = loadImage("./../src/img/contextscreen-img.png");
  instruct1Screen = loadImage("./../src/img/instruct1-img.png");
  instruct2Screen = loadImage("./../src/img/instruct2-img.png");
  passwordScreen = loadImage("./../src/img/passwordScreen-img.png");
  backArrow = loadImage("./../src/img/back-img.png");

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

  // Add birds to jail at start
  leftJail.addBird(birds[0]);
  leftJail.addBird(birds[4]);
  leftJail.addBird(birds[3]);

  rightJail.addBird(birds[1]);
  rightJail.addBird(birds[2]);
  rightJail.addBird(birds[5]);

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

  inputPassword = createInput();
  inputPassword.position(609, 462);
  inputPassword.size(50, 50);

  listoBtn = createButton('Listo');
  listoBtn.position(575, 550);

  verificarBtn = createButton('Verificar');
  verificarBtn.position(547, 572)

  inputs = document.querySelectorAll('input');

  inputs.forEach(function (elem, i) {
    elem.setAttribute('type', 'number');
  })

  button = document.querySelectorAll('button');

  buttonFirst = button[0];
  buttonLast = button[1];

  buttonFirst.addEventListener('click', function () {
    currentScreen = 6;
  })
}

function draw() {
  switch (currentScreen) {
    case 1:
      image(startScreen, 0, 0);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      })

      image(startBtn, 571, 359);

      if (mouseX > 571 && mouseX < 571 + 81 && mouseY > 359 && mouseY < 359 + 100) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 2:
      image(contextScreen, 0, 0);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      })

      if (mouseX > 1163 && mouseX < 1163 + 70 && mouseY > 375 && mouseY < 375 + 59) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 3:
      image(instruct1Screen, 0, 0);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      })

      if (mouseX > 878 && mouseX < 878 + 54 && mouseY > 540 && mouseY < 540 + 45) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 4:
      image(instruct2Screen, 0, 0);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });

      if ((mouseX > 60 && mouseX < 60 + 54 && mouseY > 300 && mouseY < 300 + 45) ||
        (mouseX > 1109 && mouseX < 1109 + 94 && mouseY > 527 && mouseY < 527 + 118)) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 5:
      // Paint background
      cursor(ARROW);
      background("#FFFBD4");
      fill("#0B8481");
      textSize(50);
      text("Tiempo: " + timer, 10, 50);
      rect(0, height - 41, width, 41);

      textSize(20);
      text("¡Recuerda el valor de cada guacamaya!", width / 2 - 150, 100);
      buttonFirst.style.display = "block";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "block";
      })

      inputs[6].style.display = "none"

      if (inputOne.value() != "" &&
        inputTwo.value() != "" &&
        inputThree.value() != "" &&
        inputFour.value() != "" &&
        inputFive.value() != "" &&
        inputSix.value() != "") {
        buttonFirst.classList.add('btn--active');
        buttonFirst.disabled = false;
      } else {
        buttonFirst.classList.remove('btn--active');
        buttonFirst.disabled = true;
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

      if(isRunning) {
        if(frameCount % 60 == 0) {
          timer--;
        }
      }

      break;

    case 6:
      background("#FFFBD4");
      imageMode(CORNER)
      image(passwordScreen, 0, 0);
      image(backArrow, 120, 300);
      text("Tiempo: " + timer, 10, 50);
      fill("#0B8481");
      rect(0, height - 41, width, 41);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "block";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      inputs[6].style.display = "block";

      if (mouseX > 120 && mouseX < 120 + 54 && mouseY > 300 && mouseY < 300 + 45) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }

      if (inputPassword.value() != "") {
        buttonLast.classList.add('btn--active');
        buttonLast.disabled = false;
      } else {
        buttonLast.classList.remove('btn--active');
        buttonLast.disabled = true;
      }

      if(isRunning) {
        if(frameCount % 60 == 0) {
          timer--;
        }
      }

      verificarBtn.mousePressed(function () {
        if (inputs[6].value == 8) {
          window.alert("¡Muy bien! :D");
          isRunning = false;
        } else {
          window.alert("¡Oh no, esa no era la clave! :c");
        }
      })
      break;
  }
}

function mousePressed() {

  switch (currentScreen) {
    case 1:
      if (mouseX > 571 && mouseX < 571 + 81 && mouseY > 359 && mouseY < 359 + 100) {
        currentScreen = 2;
      }
      break;
    case 2:
      if (mouseX > 1163 && mouseX < 1163 + 70 && mouseY > 375 && mouseY < 375 + 59) {
        currentScreen = 3;
      }
      break;
    case 3:
      if (mouseX > 878 && mouseX < 878 + 54 && mouseY > 540 && mouseY < 540 + 45) {
        currentScreen = 4;
      }
      break;
    case 4:
      if (mouseX > 60 && mouseX < 60 + 54 && mouseY > 300 && mouseY < 300 + 45) {
        currentScreen = 3;
      };

      if(mouseX > 1109 && mouseX < 1109 + 94 && mouseY > 527 && mouseY < 527 + 118) {
        currentScreen = 5;
        isRunning = true;
      };
      break;
    case 5:
      for (let i = 0; i < birds.length; i++) {
        let bird = birds[i];
        if (bird.isHover()) {
          bird.isGrabbed = true;
          bird.isOutside = false;
          birdSelect = bird;
        }
      }
      break;
    case 6:
      if (mouseX > 120 && mouseX < 120 + 54 && mouseY > 300 && mouseY < 300 + 45) {
        currentScreen = 5;
      }
      break;
  }
}

function mouseDragged() {

  switch (currentScreen) {
    case 5:
      if (birdSelect != undefined) {
        if (birdSelect.isGrabbed == true) {
          birdSelect.posX = mouseX;
          birdSelect.posY = mouseY;
        }
      }
      break;
  }
}

function mouseReleased() {

  switch (currentScreen) {
    case 5:
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
      break;
  }
}
