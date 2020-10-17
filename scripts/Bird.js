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

        this.posXInit = this.posX;
        this.posYInit = this.posY;

        this.jailContainer = undefined;
        this.desfaceY = 0;
    }

    setBounds(desfaceY) {
        this.desfaceY = desfaceY;
    }

    /*
    animatePosition(inicio, destino, change) {

        var nMovidas = 20;
        var move = destino - inicio;

        var moveModulo = move / nMovidas;
        
     
        
        var index = 0;

        var interval = setInterval(() => {

            change(moveModulo)
            index++;

            console.log(index);
            if (index >= nMovidas) {
                console.log("alto"); 
                change(destino);
                clearInterval(interval);
            }

        }, 100);
    }
    */

    posInit() {
        this.posX = this.posXInit;
        this.posY = this.posYInit;


        // this.animatePosition(this.posX, this.posXInit, (ref) => { this.posX += ref });
        // this.animatePosition(this.posY, this.posYInit, (ref) => { this.posY += ref });


        this.isGrabbed = false;
        this.isOutside = true;
        this.isInside = false;


    }

    paint() {

        if (this.width === -1 || this.height === -1) {
            this.width = this.img.width;
            this.height = this.img.height;
        }

        imageMode(CENTER);
        image(this.img, this.posX, this.posY);
        text(this.value, this.posX, this.posY + 50);
    }

    insideJail(jail) {
        this.jailContainer = jail;

        this.isGrabbed = false;
        this.isOutside = false;
        this.isInside = true;
    }

    removeJail() {
        if (this.jailContainer != undefined) {
            var index = -1;
            this.jailContainer.capacity.forEach((bird, i) => {
                if (bird === this) {
                    index = i;
                }
            });

            if (index !== -1) {
                this.jailContainer.capacity.splice(index, 1);

            }

            this.jailContainer.calculateWeight();

            this.jailContainer = undefined;
        }
    }

    isHover() {
        var isHoverMouse = false;
        if (mouseX > (this.posX - this.width / 2) && mouseX < (this.posX + this.width / 2)
            && mouseY > (this.posY - this.height / 2) && mouseY < (this.posY + this.height / 2)) {
            isHoverMouse = true;
        }
        return isHoverMouse;
    }

}