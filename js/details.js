import { productsApi } from "./settings/api.js";
import declearLoggedIn from "./utils/loggedIn.js";
import { toggleProduct } from "./utils/toggleProduct.js";

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
                                    <a href="#"><button class="atc-button" data-id="${json.id}" data-title="${json.title}" data-price="${json.price}" data-image="${image}">Add to cart</button></a>
                                  </div>`;
                                

    } catch (error) {
        console.log(error);
    }

    toggleProduct();

}

getDetails();