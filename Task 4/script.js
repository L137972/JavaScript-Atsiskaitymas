/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
            for(i = 0; i < json.length; i++) {
                const carBrand = document.createElement("h3");
                carBrand.textContent = json[i].brand;
                
                const carModels = document.createElement("p");
                for(x = 0; x < json[i].models.length; x++) {
                    x + 1 != json[i].models.length ? carModels.textContent += json[i].models[x] + ", " : carModels.textContent += json[i].models[x];
                }
                
                const carCard = document.createElement("div");
                carCard.classList.add("card");

                carCard.append(carBrand, carModels);

                document.getElementById("output").append(carCard);
            }
    });