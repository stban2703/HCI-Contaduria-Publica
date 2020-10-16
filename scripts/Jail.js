class Jail {
    constructor(posX, posY, weight) {
        this.posX = posX;
        this.posY = posY;
        this.width = 174;
        this.totalHeight = 1070;
        this.jailHeight = 177;
        this.weight = weight;
        this.capacity = [];
        this.img = loadImage('../src/img/jail-img.png');
        this.move = 50;
    };

    paint() {
        imageMode(CORNER);
        /*for(let i = 0; i < 3; i++) {
            rect(this.posX + 54 * i, this.posY + this.totalHeight - this.jailHeight, 52, 177);
        }*/
        image(this.img, this.posX, this.posY + (this.move * this.weight));
    }

}