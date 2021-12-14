import { getExistingProduct } from "./utils/cartFunctions.js";
import declearLoggedIn from "./utils/loggedIn.js";

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
                                <button><i class="fas fa-backspace"></i></button>
                              </div>`;
});