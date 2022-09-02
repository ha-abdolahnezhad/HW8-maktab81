function counter() {
    let numCounter = 0;

    return function add(number = 0) {
        return numCounter += number;
    }
}

const numAdd = counter();

console.log(numAdd()); // 0 + 0 => 0
console.log(numAdd(1)); // 0 + 1 => 1
console.log(numAdd(2)); // 1 + 2 => 3
console.log(numAdd()); // 0 + 3 => 3
console.log(numAdd(5)); // 3 + 5 => 8
console.log(numAdd(-4)); // 8 + (-4) => 4