class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }
    get getTwoSide(){
        return  this.height + this.width;
    }

    calcArea() {
        return this.width * this.height;
    }

}
const area = new Rectangle(10,10)
console.log(area.area)
console.log((area.getTwoSide))
