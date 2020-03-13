/*
 * Variables needed to keep track of players, aliens, and keys pressed.
 * 
 * 
 *     <div id="gameboard">
                    <img src="img/ninja.png" alt="ninja" id="ninja" />
                    <img src="img/alien.png" alt="alien" id="alien" />   
                <p>Aliens Banished: <span class="text-danger" id="score"></span></p>
            
 */
//Creat player obect and set the movement speed value

var ninja = {
    speed:256
};

//Create an alien object
var alien = {
    
};

//Keep running variable for aliens caught
var aliensCaught = 0;

//Empty Object for keys pressed - will be populated during the keypress event

var keysDown = {};

//keyboard Events:
//keydown - when a key is pushed the code for the key can be recorded 
//keyup - when a key is released the code can be recorded
//keypress - more generic, in some cases, a different key code is produced for keypress than keyup or keydown

document.addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
    e.preventDefault();//this stops the keys from scrolling the browser window
});

document.addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
    //prevent the default for scrolling the browser window
    e.preventDefault();
});

//capture the elements necessary 
var gameboard = document.getElementById('gameboard');
var score = document.getElementById('score');
var alienElement = document.getElementById('alien');

alienElement.style.display = "inline-block";
alienElement.style.position = "absolute";

var reload =
    //The unnammed function below will plave the alien in the random position on the board. Each time the alien is initiated on the board (after each time you capture and alien), The equations below will set a new, random x and y positioning for the top and left absolute position of the alien. 
    function () {
        //The Math.random() function returns a floating-point, psuedo-random number in the range of 0-1 (inclusive of 0 but not 1) with approx uniform distribution over that range - which you can then scale to your desired range. 

        alien.x = 32 + (Math.random() * (gameboard.offsetWidth - 64));
        alien.y = 32 + (Math.random() * (gameboard.offsetHeight - 64));

        alienElement.style.top = alien.y + "px";
        alienElement.style.left = alien.x + "px";
        console.log(Math.random());
        console.log(alien.x + "--alien.x");
        console.log(alien.y + "--alien.y");

        //The below is to keep the score of the aliens caught

        score.textContent = aliensCaught;
    }

var ninjaElement = document.getElementById('ninja');

//The below syntax may seem off, but it may make more sense when you consider that a function is an object, and we are simply assigning a name to it. Think of it as saying var myVar = [1,2,3];

//The ability to declare a function in this way is useful in object oriented programming because we can have a function be a property of another object. 

var set = function () {
    ninja.x = gameboard.offsetWidth / 2;
    ninja.y = gameboard.offsetHeight / 2;
    ninjaElement.style.top = ninja.y + "px";
    ninjaElement.style.left = ninja.x + "px";
    reload();
}

//Below we will attach the keys from our keyboard to the movement we want the ninja to have in the game. Look in canvas for a great resource on what number each key on your keyboard represents. 

var update = function (modifier) {
    if (37 in keysDown) {//moving left 
        ninja.x -= ninja.speed * modifier;
        ninjaElement.style.left = ninja.x + "px";
        //flip the image to make the movement of the ninja look more natural 
        ninjaElement.style.transform = "scaleX(-1)";
    }
    if (38 in keysDown) {//moving up
        ninja.y -= ninja.speed * modifier;
        ninjaElement.style.top = ninja.y + "px";

    }
    if (39 in keysDown) {//moving right
        ninja.x += ninja.speed * modifier;
        ninjaElement.style.left = ninja.x + "px";
        ninjaElement.style.transform = "scaleX(1)";
    }
    if (40 in keysDown) {//moving down
        ninja.y += ninja.speed * modifier;
        ninjaElement.style.top = ninja.y + "px";
    }

    if (ninja.x <= (alien.x+32) && alien.x <= (ninja.x + 32) && ninja.y <= (alien.y + 32) && alien.y<=(ninja.y + 32)) {
        ++aliensCaught;
        reload();
    }

}

//The below is set for the animation of the ninja

var main = function () {
    var now = Date.now();
    var delta = now - then;
    //this is setting the speed of the actual animation of the ninja
    update(delta / 1000);

    then = now;

    //The requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the broswer calls a specified function to update an animaiton before the next repaint. 

    requestAnimationFrame(main);

}

var then = Date.now();

//below we run the functions set and main

set();
main();