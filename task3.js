function checkFruit(fruit) {
    if (fruit.includes("Apples")) {
        return true;
    } else {
        return false;
    }
}
const fruits = checkFruit(["Strawberries", "Apples", "Grapes"])
console.log('fruits', fruits)
    // console.log('first', fruit.includes(apples))