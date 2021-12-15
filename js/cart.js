import { getExistingProduct } from "./utils/cartFunctions.js";
import declearLoggedIn from "./utils/loggedIn.js";
import { toggleProduct } from "./utils/toggleProduct.js";
import messageDisplay from "./components/messageDisplay.js";

declearLoggedIn();

const message = document.querySelector(".message-container");

const products = getExistingProduct();

const cartContent = document.querySelector(".cart-content");

message.innerHTML += "";


products.forEach(product => {
    cartContent.innerHTML += `<div class="cart-info">
                                <a href="details.html?id=${product.id}"><img src="${product.image}" alt="img"></a>
                                <a href="details.html?id=${product.id}"><p>${product.title}</p></a>
                                <p>${product.price} kr</p>
                                <button><i data-id="${product.id}" class="fas fa-backspace atc-button"></i></button>
                              </div>`;
});

toggleProduct();

if (detailsButton === null) {
    messageDisplay("message", " You have no products in the cart", ".message-container");
};
