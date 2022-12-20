'use strict';

// #region ***  Callback-Visualisation - show___         ***********

const showPokemon = function (jsonObject) {
    try {
        console.info(jsonObject);
        let htmlstring = "";
        for (let card of jsonObject.pokemon) {
            htmlstring += `<div class="c-card" tabindex="0">
            <div class="c-ImageContainer">
          <img src="${card.img}" alt="picture of ${card.name}" class="c-cover">
            </div>
            <div class="c-content">
              <h1>${card.name}</h1>
              <h2>Type: <p class="c-Type" id="${card.id}">${card.type}</p></h2>
            </div>
        </div> `;
        }
        document.querySelector(".js-cards").innerHTML = htmlstring;

        for (let card of jsonObject.pokemon) {

            if (card.type.includes("Ground")) {
                document.getElementById(card.id).style.color = "#D35400";
            }

            if (card.type.includes("Psychic")) {
                document.getElementById(card.id).style.color = "#DC71CA";
            }

            if (card.type.includes("Ice")) {
                document.getElementById(card.id).style.color = "#1ABC9C";
            }

            if (card.type.includes("Poison")) {
                document.getElementById(card.id).style.color = "#8E44AD";
            }

            if (card.type.includes("Fighting")) {
                document.getElementById(card.id).style.color = "#C0392B";
            }

            if (card.type.includes("Water")) {
                document.getElementById(card.id).style.color = "#18A8E8";
            }

            if (card.type.includes("Flying")) {
                document.getElementById(card.id).style.color = "#3498DB";
            }

            if (card.type.includes("Grass")) {
                document.getElementById(card.id).style.color = "#4CAF50";
            }

            if (card.type.includes("Bug")) {
                document.getElementById(card.id).style.color = "#F1C40F";
            }

            if (card.type.includes("Normal")) {
                document.getElementById(card.id).style.color = "#AAB7B8";
            }

            if (card.type.includes("Electric")) {
                document.getElementById(card.id).style.color = "#F39C12";
            }

            if (card.type.includes("Fairy")) {
                document.getElementById(card.id).style.color = "#F4B1F4";
            }

            if (card.type.includes("Rock")) {
                document.getElementById(card.id).style.color = "#92908C";
            }

            if (card.type.includes("Ghost")) {
                document.getElementById(card.id).style.color = "#664468";
            }

            if (card.type.includes("Dragon")) {
                document.getElementById(card.id).style.color = "#34495E";
            }

            if (card.type.includes("Steel")) {
                document.getElementById(card.id).style.color = "#95A5A6";
            }

            if (card.type.includes("Dark")) {
                document.getElementById(card.id).style.color = "#000000";
            }

            if (card.type.includes("Fire")) {
                document.getElementById(card.id).style.color = "orangered";
            }
        }
        ListenToCardClick(jsonObject);
        ListenToCardEnter(jsonObject);
    } catch (err) {
        console.error(err);
    }
};

const ListenToCardClick = function (jsonObject) {
    const cards = document.querySelectorAll(".c-card");
    for (const card of cards) {
        card.addEventListener("click", function () {
            console.log("clicked");

            let htmlstring = "";
            for (let pokemon of jsonObject.pokemon) {
                if (pokemon.id == card.querySelector("p").id) {
                    let spawnchance = parseFloat(pokemon.spawn_chance) * 100;
                    htmlstring += `<a class="c-close" href="#${card.querySelector("p").id}">&times;</a>
                 <div class="c-ImageContainer">
               <img src="${pokemon.img}" alt="picture of ${pokemon.name}" class="c-cover">
                 </div>
                 <div class="c-content">
                   <h4><p class="c-content__title">Name:</p>${pokemon.name}</h4>
                   <h4><p class="c-content__title">Type:</p><p class="c-Type" id="js-type ${pokemon.id}">${pokemon.type}</p></h4>
                   <h4><p class="c-content__title">Weaknesses:</p>${pokemon.weaknesses}</h4>
                   <h4><p class="c-content__title">Spawn Chance:</p>${spawnchance.toFixed(2)}%</h4>
                   <div id="gauge"></div>
                   <div id="gauge2"></div>
                 </div>`;
                    document.querySelector(".js-popup").innerHTML = htmlstring;
                    document.location.href = '#popup1';
                    let weight = pokemon.weight.slice(0, -3);
                    let height = pokemon.height.slice(0, -2);
                    console.log(height)
                    GraphWeight(parseInt(weight));
                    GraphHeight(parseFloat(height));
                }
            }

        })
    }
};

