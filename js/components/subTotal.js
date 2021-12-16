import { getExistingProduct } from "../utils/cartFunctions.js";

const products = getExistingProduct();

export function subTotal() {
    let sub = 0;

    for (let i = 0; i < products.length; i++) {
        sub = Number(sub) + Number(products[i].price);
    };

    const totalPrice = document.querySelector(".subtotal h3");

    totalPrice.innerHTML = `${sub} kr`;
};

subTotal();