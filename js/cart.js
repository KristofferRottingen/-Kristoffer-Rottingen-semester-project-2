import { getExistingProduct } from "./utils/cartFunctions.js";
import declearLoggedIn from "./utils/loggedIn.js";
import { toggleProduct } from "./utils/toggleProduct.js";
import messageDisplay from "./components/messageDisplay.js";

declearLoggedIn();

const message = document.querySelector(".message-container");

const products = getExistingProduct();

const cartContent = document.querySelector(".cart-content");

message.innerHTML += "";

if(products.length === 0){
    messageDisplay("notification", "You have no products added to the cart", ".message-container");
}


products.forEach(product => {
    cartContent.innerHTML += `<div class="cart-info">
                                <a href="details.html?id=${product.id}"><img src="${product.image}" alt="img"></a>
                                <a href="details.html?id=${product.id}"><p>${product.title}</p></a>
                                <p class="price">${product.price} kr</p>
                                <button><i data-id="${product.id}" class="fas fa-backspace atc-button"></i></button>
                              </div>`;
});

toggleProduct();

