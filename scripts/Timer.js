class Timer {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.time = 300;
        this.maxTime = 300;
        this.width = 180;
        this.red = 129;
        this.green = 182;
        this.blue = 164;
        this.isRunning = false;
        this.fontRegular = loadFont('./src/font/Montserrat-Regular.ttf')
    }

    paint() {
        fill("#525252")
        textSize(20);
        textFont(this.fontRegular);
        text("Tiempo: ", 66.09, 60);
        fill(255);
        noStroke();
        rect(66.09, 82, this.width, 19, 8);

        fill(this.red, this.green, this.blue);
        noStroke();
        rect(66.09, 82, this.width * (this.time / this.maxTime), 19, 8);

        stroke("#848484")
        strokeWeight(2);
        noFill();
        rect(66.09, 82, this.width, 19, 8);
        strokeWeight(1);

        if (this.isRunning) {
            if (frameCount % 60 == 0) {
              this.time--;
            }
          }

        if (this.time <= 180 && this.time >= 75) {
            this.red = 235;
            this.green = 179;
            this.blue = 58;

        } else if (this.time <= 100)  {
            this.red = 233;
            this.green = 20;
            this.blue = 100;
        } else {
            this.red = 129;
            this.green = 182;
            this.blue = 164;
        }

        if (this.time <= 0) {
            this.isRunning = false;
        }
    }
}
