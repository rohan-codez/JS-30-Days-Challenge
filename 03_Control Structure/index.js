// Checking if a number is positive negative or zero

num = 9

if (num > 0) {
    console.log("Positive");
}

else if (num < 0) {
    console.log("Negative");
}

else {
    console.log("Zero");
}

// Checking if a person is 18+

age = 13

if (num > 18) {
    console.log("Welcome");
}

else {
    console.log("Nope");
}

// Find Largest of three numbers

num1 = 10
num2 = 57
num3 = 923

if (num1 > num2) {
    if (num1 > num3) {
        console.log("num1");
    }
    else {
        console.log("num3");
    }
}
else {
    if (num2 > num3) {
        console.log("num2")
    }
    else {
        console.log("num3");
    }
}

// SWITCH CASES
let dayNumber = 5
let day;
switch (dayNumber) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    default:
        day = "Invalid day number";
}
console.log(day);

let score = 90
let grade;
switch (true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    case (score >= 60):
        grade = "D";
        break;
    case (score >= 0):
        grade = "F";
        break;
    default:
        grade = "Invalid score";
}

console.log(grade);

