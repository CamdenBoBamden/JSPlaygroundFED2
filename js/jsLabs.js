
document.getElementById('currentYear').textContent = new Date().getFullYear();

function showMadLib() {
    //Input variables 

    var country = document.getElementById('tbCountry').value;
    var adjective = document.getElementById('tbAdjective').value;
    var animal = document.getElementById('tbAnimal').value;
    var verb = document.getElementById('tbVerb').value;
    var place = document.getElementById('tbPlace').value;
    var liquid = document.getElementById('tbLiquid').value;

    var results = document.getElementById('madLibResults');

    var madLib = "If you are traveling in " + country + " and find yourself having to cross a piranha-filled river, here’s how to do it safely.  Piranhas are more " + adjective + " during the day, so cross the river at night.  Avoid areas with netted " + animal + " traps –piranhas may be waiting there looking to " + verb + " them!  Piranhas are attracted to fresh " + liquid + " and will migrate to it as often as possible.  Whatever you do, if you have an open wound, try to find another way to get back to the " + place + ".";

    results.textContent = madLib;


}

function showMultiplesOfSeven() {
   
    //Output
let sevenOutput = document.getElementById('sevenOutput');

    for (var i = 0; i < 30; i += 7) {
        if (i>0) {
            sevenOutput.innerHTML += i + '</br>';
        } 
    }
}

/*
 *CELSIUS CONVERTER Allow a user to enter a Celsius temperature.  On submit convert the temperature to Fahrenheit using the following formula to display the result.Celsius to Fahrenheit = Celsius temperature * 9 / 5 + 32
 */

function convertCeltoFah() {
    let userTemp = document.getElementById('userTemp').value;
    let fahOutput = document.getElementById('fahOutput');
    fahOutput.innerHTML = (userTemp * 9 / 5 + 32) + "&#8457;";
}

/*
 * AREA CALCULATORS Create calculators to figure out the area of the following shapes using the related formulas. 
 * Square = height * width
 * Triangle = (height*width)/2
 * Circle = 3.14 * radius * radius
 * 
 * 
 *         <input type="number" class="form-control" id="squareHeight" placeholder="height" />
                <input type="number" class="form-control" id="squareWidth" placeholder="width" />
                <input type="button" class="btn btn-danger" value="Area of Square" onclick="areaOfSquare()"/>
                <div>
                    <span id="squareArea"></span>
 */
function areaOfSquare() {
    let height = document.getElementById('squareHeight').value;
    let width = document.getElementById('squareWidth').value;
    document.getElementById('squareArea').textContent = (height * width)+" user unit of measure";
}
function areaOfTriangle() {
    let theight = document.getElementById('triangleHeight').value;
    let twidth = document.getElementById('triangleWidth').value;
    document.getElementById('triangleArea').textContent = ((theight * twidth)/2) + " user unit of measure";
}
function areaOfCircle() {
    let radius = document.getElementById('circleHeight').value;
    document.getElementById('circleArea').textContent = (3.14 * radius * radius) + " user unit of measure";
}



/*
 * RING AREA CALCULATORAllow a user to enter the outer radius and the inner radius of a ring.  Use those radii to calculate and display the area of the ring using the formulas below.Area of a circle = 3.14 * radius * radiusArea of a ring = Area of outer circle – area of inner circleORArea of a ring = 3.14(r12-r22)
 * 
 * 
 *                 <input type="number" class="form-control" id="outerRadius" placeholder="outer radius" />
                <input type="number" class="form-control" id="innerRadius" placeholder="inner radius" />
                <input type="button" class="btn btn-danger" value="Area of Ring" onclick="areaOfRing()" />
                <div>
                    <span id="ringArea"></span>
 */

function areaOfRing() {
    let outerRadius = document.getElementById('outerRadius').value;
    let innerRadius = document.getElementById('innerRadius').value;
    document.getElementById('ringArea').textContent = 3.14 * outerRadius * outerRadius - 3.14 * innerRadius*innerRadius;
}



/*
 * CHANGE LAB Allow a user to tell you an amount of money they have and then tell them how much that would be in quarters, dimes, nickels and pennies.NOTE: Google the Math.floor() and Math.round() methods for help in completing this lab.
 * 
 * 
 *  <input type="number" class="form-control" id="inputChange" placeholder="Amount needed in change" />
                <input type="button" class="btn btn-block" value="CalcChange" onclick="changeCalc()" />
                <div>
                    <span id="changeGiven"></span>
                </div>
 * 
 * 
 */

