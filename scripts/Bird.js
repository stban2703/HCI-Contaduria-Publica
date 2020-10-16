class Bird {
    constructor(posX, posY, isGrabbed, isInside, isOutside, img, value) {
        this.width = 47;
        this.height = 81;
        this.posX = posX + this.width / 2;
        this.posY = posY + this.height / 2;
        this.isGrabbed = isGrabbed;
        this.isInside = isInside;
        this.isOutside = isOutside;
        this.img = img;
        this.value = value;
    }

    paint() {
        imageMode(CENTER);
        image(this.img, this.posX, this.posY);
    }
}