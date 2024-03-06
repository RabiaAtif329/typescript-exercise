let guestList = ["Abeeha","Beenish","Mehwish","Atif"];
let dontCome = guestList[1];
console.log(dontCome, "nai ahh skta");
guestList.splice(1, 2, "Amir");
guestList.forEach(guest => console.log(`salam ${guest},would you like to dinner with me?`));