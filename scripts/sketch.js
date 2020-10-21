let width;
let height;

// Canvas and context
let canvas;
let ctx;

// dpi
let dpi;

// Variable para la puntuación final
let finalScore;

// Birds images
let yellowImg;
let greenImg;
let blueImg;
let orangeImg;
let redImg;

// Birds and jails
let birdSlot;
let birds;
let leftJail;
let rightJail;
let birdSelect = undefined;

// Inputs
let inputOne;
let inputTwo;
let inputThree;
let inputFour;
let inputFive;
let inputSix;

// Screens and other images
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
let wrongpassword;
let badending;
let goodending;
let balancescreen;
let passwordScreen;
let gif_createImg;
let backArrow;
let nextArrow;
let imgs;

// Slots for birds
let slotWeight;
let slotYellow;
let slotGreen;
let slotBlue;
let slotOrange;
let slotRed;
let slotsFilled;

// Inputs and buttons
let inputPassword;
let listoBtn;
let verificarBtn;
let button;
let buttonFirst;
let buttonLast;
let inputs;

// Screen
let currentScreen;

// Timer
let timer;

function preload() {
  // Slots
  slotWeight = loadImage("./src/img/slot-weight.png");
  slotYellow = loadImage("./src/img/slot-yellow.png");
  slotGreen = loadImage("./src/img/slot-green.png");
  slotBlue = loadImage("./src/img/slot-blue.png");
  slotOrange = loadImage("./src/img/slot-orange.png");
  slotRed = loadImage("./src/img/slot-red.png");
  slotsFilled = loadImage("./src/img/slotsfilled.png")

  // Birds
  weightOne = loadImage("./src/img/pesa-img.png")
  yellowImg = loadImage("./src/img/yellow-img.png");
  greenImg = loadImage("./src/img/green-img.png");
  blueImg = loadImage("./src/img/blue-img.png");
  orangeImg = loadImage("./src/img/orange-img.png");
  redImg = loadImage("./src/img/red-img.png");

  // Screens
  startScreen = loadImage("./src/img/startscreen.jpg");
  startBtn = loadImage("./src/img/starbutton-img.png")
  contextScreen = loadImage("./src/img/contextscreen.jpg");
  instruct1Screen = loadImage("./src/img/step1.jpg");
  instruct2Screen = loadImage("./src/img/step2.jpg");
  instruct3Screen = loadImage("./src/img/step3.jpg");
  instruct4Screen = loadImage("./src/img/step4.jpg");
  instruct5Screen = loadImage("./src/img/step5.jpg");
  instruct6Screen = loadImage("./src/img/step6.jpg");
  instruct7Screen = loadImage("./src/img/step7.jpg");
  balancescreen = loadImage("./src/img/balancescreen.jpg");
  wrongpassword = loadImage("./src/img/wrongpassword.jpg");
  badending = loadImage("./src/img/badending.jpg");
  goodending = loadImage("./src/img/goodending.jpg");
  passwordScreen = loadImage("./src/img/altpasswordScreen.jpg");
}

