'use strict';

// #region ***  Callback-Visualisation - show___         ***********

const showPokemon = function (jsonObject) {
    try {
        console.info(jsonObject);
        let htmlstring = "";
        for (let card of jsonObject.pokemon) {
            htmlstring += `<div class="card">
            <div class="ImageContainer">
          <img src="${card.img}" alt="picture of ${card.name}" class="cover">
            </div>
            <div class="content">
              <h1>${card.name}</h1>
              <h2>Type: <p class="Type" id="${card.id}">${card.type}</p></h2>
            </div>
        </div> `;
    }
        document.querySelector(".js-cards").innerHTML = htmlstring;

        for (let card of jsonObject.pokemon) {

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

            if (card.type.includes("Ground")) {
                document.getElementById(card.id).style.color = "#D35400";
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
    } catch (err) {
        console.error(err);
    }
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
