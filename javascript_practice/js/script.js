//Setting Entries Variables//
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specs = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];


// function to get user input//
// Prompts and confirmaion to get character sets//
function getUserInput() {
    //Number outputs prompt entry as a 'number'//
    var amount = Number(prompt('Choose number of characters for password here.'));
    var lower = confirm('Click ok to include a lowercase letter?');
    var upper = confirm('Click ok to include a uppercase letter?');
    var numbers = confirm('Click ok to include a number?');
    var specs = confirm('Click ok to include a special character?');

    //always return functions//
    return [amount, lower, upper, numbers, specs];
}

//setting var for user input//
var choices = getUserInput();
console.log(choices);

// creating a password generator function//

function generatePass() {
    //established variables to create password format//
    var pass = '';
    var includelower = choices[1];
    var includeupper = choices[2];
    var includenumbers = choices[3];
    var includespecs = choices[4];
    var charAmount = choices[0];
    var possibleChars = [];

    //using prompt responsing to design format of generated password//
    if (includelower) {
        possibleChars = possibleChars.concat(lower);
    }
    if (includeupper) {
        possibleChars = possibleChars.concat(upper);
    }
    if (includenumbers) {
        possibleChars = possibleChars.concat(numbers);
    }
    if (includespecs) {
        possibleChars = possibleChars.concat(specs);
    }

    //loops random character generator to the 'amount' user designates//
    for (var count = 0; count < charAmount; count++) {
        var randomNum = Math.random();
        var randomIndex = Math.floor(randomNum * possibleChars.length);
        var randomChar = possibleChars[randomIndex];

        //concatenates random character generator in pass string//
        pass += randomChar;
    }

    return pass;

}

var password = generatePass();
console.log(password);

document.body.innerText=password;