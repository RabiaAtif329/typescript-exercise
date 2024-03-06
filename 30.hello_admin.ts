// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
const usernames:string[] = ['Admin','Aisha','Aqsa','Sofia','Fatima'];

// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see 
//a status report?


usernames.forEach(username => {
    if(username == 'Admin'){
        console.log('Hello Admin,would you like to see a status report?');
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else{
        console.log(`Hello ${username}, thank you for logging in again.`)
    }
}






