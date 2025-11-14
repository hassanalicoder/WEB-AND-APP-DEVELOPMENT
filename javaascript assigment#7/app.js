    // Q1:
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome.");


// Q2: 
var favModel = prompt("Enter your favorite mobile phone model:");
var lengthOfString = favModel.length;
document.write("<h2>Mobile Phone Model</h2>");
document.write("My favorite phone is: **" + favModel + "**<br>");
document.write("Length of string: **" + lengthOfString + "**");


// Q3: 
var word = "Pakistani";

var indexN = word.indexOf("n");

document.write("<h2>Character Index</h2>");
document.write("String: **" + word + "**<br>");
document.write("Index of letter 'n': **" + indexN + "**"); 

// Q4:
var text = "Hello World";
var lastIndexL = text.lastIndexOf("l");

document.write("<h2>Last Character Index</h2>");
document.write("String: **" + text + "**<br>");
document.write("Last index of letter 'l': **" + lastIndexL + "**"); 


// Q5: 
var word = "Pakistani";
var charAtIndex3 = word.charAt(3);

document.write("<h2>Character at Index</h2>");
document.write("String: **" + word + "**<br>");
document.write("Character at index 3: **" + charAtIndex3 + "**"); 


// Q6: 
var firstName = prompt("Enter your first name (Q6):");
var lastName = prompt("Enter your last name (Q6):");

var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "! Welcome (from concat).");

// Q7: 
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write("<h2>String Replacement</h2>");
document.write("City: **" + city + "**<br>");
document.write("After replacement: **" + newCity + "**");

// Q8: 
var message = "Ali and Sami are best friends. They play cricket and football together.";

var newMessage = message.replace(/and/g, "&");

document.write("<h2>Global Replacement</h2>");
document.write("Original Message: **" + message + "**<br>");
document.write("Replaced Message: **" + newMessage + "**");



// Q9: 
var strValue = "472";

var numValue = Number(strValue);

document.write("<h2>Type Conversion</h2>");
document.write("Value: **" + strValue + "**<br>");
document.write("Type: **" + typeof strValue + "**<br>");
document.write("Value: **" + numValue + "**<br>");
document.write("Type: **" + typeof numValue + "**");


// Q10: 
var userInput = prompt("Enter text to convert to uppercase:");

var upperCase = userInput.toUpperCase();

document.write("<h2>Case Conversion</h2>");
document.write("User input: **" + userInput + "**<br>");
document.write("Upper case: **" + upperCase + "**");


// Q11: 
var userInput = prompt("Enter text to convert to title case (e.g., javascript):");

var titleCase = userInput.toLowerCase().charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

document.write("<h2>Title Case Conversion</h2>");
document.write("User input: **" + userInput + "**<br>");
document.write("Title case: **" + titleCase + "**");

// Q12: 
var num = 35.36;
var numString = num.toString();


var result = numString.replace(".", "");

document.write("<h2>Number Cleanup</h2>");
document.write("Number: **" + num + "**<br>");
document.write("Result: **" + result + "**"); 


// Q13: 
function validateUsername() {
    var username = prompt("Enter your username:");
    var specialChars = ['@', '.', '!', ','];
    var containsSpecial = false;

    for (var i = 0; i < specialChars.length; i++) {
        if (username.indexOf(specialChars[i]) !== -1) {
            containsSpecial = true;
            break;
        }
    }

    if (containsSpecial) {
        alert("Enter a valid username. It should not contain the special symbols @, ., !, or ,");
      
    } else {
        alert("Username accepted: " + username);
    }
}

validateUsername();


// Q14: 
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

var searchItem = userInput.toLowerCase();
var found = false;
var index = -1;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchItem) {
        found = true;
        index = i;
        break;
    }
}

if (found) {
    alert(userInput + " is **available** at index " + index + " in our list.");
} else {
    alert("We are sorry. " + userInput + " is **not available** in our bakery.");
}


// Q15: 
function validatePassword() {
    var password = prompt("Enter your password (Must be >= 6 chars, contain letters and numbers, and not start with a number):");

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    var firstChar = password.charCodeAt(0);
    if (firstChar >= 48 && firstChar <= 57) {
        alert("Password can not begin with a number.");
        return;
    }


    var hasLetter = false;
    var hasNumber = false;

    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasLetter = true;
        }
        
        else if (charCode >= 48 && charCode <= 57) {
            hasNumber = true;
        }
    }

    if (!hasLetter || !hasNumber) {
        alert("Password must contain both alphabets and numbers.");
        return;
    }

    alert("Password accepted!");
}

validatePassword();


