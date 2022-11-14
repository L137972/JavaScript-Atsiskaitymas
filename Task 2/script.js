/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

//create a global value for the counter (how many clicks were made)
let counter = 0;

document.getElementById("btn__element").addEventListener("click", () => {
    //add +1 to the counter whenever a "click" happens on the "btn__element" element
    counter++;

    //update the counter number to appear on the file
    document.getElementById("btn__state").textContent = counter;
})