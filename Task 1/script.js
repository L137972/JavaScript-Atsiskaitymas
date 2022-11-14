/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;

------------------------------------------------------------------- */



document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const inputWeight = document.getElementById("search").value; //Get input value

    //calculate conversion from kg to lb, g, oz
    const weightInPounds = inputWeight * 2.2046;
    const weightInGrams = inputWeight / 0.0010000;
    const weightInOunces = inputWeight * 35.274;

    //create new elements to show results
    const poundsResult = document.createElement("h4");
    const gramsResult = document.createElement("h4");
    const ouncesResult = document.createElement("h4");

    //add result values to the newly created elements
    poundsResult.textContent = "Pounds: " + weightInPounds + " (lb)";
    gramsResult.textContent = "Grams: " + weightInGrams + " (g)";
    ouncesResult.textContent = "Ounces: " + weightInOunces + " (oz)";

    //add the new elements to the html file
    document.getElementById("output").append(poundsResult, gramsResult, ouncesResult);

});