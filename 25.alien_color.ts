//create a variable called alien_color

let alien_color : string = 'green';
//use if statement to test whether alien color is green.if it is,print a message that the player.....
if (alien_color == 'green'){
    console.log("player just earned 5 points !");
}
//another version that fails
  alien_color = 'yellow';
  //the version which fails have no output
if (alien_color == 'green'){
    console.log("player just earned 5 points !");
}