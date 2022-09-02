//----------practis-1----------
// let user = {};
// function addProperty(property) {
//     function setter(name) {
//         this[property] = name;
//     }
//     return setter.bind(user);
// }
// addProperty('name')('hamed');
// console.log(user);

//----------practis-2----------
// const backgroundSetter = (elem) => {
//     elem.style.backgroundColor = "cyan";
//     elem.innerText = "123456789";
// }

// function elementCreator(element, callback) {
    
//     element = document.createElement(element);
//     document.querySelector('body').appendChild(element);
    
//     callback(element);
// }

// elementCreator('div', backgroundSetter);

//----------practis-3----------
// function counter() {
//     let numCounter = 0;

//     return function add(number = 0) {
//         return numCounter += number;
//     }
// }

// const numAdd = counter();

// console.log(numAdd()); // 0 + 0 => 0
// console.log(numAdd(1)); // 0 + 1 => 1
// console.log(numAdd(2)); // 1 + 2 => 3
// console.log(numAdd()); // 0 + 3 => 3
// console.log(numAdd(5)); // 3 + 5 => 8
// console.log(numAdd(-4)); // 8 + (-4) => 4

//----------practis-4----------
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// If we have some initiation code that we don't need to use again, we could use the IIFE pattern.

// As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

//(function () {
  // …
//})();

// (() => {
//     // some initiation code
//     let firstVariable;
//     let secondVariable;
// })();
  
//firstVariable and secondVariable will be discarded after the function is executed.