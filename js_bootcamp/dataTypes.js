// Exercise 1: Numbers  
// Declare integer and floating point number  
let integerNum = 42;      
let floatNum = 3.14;       

console.log("Integer:", integerNum);  
console.log("Floating number:", floatNum);  

// Perform arithmetic operations  
let numA = 10;  
let numB = 4;  

console.log("Addition:", numA + numB);          
console.log("Subtraction:", numA - numB);     
console.log("Multiplication:", numA * numB);   
console.log("Division:", numA / numB);         
console.log("Modulus:", numA % numB);         
console.log("Exponentiation:", numA ** numB);   

// Exercise 2: Boolean and Operators  
// Comparison operators  
let x = 8;  
let y = 12;  

let isXgreaterThanY = x > y;               // false  
let isXLessOrEqualY = x <= y;               // true  
let isXEqualY = x === y;                     // false  
let isXNotEqualY = x !== y;                  // true  

console.log("Is x greater than y?", isXgreaterThanY);  
console.log("Is x less than or equal to y?", isXLessOrEqualY);  
console.log("Is x equal to y?", isXEqualY);  
console.log("Is x not equal to y?", isXNotEqualY);  

// Logical operations  
let a = true;  
let b = false;  

console.log("a AND b:", a && b);   // false  
console.log("a OR b:", a || b);    // true  
console.log("NOT a:", !a);         // false  

// Assignment operators  
let p = 10;  
console.log("Initial p:", p);  

p += 5;     // p = p + 5  
console.log("After += 5:", p);  

p -= 3;     // p = p - 3  
console.log("After -= 3:", p);  

p *= 2;     // p = p * 2  
console.log("After *= 2:", p);  

p /= 4;     // p = p / 4  
console.log("After /= 4:", p);  

p %= 3;     // p = p % 3  
console.log("After %= 3:", p);  
