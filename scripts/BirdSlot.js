class BirdSlot {
    constructor(posX, posY, img) {
        this.posX = posX;
        this.posY = posY;
        this.width = 80;
        this.height = 87;
        this.img = img;
    }

    paint() {
        imageMode(CORNER);
        image(this.img, this.posX, this.posY);
    }
}