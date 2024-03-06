// creating a Guest List Array
let guestList = ["Abeeha","Beenish","Mehwish","Atif"];

//  making variable for those guest who cant Come  
let dontcome = guestList [0];
console.log(dontcome, "i will not coming");

// add or remove values from guest list array
guestList.splice(0, 1, "Aisha");

// message print for bigger table
console.log("Good News ! We have found a new table for dinner.");

//adding a new guest at starting index of array
guestList.unshift("Kashaf");

//adding a new guest at ending index of array
guestList.push("Aqsa");

//get a middle index of our guest list array
let middleIndex : number = Math.floor(guestList.length / 2);

//adding a new guest to middle index of array
guestList.splice(middleIndex,0, "Amna");

//print message of updated list
console.log("updated list of our guest");

//sending a message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me?`));

//inform that only two guest can be invited for dinner
console.log("unfortunately ,the new dinner table not arrived on time,so i can invite only two guest to dinner with me.");

// using while loop to remove guest from the array until only two names remain
while(guestList.length > 2 ) {
    let removeguest = guestList.pop();
    console.log(`sorry, ${removeguest} I cant invte you to dinner.`);
}
//sending invitations to the last two guest of the list
console.log("invitation to the last two guest");
guestList.forEach(lasttwo => console.log(`luckily ${lasttwo}, you are still invited to dinner`));

//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("EmptyList:", guestList);
