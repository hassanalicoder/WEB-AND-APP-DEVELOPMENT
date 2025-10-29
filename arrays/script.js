// 1. Declare an empty array using JS literal notation to store student names in future
let studentNamesLiteral = [];
console.log(studentNamesLiteral)

// 2. Declare an empty array using JS object notation to store student names in future
let studentNamesObject = new Array();


// 3. Declare and initialize a strings array
let stringsArray = ["Ali", "Sara", "Ahmed", "Fatima"];
console.log(stringsArray)

// 4. Declare and initialize a numbers array
let numbersArray = [10, 20, 30, 40, 50];
console.log(numbersArray)

// 5. Declare and initialize a boolean array
let booleanArray = [true, false, true, false];
console.log(booleanArray)

// 6. Declare and initialize a mixed array
let mixedArray = ["John", 25, true, null, "Developer"];
console.log(mixedArray)

// 7. Declare and Initialize an array and store available education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];


// Display the qualifications in the browser
document.write("<h2>Qualifications:</h2>");
for (let i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");}

// Question 8

let studentNames = ["Michael", "John", "Tony"];
let studentScores = [320, 230, 480];
let totalMarks = 500;

for (let i = 0; i < studentNames.length; i++) {
  let percentage = (studentScores[i] / totalMarks) * 100;
  document.write(
    "Score of " + studentNames[i] + " is " + studentScores[i] + 
    ". Percentage: " + percentage + "%<br>"
  );
}

// Question 9

let colors = ["Red", "Green", "Blue"];
document.write("<b>Initial Colors:</b> " + colors + "<br><br>");

// (a) Add color at the beginning
let addBeginning = prompt("Enter a color to add at the beginning:");
colors.unshift(addBeginning);
document.write("<b>After adding at beginning:</b> " + colors + "<br><br>");

// (b) Add color at the end
let addEnd = prompt("Enter a color to add at the end:");
colors.push(addEnd);
document.write("<b>After adding at end:</b> " + colors + "<br><br>");

// (c) Add two more colors at the beginning
colors.unshift("Purple", "Orange");
document.write("<b>After adding two more colors at beginning:</b> " + colors + "<br><br>");

// (d) Delete first color
colors.shift();
document.write("<b>After deleting first color:</b> " + colors + "<br><br>");

// (e) Delete last color
colors.pop();
document.write("<b>After deleting last color:</b> " + colors + "<br><br>");

// Question 10

let scores = [320, 230, 480, 120];

document.write("<b>Scores of Students:</b> " + scores + "<br>");
document.write("<b>Ordered Scores of Students:</b> " + scores);



// QUESTION 11


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 5); 
document.write("<h3>Cities List:</h3>");
document.write(cities + "<br>");
document.write("<h3>Selected Cities List:</h3>");
document.write(selectedCities); 


// QUESTION 12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

document.write("<h3>Original Array:</h3>");
document.write(arr + "<br>");
document.write("<h3>Single String:</h3>");
document.write(singleString);


