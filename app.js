console.log('Your code goes here!');
function calcAge(n1, n2) {
    if (n1 > n2) {
        return n1 - n2;
    }
    else {
        throw new Error("Current year has to be greater than birth year!");
    }
}
var currentYear = 2024;
var birthYear = 2000;
var currAge = calcAge(currentYear, birthYear);
console.log("You are " + currAge + " years old");
var favActivities;
favActivities = ["Reading", "Music Production", "Programming"];
var person = {
    name: 'Mdu Kelvin Letsie',
    age: currAge,
    hobbies: favActivities
};
var button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (event) {
    alert(currAge);
});
console.log(person);
