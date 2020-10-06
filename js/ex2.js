const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = array.filter(x => x % 2 == 1);
const diviOne = array.filter(x => (x % 2 ===0 || x % 5 === 0));
const diviTwo = array.filter(x => (Math.sqrt(x % 3 === 0)));
const diviFiv = array.filter(x => x % 5 === 0).map(x => x*x).reduce((num1, num2) => {
        return(num1+num2)
    });


console.log(odd);
console.log(diviOne);
console.log(diviTwo);
console.log(diviFiv);
