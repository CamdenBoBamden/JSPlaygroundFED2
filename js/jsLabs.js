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