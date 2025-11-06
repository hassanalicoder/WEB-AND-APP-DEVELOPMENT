// Empty multidimensional array
var matrix = [[], [], []];
console.log(matrix);

// question no 2

var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

console.log(matrix);

// question no 3

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// question no 4

var tableNumber = +prompt("Enter a number to show its multiplication table:");
var tableLength = +prompt("Enter the length of the multiplication table:");

console.log("Multiplication table of " + tableNumber);

for (var i = 1; i <= tableLength; i++) {
  console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

// question no5


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h3>Array Items:</h3>");
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

document.write("<h3>Elements with Index:</h3>");
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}


// question no6

document.write("<h3>6. Series Generation</h3>");

// a. Counting: 1, 2, 3, ..., 15
document.write("<h4>a. Counting (1 to 15):</h4>");
var count = "";
for (var i = 1; i <= 15; i++) {
    count += i;
    if (i < 15) {
        count += ",";
    }
}
document.write(count + "<br>");

// b. Reverse counting: 10, 9, 8, ..., 1
document.write("<h4>b. Reverse counting (10 to 1):</h4>");
var reverseCount = "";
for (var i = 10; i >= 1; i--) {
    reverseCount += i;
    if (i > 1) {
        reverseCount += ", ";
    }
}
document.write(reverseCount + "<br>");

//  Even: 0, 2, 4, ..., 20
document.write("<h4>c. Even (0 to 20):</h4>");
var even = "";
for (var i = 0; i <= 20; i += 2) {
    even += i;
    if (i < 20) {
        even += ", ";
    }
}
document.write(even + "<br>");

// Odd: 1, 3, 5, ..., 19
document.write("<h4>d. Odd (1 to 19):</h4>");
var odd = "";
for (var i = 1; i <= 19; i += 2) {
    odd += i;
    if (i < 19) {
        odd += ", ";
    }
}
document.write(odd + "<br>");

//  Series: 2k, 4k, 6k, ..., 20k
document.write("<h4>e. Series (2k to 20k):</h4>");
var seriesK = "";
for (var i = 2; i <= 20; i += 2) {
    seriesK += i + "k";
    if (i < 20) {
        seriesK += ", ";
    }
}
document.write(seriesK + "<br>");

// question no7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var searchItem = prompt("Welcome to ABC Bakery. What do you want to order, sir/ma'am?").toLowerCase();

var found = false;
var index = -1;

for (var i = 0; i < A.length; i++) {
    if (A[i] === searchItem) {
        found = true;
        index = i;
        break; 
    }
}


if (found) {
    alert(searchItem + " is **available** at index " + index + " in our bakery.");
} else {
    alert("We are sorry. " + searchItem + " is **not available** in our bakery.");
}

// question no8


var A = [24, 53, 78, 91, 12];

var largestNum = A[0]; 
for (var i = 1; i < A.length; i++) {
    if (A[i] > largestNum) {
        largestNum = A[i];
    }
}

document.write("<h3>8. Largest Number</h3>");
document.write("Array items: " + A.join(", ") + "<br>");
document.write("The largest number is **" + largestNum + "**"); 

// question no9


var A = [24, 53, 78, 91, 12];

var smallestNum = A[0]; 

for (var i = 1; i < A.length; i++) {
  
    if (A[i] < smallestNum) {
        smallestNum = A[i]; 
    }
}

document.write("<h3>9. Smallest Number</h3>");
document.write("Array items: " + A.join(", ") + "<br>");
document.write("The smallest number is **" + smallestNum + "**"); 

// question no 10


document.write("<h3>10. Multiples of 5 (1 to 100)</h3>");

var multiples = "";
for (var i = 5; i <= 100; i += 5) {
    multiples += i;
    if (i < 100) {
        multiples += ", ";
    }
}

document.write(multiples);
