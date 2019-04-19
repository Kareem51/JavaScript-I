// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {
    console.log("Function was invoked!");
    };
    myFunction();
   
    let anotherFunction =  (param) => {
      return param;
    };
    anotherFunction("Example");
   
    let add = (param1, param2) => {
      return param1 + param2;
    }
   add(1,2);
   
   let subtract =  (a, b) => {
    return a - b;
   };
   subtract(1,2);


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

numArr = [10,20,30,40,50];
let triple = numArr.map(function (num){
    return num * 3;
});
console.log(triple)