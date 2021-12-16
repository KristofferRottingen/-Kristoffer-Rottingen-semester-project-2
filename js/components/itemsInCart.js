import { getExistingProduct } from "../utils/cartFunctions.js";

const existingProducts = getExistingProduct();

const items =  existingProducts.length;

const itemsCart = document.querySelector(".fa-shopping-cart");

itemsCart.innerHTML = `(${items})`;

if (items === 0) {
    itemsCart.innerHTML = ``;
}

