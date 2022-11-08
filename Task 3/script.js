/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const output = document.getElementById("output");


document.getElementById("btn").addEventListener("click", () =>
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(json => {
            document.getElementById("message").hidden = true
            for (i = 0; i < json.length; i++) {
                const userLogin = document.createElement("h3");
                userLogin.textContent = json[i].login;

                const avatarURL = document.createElement("a");
                avatarURL.href = json[i].avatar_url;
                avatarURL.textContent = json[i].avatar_url;

                const userCard = document.createElement("div");
                userCard.classList.add("card");

                userCard.append(userLogin, avatarURL);

                document.getElementById("output").append(userCard);
            }
        })
);