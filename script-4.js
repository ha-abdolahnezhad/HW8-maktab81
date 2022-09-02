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