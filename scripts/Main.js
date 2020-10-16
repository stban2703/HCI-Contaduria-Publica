let width;
let height;

let yellowImg;
let greenImg;
let blueImg;
let orangeImg;
let redImg;

let birdSlot;
let birds;
let jails;

function setup() {
  width = 1280;
  height = 720;
  birdSlot = [];
  birds = [];
  jails = [];

  yellowImg = loadImage('../src/img/yellow-img.png');
  greenImg = loadImage('../src/img/green-img.png');
  blueImg = loadImage('../src/img/blue-img.png');
  orangeImg = loadImage('../src/img/orange-img.png');
  redImg = loadImage('../src/img/red-img.png');

  for (let i = 0; i < 6; i++) {
    birdSlot.push(new BirdSlot(1159, 52 + 99 * i));
  }

  jails.push(new Jail(341, -629, 0));
  jails.push(new Jail(774, -629, 0));

  birds.push(new Bird(1177, 162, false, false, true, yellowImg, 2));
  birds.push(new Bird(1177, 262, false, false, true, greenImg, 5));
  birds.push(new Bird(1177, 362, false, false, true, blueImg, 0));
  birds.push(new Bird(1177, 462, false, false, true, orangeImg, 1));
  birds.push(new Bird(1177, 562, false, false, true, redImg, 3));

  createCanvas(width, height);
}

function draw() {
  // Paint background
  background("#FFFBD4");
  fill("#0B8481");
  rect(0, height - 41, width, 41);

  // Paint bird slots
  for (let i = 0; i < birdSlot.length; i++) {
    birdSlot[i].paint();
  }

  // Paint birds
  for (let i = 0; i < birds.length; i++) {
    birds[i].paint();
  }

  jails[0].weight = jails[1].weight * -1;

  // Paint objects
  jails[0].paint();
  jails[1].paint();

}

/*function mouseClicked() {
  if (mouseX > jails[0].posX && mouseX < jails[0].posX + jails[0].width) {
    jails[0].weight++;
  } else {
    jails[0].weight--;
  }
}*/

function mousePressed() {
  for (let i = 0; i < birds.length; i++) {
    let object = birds[i];
    if (mouseX > object.posX - object.width / 2 && mouseX < object.posX + object.width / 2
      && mouseY > object.posY - object.height / 2 && mouseY < object.posY + object.height / 2 && object.isOutside == true) {
      object.isGrabbed = true;
      object.isOutside = false;
    }
  }
}

function mouseDragged() {
  for (let i = 0; i < birds.length; i++) {
    let object = birds[i];
    if (object.isGrabbed == true) {
      object.posX = mouseX;
      object.posY = mouseY;
    }
  }
}

function mouseReleased() {
  let capacity = jails[0].capacity;

  for (let i = 0; i < birds.length; i++) {
    let object = birds[i];
    if (mouseX > jails[0].posX && mouseX < jails[0].posX + jails[0].width
      && mouseY > jails[0].posY + jails[0].totalHeight - jails[0].jailHeight && mouseY < jails[0].posY + jails[0].totalHeight && object.isGrabbed && capacity.length < 3) {

      capacity.push(object);
      object.posX = jails[0].posX + (48 * capacity.length);
      object.posY = jails[0].posY + (jails[0].totalHeight - jails[0].jailHeight) + (jails[0].jailHeight / 2 + 70);
      object.isGrabbed = false;
      object.isOutside = false;
      object.isInside = true;

    } else if (object.isGrabbed == true) {
      object.posX = 1177 + object.width / 2;
      object.posY = (162 + object.height / 2) + 100 * i;
      object.isGrabbed = false;
      object.isOutside = true;
      object.isInside = false;
    }

  }
}

