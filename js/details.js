import { productsApi } from "./settings/api.js";
import declearLoggedIn from "./utils/loggedIn.js";
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
                                    <a href="#"><button data-id="${json.id}" data-title="${json.title}" data-price="${json.price}" data-image="${image}">Add to cart</button></a>
                                  </div>`;
                                

    } catch (error) {
        console.log(error);
    }

    const detailsButton = document.querySelector(".info-content a button");

    detailsButton.addEventListener("click", handleClick);

    function handleClick(event) {

        const id = this.dataset.id;
        const title = this.dataset.title;
        const price = this.dataset.price;
        const image = this.dataset.image;

        const currentCart = getExistingProduct();

        const existingProduct = currentCart.find(function (prod) {
            return prod.id === id;
        });

        if(existingProduct === undefined){
            const product = { id: id, title: title, price: price, image: image };

            currentCart.push(product);
        
            saveToStorage(currentCart);
        }

        location.href = "cart.html";

        
    }


    function saveToStorage(product) {
        localStorage.setItem("cart", JSON.stringify(product));
    }
}

getDetails();