function setup() {

  finalScore = 0;

  currentScreen = 1;
  width = 1280;
  height = 720;
  birdSlot = [];
  birds = [];

  createCanvas(width, height);

  //get canvas
  canvas = document.querySelector('canvas');
  //get context
  ctx = canvas.getContext('2d');
  //get dpi
  dpi = window.devicePixelRatio;

  
  // Fix canvas dpi
  let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
  //get CSS width
  let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);

  /*
  //scale the canvas
  canvas.setAttribute('height', style_height * dpi);
  canvas.setAttribute('width', style_width * dpi);
  */

  // Time
  timer = new Timer(10, 10);

  // Jails
  leftJail = new Jail(290, height / 2 - 10, 0);
  rightJail = new Jail(930, height / 2 - 10, 0);

  leftJail.compareJail(rightJail);
  rightJail.compareJail(leftJail);

  // Add slots
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 0, slotWeight));
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 1, slotYellow));
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 2, slotGreen));
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 3, slotBlue));
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 4, slotOrange));
  birdSlot.push(new BirdSlot(1159, 52 + 99 * 5, slotRed));

  // Birds and weight
  var pesa = new Bird(1173, 56, false, false, true, weightOne, 1);
  pesa.setBounds(-13);
  birds.push(pesa);
  birds.push(new Bird(1173, 160, false, false, true, yellowImg, 2));
  birds.push(new Bird(1173, 260, false, false, true, greenImg, 5));
  birds.push(new Bird(1173, 360, false, false, true, blueImg, 4));
  birds.push(new Bird(1173, 460, false, false, true, orangeImg, 1));
  birds.push(new Bird(1173, 560, false, false, true, redImg, 3));

  // Add birds to jail at start
  leftJail.addBird(birds[0]);
  leftJail.addBird(birds[4]);
  rightJail.addBird(birds[1]);

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
  inputPassword.size(60, 50);

  listoBtn = createButton('Listo');
  listoBtn.position(510, 550);

  verificarBtn = createButton('Verificar');
  verificarBtn.position(547, 572);

  gif_createImg = createImg("./src/video/animacion.gif");
  nextArrow = createImg("./src/img/nextarrow.png");
  gif_createImg.position(0, 0);
  nextArrow.position(814, 570);

  inputs = document.querySelectorAll('input');
  imgs = document.querySelectorAll("img");
  button = document.querySelectorAll('button');

  inputs[0].setAttribute('value', 1);
  inputs.forEach(function (elem, i) {
    elem.setAttribute('type', 'number');
    elem.setAttribute('placeholder', 0);
    elem.setAttribute('min', 0);
    elem.setAttribute('max', 99);
  })

  // "Listo button"
  buttonFirst = button[0];

  // Password button
  buttonLast = button[1];

  buttonFirst.addEventListener('click', function () {
    currentScreen = 11;
  })
}