function changeCalc() {
    let input = document.getElementById('inputChange').value;
    let output = document.getElementById('changeGiven');

    if (input <100) {
        input = input * 100;
    }
    let qNbr = 0;
    let dNbr = 0;
    let nNbr = 0;
    let pNbr = 0;
    
    if (input >= 25) {
        do {
            qNbr++;
            input -= 25;
        } while (input >= 25);
    }
    if (input >= 10) {
        do {
            dNbr++;
            input -= 10;
        } while (input >= 10);
    }
    if (input >= 5) {
        do {
            nNbr++;
            input -= 5;
        } while (input >= 5);
    }
    if (input > 1) {
        do {
            pNbr++;
            input -= 1;
        } while (input >= 1);
    } 
    output.textContent = "Change: "+qNbr + " quarters " + dNbr + " dimes " + nNbr + " nickels " + pNbr + " pennies";
}


/*
 CALCULATORAllow a user to enter two numbers and to select one of the following arithmetic operations: add, subtract, multiply, divide.  Return the answer of the two numbers based on which operation button they clicked.
 <input type="number" class="form-control" id="inputNbr1" placeholder="Number" />
                <input type="number" class="form-control" id="inputNbr2" placeholder="Number" />
                <input type="button" class="btn btn-danger" value="+" onclick="addition()"/>
                <input type="button" class="btn btn-danger" value="-" onclick="subtraction()"/>
                <input type="button" class="btn btn-danger" value="x" onclick="multiply()"/>
                <input type="button" class="btn btn-danger" value="/" onclick="division()"/>
                <div>
                    <span id="answer"></span>
 */


function addition() {
    let userInput1 = parseInt(document.getElementById('inputNbr1').value);
    let userInput2 = parseInt(document.getElementById('inputNbr2').value);
    document.getElementById('answer').textContent = (userInput1 + userInput2);
}
function subtraction() {
    let userInput1 = parseInt(document.getElementById('inputNbr1').value);
    let userInput2 = parseInt(document.getElementById('inputNbr2').value);
    document.getElementById('answer').textContent = (userInput1 - userInput2);
    }
function multiply() {
    let userInput1 = parseInt(document.getElementById('inputNbr1').value);
    let userInput2 = parseInt(document.getElementById('inputNbr2').value);
    document.getElementById('answer').textContent = (userInput1 * userInput2);
    }
function division() {
    let userInput1 = parseInt(document.getElementById('inputNbr1').value);
    let userInput2 = parseInt(document.getElementById('inputNbr2').value);
    document.getElementById('answer').textContent = (userInput1 / userInput2);
    }






/*
 CALCULATOR (ADVANCED)Allow a user to enter two numbers and to select one of the following arithmetic operations: add, subtract, multiply, divide.  Return the answer of the two numbers based on which operation button they clicked.  Complete the lab creating only one function that will calculate the correct answer regardless of which operation is selected.NOTE:  Google a JavaScript Switch/Case statement for help completing this lab.
                    Enter numbers to calculator.
                </p>
                <input type="number" class="form-control" id="inputNbr11" placeholder="Number" />
                <input type="number" class="form-control" id="inputNbr22" placeholder="Number" />
                <input type="button" class="btn btn-danger" value="+" onclick="calcAdvanced('add')" />
                <input type="button" class="btn btn-danger" value="-" onclick="calcAdvanced('sub')" />
                <input type="button" class="btn btn-danger" value="x" onclick="calcAdvanced('multi')" />
                <input type="button" class="btn btn-danger" value="/" onclick="calcAdvanced('divi')" />
                <div>
                    <span id="answer2"></span>
 */

function calcAdvanced(arg) {
    let userInput1 = parseInt(document.getElementById('inputNbr11').value);
    let userInput2 = parseInt(document.getElementById('inputNbr22').value);

    switch (arg) {
        case 'add':
            document.getElementById('answer2').textContent = (userInput1 + userInput2);
            break;
        case 'sub':
            document.getElementById('answer2').textContent = (userInput1 - userInput2);
            break;
        case 'multi':
            document.getElementById('answer2').textContent = (userInput1 * userInput2);
            break;
        case 'divi':
            document.getElementById('answer2').textContent = (userInput1 / userInput2);
            break;
        default:
            document.getElementById('answer2').textContent = "no";
            break;
    }



}