class Square {
    constructor(side, perimeter, area, diagonal) {
        this.side = side;
        this.perimeter = perimeter;
        this.area = area;
        this.diagonal = diagonal;
    }
    describe () {
        return `Square with side ${this.side} has perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${this.diagonal}`;
    }
        
}

const mySquare1 = new Square(7, 10, 8, 3.248);
const mySquare2 = new Square(3, 15, 4, 1.314);
const mySquare3 = new Square(9, 20, 6, 5.692);

console.log(mySquare1.describe());
console.log(mySquare2.describe());
console.log(mySquare3.describe());

