//Single Line Comment

/*Multiline Comment*/

//alert() is a method built in to browsers that causes an unstylable popup 
//alert("JavaScript is working!");

//variables can change values and data-types (not type-safe)
let x = 10;

//Use console.log() to view the value of x in the inspector

//This will NOT show up on the HTML doc - Instead it shows in the console tab in the inspector
console.log(x);

x = "Hello!";

console.log("Modified x = " + x);

//Copyright Code


//Create a new Date object to display for our copyright

let currentDate = new Date();//empty constructor for today's date

console.log(currentDate);
//Create a variable to take ONLY the year from the Date object
let currentYear = currentDate.getFullYear();

//console.log(currentYear);


//Create a variable for our output element
let copyright = document.getElementById('copyright');
console.log(copyright);
//Update the content of the output element
copyright.textContent = currentYear;

///////////////Arrays////////////////
//JS Arrays are LIFO - Last In First Out
//JS Arrays do NOT have a set size
//Can be accessed like C# - with a 0-based index
let colors = ['blue', 'brown', 'orange', 'pink', 'red', 'green'];

//To add an item to the array, use .push()
colors.push("purple");
console.log(colors);

//To remove the last item added, use .pop()
//colors.pop();

//Select a color from the array and use it as the content for our <strong>
//Create a variable for the strong tag
let colorSpan = document.getElementById('yourcolor');
//use .textContent to give a value to strong tag's content
colorSpan.textContent = colors[6];
//Style the color of the text in the strong tag to match the color in the array
colorSpan.style.color = colors[6];

//////////////Functions//////////////
//Functions are declared with the 'function' keyword
//The code inside of a function will ONLY run when called upon in reaction to an event (button click, keystroke, keyup, keydown, page load, etc.)

//This function will be called when the user submits their favorite color (by click the button)
function displayFavoriteColor() {
    //Create a variable to store user input
    let userFavoriteColor = document.getElementById('tbFavColor').value;//.value will only get the content from the element/node that we are capturing
    //Create a variable for the output element
    let colorMessage = document.getElementById('color-message');
    //Update the span content and display a message
    colorMessage.textContent = userFavoriteColor + " is my favorite color!";
    //Use JS to add styling
    colorMessage.style.backgroundColor = userFavoriteColor;
}


function calcWaterWeight() {
    //Access user input
    let nbrGallons = document.getElementById('tbNbrGallons').value;
    //access output element
    let weightResult = document.getElementById('weight-result');
    //Display total weight
    weightResult.textContent = nbrGallons + " gallons of water weighs " + (nbrGallons * 8.33).toFixed(2) + "lbs.";
   
}

///////////////Looping/////////////
//Syntax is the same as C# for: for, while, and do while

//Use a for loop to display 1-10

let loopToTen = document.getElementById('loop-to-ten');

for (var i = 1; i < 10; i++) {
    loopToTen.innerHTML += i + '<br/>';

//.textContent escapes HTML characters and prints them as plain text
    //.innerHTML is what we use to recognize HTML elements returned to an output - this is a potential security rist
    //do not render any HTML unless you have full control over the control. 
}


/////Branching///////
//Syntax is the same for if, if/else, switch as C#

function showSingleMilestone() {
    //User Input
    let userAge = document.getElementById('tbUserSingleMilestone').value;
    //Output
    let singleMilestone = document.getElementById('single-milestone');
    //Switch to check user age and print message accordingly
    switch (userAge) {
        case '13':
            singleMilestone.innerHTML = "You are now a <strong>teenager</strong>!";
            break;

        case '18':
            singleMilestone.innerHTML = "You are <em>technically</em> an adult.";
            break;
        case '21':
            singleMilestone.innterHTML = "You can do something here but I can't remember...";
            break;
        case '25':
            singleMilestone.innterHTML = "You can rent a car!";
            break;

        case '55':
            singleMilestone.innerHTML = "<strong>You are eligible for AARP!</strong>";
            break;

        default:
            singleMilestone.innterHTML = "<strong>Sorry no milestones for you this year.</strong>";
            break;
    }

}

//Event Listener to call milestone function
//Event Listners can be used to wire up functions to events, similar to the onclick attribute in HTML


let btnSingleMilestone = document.getElementById('btnSingleMilestone');
btnSingleMilestone.addEventListener('click', showSingleMilestone);

//function that uses else/if that displays mulitple milestones

function showMultipleMilestones() {
    //Input variable
    let userAge = document.getElementById('tbUserAgeMultiMilestone').value;
    //Output variable
    let multipleMilestones = document.getElementById('multiple-milestones');
    //If statements to check for milestones add them to a list
    let listOfMilestones = "<ul>";

    if (userAge >= 55) {
        listOfMilestones += "<li>You are eligible for AARP!</li>";
    }
    if (userAge >= 25) {
        listOfMilestones += "<li>You can rent a car.</li>";
    }
    if (userAge >= 21) {
        listOfMilestones += "<li>Something happened at 21 you can't remember.</li>";
    }
    if (userAge >= 18) {
        listOfMilestones += "<li>You are technically an adult.</li>";
    }
    if (userAge >= 13) {
        listOfMilestones += "<li>You are/were a teenager.</li>";
    }
    if (userAge < 13) {
        listOfMilestones += "<li>Sorry no milestones yet!</li>";
    }

    listOfMilestones += "</ul>";
    //Printing the list as content in the output

    multipleMilestones.innerHTML = listOfMilestones;
}

//Event Listener

let btnMultiMilestones = document.getElementById('btnMultiMilestones');
btnMultiMilestones.addEventListener('click', showMultipleMilestones);