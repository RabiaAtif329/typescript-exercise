//Making a array of coountries and print its original order
let countriestovisit : string[ ] = ["Brazil","China","America","DenMark"];
console.log("originalorder:", countriestovisit);

//print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:",[...countriestovisit].sort());

//show that the array still in original order
console.log("still in original order:",countriestovisit);

//print the array in reverse order without modifying the actual array list
console.log("reverse order:",[...countriestovisit].reverse());

//show that the array still in original order
console.log("still in original order:",countriestovisit);

//we have changed the original array order now
console.log("original array reversed:",countriestovisit.reverse());

//print the array to show that its back to its original now
console.log("Back to original order:",countriestovisit.reverse());

//print the array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:",countriestovisit.sort());

//we have changed again the original array order now in reverse order again
console.log("original array reversed again:",countriestovisit.reverse());