function draw() {
  switch (currentScreen) {
    case 1:
      image(startScreen, 0, 0, 1280, 720);

      // Hide button and inputs
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      })
      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      })

      if (mouseX > 571 && mouseX < 571 + 81 && mouseY > 359 && mouseY < 359 + 100) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 2:
      image(contextScreen, 0, 0, 1280, 720);

      // Hide button and inputs
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      })
      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      })

      if (mouseX > 1163 && mouseX < 1163 + 70 && mouseY > 375 && mouseY < 375 + 59) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 3:
      // Hide button and inputs
      imgs.forEach(function (elem, i) {
        elem.style.display = 'block';
      })
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

      // Hide button and inputs
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      })

      if (mouseX > 814 && mouseX < 814 + 67 && mouseY > 570 && mouseY < 570 + 80) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 5:
      image(instruct3Screen, 0, 0, 1280, 720);

      // Hide button and inputs
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      })

      if (mouseX > 814 && mouseX < 814 + 67 && mouseY > 570 && mouseY < 570 + 80) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 6:
      image(instruct4Screen, 0, 0, 1280, 720);

      // Hide button and inputs
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      })

      if (mouseX > 973 && mouseX < 973 + 67 && mouseY > 537 && mouseY < 537 + 80) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 7:
      image(instruct5Screen, 0, 0, 1280, 720);

      // Hide button and inputs
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      })

      if (mouseX > 973 && mouseX < 973 + 67 && mouseY > 537 && mouseY < 537 + 80) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 8:
      image(instruct6Screen, 0, 0, 1280, 720);

      // Hide button and inputs
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      })

      if (mouseX > 1109 && mouseX < 1109 + 94 && mouseY > 527 && mouseY < 527 + 118) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 9:
      image(instruct7Screen, 0, 0, 1280, 720);

      // Hide button and inputs
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });
      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      })

      if (mouseX > 624 && mouseX < 624 + 94 && mouseY > 455 && mouseY < 455 + 118) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
      break;

    case 10:
      // Paint background
      cursor(ARROW);
      imageMode(CORNER)
      image(balancescreen, 0, 0, 1280, 720);

      timer.paint();

      // Hide button and inputs
      buttonFirst.style.display = "block";
      buttonLast.style.display = "none";
      inputs.forEach(function (elem, i) {
        elem.style.display = "block";
      })
      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
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

      if (mouseX > 45 && mouseX < 45 + 112 && mouseY > 115 && mouseY < 115 + 73) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }

      if (timer.time <= 0) {
        if (inputs[1].value == 2) {
          finalScore += 20;
        }

        if (inputs[2].value == 5) {
          finalScore += 20;
        }

        if (inputs[3].value == 4) {
          finalScore += 20;
        }

        if (inputs[4].value == 1) {
          finalScore += 20;
        }

        if (inputs[5].value == 3) {
          finalScore += 20;
        }
        currentScreen = 13;
        imageMode(CORNER);
      }
      break;

    case 11:
      background("#FFFBD4");
      imageMode(CORNER)
      image(passwordScreen, 0, 0, 1280, 720);
      image(slotsFilled, 1159, 52);
      timer.paint();
      fill("#0B8481");
      rect(0, height - 41, width, 41);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "block";

      // Display password input
      inputs.forEach(function (elem, i) {
        elem.style.display = "block";
      })

      // Hide animation
      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      })

      if ((mouseX > 66 && mouseX < 66 + 54 && mouseY > 300 && mouseY < 300 + 73)
        || (mouseX > 45 && mouseX < 45 + 112 && mouseY > 115 && mouseY < 115 + 73)) {
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

      // Calcular puntaje
      verificarBtn.mousePressed(function () {
        if (inputs[6].value == 3) {

          if (inputs[1].value == 2) {
            finalScore += 20;
          }

          if (inputs[2].value == 5) {
            finalScore += 20;
          }

          if (inputs[3].value == 4) {
            finalScore += 20;
          }

          if (inputs[4].value == 1) {
            finalScore += 20;
          }

          if (inputs[5].value == 3) {
            finalScore += 20;
          }

          finalScore += 50;
          if (timer.time >= 60) {
            finalScore += 50;
          } else if (timer.time >= 30 && timer.time < 60) {
            finalScore += 25;
          } else if (timer.time < 30) {
            finalScore += 10
          }
          timer.isRunning = false;
          currentScreen = 14;
        } else {
          currentScreen = 12;
        }
      })

      if (timer.time <= 0) {
        if (inputs[1].value == 2) {
          finalScore += 20;
        }

        if (inputs[2].value == 5) {
          finalScore += 20;
        }

        if (inputs[3].value == 4) {
          finalScore += 20;
        }

        if (inputs[4].value == 1) {
          finalScore += 20;
        }

        if (inputs[5].value == 3) {
          finalScore += 20;
        }
        currentScreen = 13;
        imageMode(CORNER);
      }
      break;

    case 12:
      image(wrongpassword, 0, 0, 1280, 720);
      timer.paint();
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";

      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });

      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      })

      if (mouseX > 66 && mouseX < 66 + 54 && mouseY > 300 && mouseY < 300 + 73) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }

      if (timer.time <= 0) {
        if (inputs[1].value == 2) {
          finalScore += 20;
        }

        if (inputs[2].value == 5) {
          finalScore += 20;
        }

        if (inputs[3].value == 4) {
          finalScore += 20;
        }

        if (inputs[4].value == 1) {
          finalScore += 20;
        }

        if (inputs[5].value == 3) {
          finalScore += 20;
        }
        currentScreen = 13;
        imageMode(CORNER);
      }
      break;

    case 13:
      image(badending, 0, 0, 1280, 720);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";

      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });

      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      });
      break;

    case 14:
      image(goodending, 0, 0, 1280, 720);
      buttonFirst.style.display = "none";
      buttonLast.style.display = "none";

      inputs.forEach(function (elem, i) {
        elem.style.display = "none";
      });

      imgs.forEach(function (elem, i) {
        elem.style.display = 'none';
      });
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

      if (mouseX > 45 && mouseX < 45 + 112 && mouseY > 115 && mouseY < 115 + 73) {
        currentScreen = 3;
        imageMode(CORNER)
      }
      break;
    case 11:
      if (mouseX > 66 && mouseX < 66 + 54 && mouseY > 300 && mouseY < 300 + 73) {
        currentScreen = 10;
      }

      if (mouseX > 45 && mouseX < 45 + 112 && mouseY > 115 && mouseY < 115 + 73) {
        currentScreen = 3;
      }
      break;
    case 12:
      if (mouseX > 66 && mouseX < 66 + 54 && mouseY > 300 && mouseY < 300 + 73) {
        currentScreen = 11;
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
