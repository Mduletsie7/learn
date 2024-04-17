console.log('Your code goes here!')

function calcAge(n1: number, n2: number) {
    if (n1 > n2) {
        return n1 - n2;
    }
    else {
        throw new Error("Current year has to be greater than birth year!")
        
    }
    }


const currentYear = 2024;
const birthYear = 2000;
var currAge = calcAge(currentYear, birthYear)
console.log("You are " + currAge + " years old");

let favActivities: string[];
favActivities = ["Reading", "Music Production", "Programming"]

const person = {
    name: 'Mdu Kelvin Letsie',
    age: currAge,
    hobbies: favActivities
}

const button = document.querySelector("button");

button?.addEventListener("click", (event) => {
    alert(currAge)
})

console.log(person)

