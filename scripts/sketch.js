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

// Screens and images
let startScreen;
let startBtn;
let contextScreen;
let instruct1Screen;
let instruct2Screen;
let instruct3Screen;
let instruct4Screen;
let instruct5Screen;
let instruct6Screen;
let instruct7Screen;
let passwordScreen;
let backArrow;
let nextArrow;
let gif_loadImg;
let gif_createImg;
let slotWeight;
let slotYellow;
let slotGreen;
let slotBlue;
let slotOrange;
let slotRed;
let url;
let gifstep1;

let myGif;


// Inputs and buttons
let inputPassword;
let listoBtn;
let verificarBtn;
let button;
let buttonFirst;
let buttonLast;
let inputs;



let currentScreen;
let timer;

function preload() {
  // Slots
  slotWeight = loadImage("./src/img/slot-weight.png");
  slotYellow = loadImage("./src/img/slot-yellow.png");
  slotGreen = loadImage("./src/img/slot-green.png");
  slotBlue = loadImage("./src/img/slot-blue.png");
  slotOrange = loadImage("./src/img/slot-orange.png");
  slotRed = loadImage("./src/img/slot-red.png");

  // Birds
  weightOne = loadImage("./src/img/pesa-img.png")
  yellowImg = loadImage("./src/img/yellow-img.png");
  greenImg = loadImage("./src/img/green-img.png");
  blueImg = loadImage("./src/img/blue-img.png");
  orangeImg = loadImage("./src/img/orange-img.png");
  redImg = loadImage("./src/img/red-img.png");

  // Screens
  startScreen = loadImage("./src/img/startscreen-img.svg");
  startBtn = loadImage("./src/img/starbutton-img.png")
  contextScreen = loadImage("./src/img/contextscreen-img.svg");
  instruct1Screen = loadImage("./src/img/step1.jpg");
  instruct2Screen = loadImage("./src/img/step2.jpg");
  instruct3Screen = loadImage("./src/img/step3.jpg");
  instruct4Screen = loadImage("./src/img/step4.jpg");
  instruct5Screen = loadImage("./src/img/step5.jpg");
  instruct6Screen = loadImage("./src/img/step6.jpg");
  instruct7Screen = loadImage("./src/img/step7.jpg");
  passwordScreen = loadImage("./src/img/passwordScreen-img.png");
  backArrow = loadImage("./src/img/back-img.png");

  // Animation
  //gif_loadImg = loadImage("./src/video/animacion.gif");
  //gif_createImg = createImg("./src/video/animacion.gif");
  //nextArrow = createImg("./src/img/nextarrow.png");

  gifstep1 = "./src/video/animacion.gif";
}

function setup() {
  currentScreen = 3;
  width = 1280;
  height = 720;
  birdSlot = [];
  birds = [];

  createCanvas(width, height);

  timer = new Timer(10, 10);

  leftJail = new Jail(460, height / 2, 0);
  rightJail = new Jail(870, height / 2, 0);

  leftJail.compareJail(rightJail);
  rightJail.compareJail(leftJail);


  birdSlot.push(new BirdSlot(1159, 52 + 99 * 0, slotWeight));
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 1, slotYellow));
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 2, slotGreen));
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 3, slotBlue));
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 4, slotOrange));
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 5, slotRed));


  var pesa = new Bird(1173, 59, false, false, true, weightOne, 1);
  pesa.setBounds(-13);
  birds.push(pesa);
  birds.push(new Bird(1173, 160, false, false, true, yellowImg, 2));
  birds.push(new Bird(1173, 260, false, false, true, greenImg, 5));
  birds.push(new Bird(1173, 360, false, false, true, blueImg, 0));
  birds.push(new Bird(1173, 460, false, false, true, orangeImg, 1));
  birds.push(new Bird(1173, 560, false, false, true, redImg, 3));

  // Add birds to jail at start
  //leftJail.addBird(birds[0]);
  //leftJail.addBird(birds[4]);

  //rightJail.addBird(birds[1]);

  // Inputs
  inputOne = createInput();
  inputOne.position(1087, 70);
  inputOne.size(60, 50);
  inputTwo = createInput();
  inputTwo.position(1087, 170);
  inputTwo.size(60, 50);
  inputThree = createInput();
  inputThree.position(1087, 270);
  inputThree.size(60, 50);
  inputFour = createInput();
  inputFour.position(1087, 370);
  inputFour.size(60, 50);
  inputFive = createInput();
  inputFive.position(1087, 470);
  inputFive.size(60, 50);
  inputSix = createInput();
  inputSix.position(1087, 570);
  inputSix.size(60, 50);

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
    elem.setAttribute('value', 0);
    elem.setAttribute('min', 0);
    elem.setAttribute('max', 99);
  })

  button = document.querySelectorAll('button');

  buttonFirst = button[0];
  buttonLast = button[1];

  buttonFirst.addEventListener('click', function () {
    currentScreen = 11;
  })
}

