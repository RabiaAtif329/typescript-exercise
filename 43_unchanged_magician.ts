let magician : string[] = ['Herry potter','Hermione granger','Ron weasly','Albus dumbledre'];
function copyArray(arr:string[]){
    return[...arr]
}

function make_great (magicianArray:string[] ){

    for(let i=0; i<magicianArray.length; i++){
        magicianArray[i] = 'The Great' + magicianArray[i]

    }
}
function show_magicians(magicians:string[]){
magicians.forEach(element => {
    console.log(element);
});
}
copyArray(magician)
const copyMagicianArray = copyArray(magician)

make_great(copyMagicianArray);
console.log('This is my original array:');
show_magicians(magician);

console.log('This is my modified copy of array:');
show_magicians(copyMagicianArray);