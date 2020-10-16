class BirdSlot {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.width = 80;
        this.height = 87;
        this.img = loadImage('../src/img/slot-img.png');
    }

    paint() {
        imageMode(CORNER);
        image(this.img, this.posX, this.posY);
    }
}