function draw() {
  switch (currentScreen) {
    case 1:
      image(startScreen, 0, 0, 1280, 720);
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
      //background(255);
      image(instruct1Screen, 0, 0, 1280, 720);
      //myGif = p5Gif.loadGif(gifstep1);
      //gif_createImg.position(0, 0);
      //nextArrow.position(814, 570);

      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      })

      if (mouseX > 814 && mouseX < 814 + 67 && mouseY > 570 && mouseY < 570 + 80) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 4:
      image(instruct2Screen, 0, 0, 1280, 720);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });

      if (mouseX > 814 && mouseX < 814 + 67 && mouseY > 570 && mouseY < 570 + 80) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 5:
      image(instruct3Screen, 0, 0, 1280, 720);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      if (mouseX > 814 && mouseX < 814 + 67 && mouseY > 570 && mouseY < 570 + 80) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 6:
      image(instruct4Screen, 0, 0, 1280, 720);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      if (mouseX > 973 && mouseX < 973 + 67 && mouseY > 537 && mouseY < 537 + 80) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 7:
      image(instruct5Screen, 0, 0, 1280, 720);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      if (mouseX > 973 && mouseX < 973 + 67 && mouseY > 537 && mouseY < 537 + 80) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 8:
      image(instruct6Screen, 0, 0, 1280, 720);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      if (mouseX > 1109 && mouseX < 1109 + 94 && mouseY > 527 && mouseY < 527 + 118) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 9:
      image(instruct7Screen, 0, 0, 1280, 720);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });

      if (mouseX > 624 && mouseX < 624 + 94 && mouseY > 455 && mouseY < 455 + 118) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 10:
      // Paint background
      cursor(ARROW);
      background("#FFFBD4");

      timer.paint();

      fill("#0B8481");
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

      if (timer.isRunning) {
        if (frameCount % 60 == 0) {
          timer.time--;
        }
      }

      break;

    case 11:
      background("#FFFBD4");
      imageMode(CORNER)
      image(passwordScreen, 0, 0);
      image(backArrow, 120, 300);
      timer.paint();
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

      verificarBtn.mousePressed(function () {
        if (inputs[6].value == 8) {
          window.alert("¡Muy bien! :D");
          timer.isRunning = false;
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
      if (mouseX > 814 && mouseX < 814 + 67 && mouseY > 570 && mouseY < 570 + 80) {
        currentScreen = 4;
      }
      break;
    case 4:
      if (mouseX > 814 && mouseX < 814 + 67 && mouseY > 570 && mouseY < 570 + 80) {
        currentScreen = 5;
      }
      break;
    case 5:
      if (mouseX > 814 && mouseX < 814 + 67 && mouseY > 570 && mouseY < 570 + 80) {
        currentScreen = 6;
      }
      break;
    case 6:
      if (mouseX > 973 && mouseX < 973 + 67 && mouseY > 537 && mouseY < 537 + 80) {
        currentScreen = 7;
      }
      break;
    case 7:
      if (mouseX > 973 && mouseX < 973 + 67 && mouseY > 537 && mouseY < 537 + 80) {
        currentScreen = 8;
      }
      break;

    case 8:
      if (mouseX > 1109 && mouseX < 1109 + 94 && mouseY > 527 && mouseY < 527 + 118) {
        currentScreen = 9;
      }
      break;
    case 9:
      if (mouseX > 624 && mouseX < 624 + 94 && mouseY > 455 && mouseY < 455 + 118) {
        currentScreen = 10;
        timer.isRunning = true;
      }
      break;
    case 10:
      for (let i = 0; i < birds.length; i++) {
        let bird = birds[i];
        if (bird.isHover()) {
          bird.isGrabbed = true;
          bird.isOutside = false;
          birdSelect = bird;
        }
      }

      if (mouseX > 120 && mouseX < 120 + 54 && mouseY > 300 && mouseY < 300 + 45) {
        currentScreen = 11;
      }
      break;
    case 11:
      if (mouseX > 120 && mouseX < 120 + 54 && mouseY > 300 && mouseY < 300 + 45) {
        currentScreen = 10;
      }
      break;
  }
}

function mouseDragged() {

  switch (currentScreen) {
    case 10:
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
    case 10:
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
