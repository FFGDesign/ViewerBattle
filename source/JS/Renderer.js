class Sprite {
    constructor({position, size, SpritePath, Scale}) {
        this.position = position
        this.size
        this.Sprite = SpritePath
        this.Scale = Scale
    }

    draw() {

    }

    update() {

    }
}

function anim() {
    window.requestAnimationFrame(anim)
    console.log("go")
}