const ListenToCardEnter = function (jsonObject) {
    const cards = document.querySelectorAll(".c-card");
    for (const card of cards) {
        card.addEventListener("keypress", function (event) {

            if (event.keyCode == 13) {
                let htmlstring = "";
                for (let pokemon of jsonObject.pokemon) {
                    if (pokemon.id == card.querySelector("p").id) {
                        let spawnchance = parseFloat(pokemon.spawn_chance) * 100;
                        htmlstring += `<a class="c-close" href="#${card.querySelector("p").id}">&times;</a>
                 <div class="c-ImageContainer">
               <img src="${pokemon.img}" alt="picture of ${pokemon.name}" class="c-cover">
                 </div>
                 <div class="c-content">
                   <h4><p class="c-content__title">Name:</p>${pokemon.name}</h4>
                   <h4><p class="c-content__title">Type:</p><p class="c-Type" id="js-type ${pokemon.id}">${pokemon.type}</p></h4>
                   <h4><p class="c-content__title">Weaknesses:</p>${pokemon.weaknesses}</h4>
                   <h4><p class="c-content__title">Spawn Chance:</p>${spawnchance.toFixed(2)}%</h4>
                   <div id="gauge"></div>
                   <div id="gauge2"></div>
                 </div>`;
                        document.querySelector(".js-popup").innerHTML = htmlstring;
                        document.location.href = '#popup1';
                        let weight = pokemon.weight.slice(0, -3);
                        let height = pokemon.height.slice(0, -2);
                        console.log(height)
                        GraphWeight(parseInt(weight));
                        GraphHeight(parseFloat(height));
                    }
                }
            }
        })
    }
};

const GraphWeight = function (weight) {
    var gauge = new JustGage({
        id: "gauge", // required
        value: weight,
        min: 0,
        max: 200,
        title: "Weight",
        label: "Weight",
        levelColors: [
            "#ff0000",
            "#f9c802",
            "#a9d70b"
        ],
        gaugeWidthScale: 0.6,
        counter: true,
        width: 150,
        height: 100,
        symbol: "kg",
        humanFriendly: false,
        humanFriendlyDecimal: 2,
        valueFontFamily: "#28333A",
        labelFontColor: "#28333A",
        valueFontColor: "#28333A",
    });
};

const GraphHeight = function (height) {
    var gauge = new JustGage({
        id: "gauge2", // required
        value: height,
        min: 0,
        max: 6,
        title: "Height",
        label: "Height",
        levelColors: [
            "#ff0000",
            "#f9c802",
            "#a9d70b"
        ],
        gaugeWidthScale: 0.6,
        counter: true,
        width: 150,
        height: 100,
        symbol: "m",
        decimals: 2,
        valueFontFamily: "#28333A",
        labelFontColor: "#28333A",
        valueFontColor: "#28333A",
    });
};



// #endregion

// 2 Aan de hand van een longitude en latitude gaan we de openwheater map API ophalen.
let getAPI = async () => {
    // Eerst bouwen we onze url op
    const ENDPOINT = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`

    // Met de fetch API proberen we de data op te halen.
    const request = await fetch(`${ENDPOINT}`)
    const data = await request.json()
    console.log(data)

    showPokemon(data)
}

document.addEventListener('DOMContentLoaded', function () {
    getAPI()
})


