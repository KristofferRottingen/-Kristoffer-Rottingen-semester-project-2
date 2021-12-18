import { productsApi } from "./settings/api.js";
import declearLoggedIn from "./utils/loggedIn.js";
import { toggleProduct } from "./utils/toggleProduct.js";
import { getExistingProduct } from "./utils/cartFunctions.js";

declearLoggedIn();

const detailImage = document.querySelector(".image");
const infoSection = document.querySelector(".info-section");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const urlEdit = productsApi + "/" + id;


async function getDetails() {
    
    try {
        const resp = await fetch(urlEdit);
        const json = await resp.json();

        const image = "http://localhost:1337" + json.image.url;

        console.log(json);

        detailImage.innerHTML += `<img class="details-image" src="${image}" alt="detail image">`;

        infoSection.innerHTML += `<div class="info-content">
                                    <h1>${json.title}</h1>
                                    <div class="line"></div>
                                    <p>${json.description}</p>
                                    <h2>${json.price} kr</h2>
                                    <a href="#"><button class="atc-button details-button" data-id="${json.id}" data-title="${json.title}" data-price="${json.price}" data-image="${image}">Add to cart</button></a>
                                    <p class="note" style="display: none;"> This Product is already in the cart </p>
                                  </div>`;
                                

    } catch (error) {
        console.log(error);
    }

    // getting rid of the button if the product alredy are in the cart --->

    const button = document.querySelector(".details-button");
    const note = document.querySelector(".note");

    const currentCart = getExistingProduct();

    const existingProduct = currentCart.find(function (prod) {
        return prod.id === id;
    });

    if(existingProduct){
        button.style.display = "none";
        note.style.display = "block";
    }

    toggleProduct();

}

getDetails();