let apple = "apple";
let five = 5;
let ten =10;
let fruits = ['apple','banana','orange']


//equality test with string
console.log("equality test with strings:" ,"apple" == "apple");

//equality and inequality test
console.log("inequality test with strings:" ,("apple"as string) != "orange");

//tests using the lower case function
console.log("lowercase function test:","HELLO".toLowerCase() == "hello");

//numerical test involving equality
console.log("equality test with numbers:",35 == 35);

//numerical test involving inequality
console.log("inequality test with numbers:",(35 as number) != 45);

//greater than and less than
console.log("greater than test:", 10 > 5);
console.log("less than test:", 5 < 10);

//greater than and equal to test
console.log("greater than and equal to:", 10 >= 10 );

//less than and equal to
console.log("less than or equal to test:", 5 <= 10);

//test using "and" operator
console.log("and operator test:", 5 == 5 && 10 > 5);

//test using "or" operator
console.log("or operator test:",5 == 5 || 5 > 10);

//test whether an item is include in array
 console.log("\nIs orange include in my fruit array");
 console.log(fruits.includes("orange"));

 console.log("Is orange not include in my fruit array");
 console.log(!fruits.includes("orange"));
