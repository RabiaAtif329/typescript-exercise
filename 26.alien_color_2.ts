// Choose a color for an alien as you did in Exercise 25
let aliencolor: string  = "green";

//write an if-else chain
//If the alien’s color is green
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

if(aliencolor == "green"){
    console.log("player just earned 5 points for shooting the alien.");
}else{
    console.log("player just earned 10 points.")
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
aliencolor = 'yellow';
if(aliencolor == "green"){
    console.log("player just earned 5 points for shooting the alien.");
}else{
    console.log("player just earned 10 points.")
}



// • Write one version of this program that runs the if block and another that runs the else block.