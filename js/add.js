import messageDispaly from "./components/messageDisplay.js";
import { getToken } from "./utils/storage.js";
import { apiUrl } from "./settings/api.js";
import { productsApi } from "./settings/api.js";

const form = document.querySelector(".add-form");
const message = document.querySelector(".message-container");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const imageUrl = document.querySelector("#image-url");

form.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageUrlValue = imageUrl.value.trim();

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageUrlValue.length === 0) {
        return messageDispaly("warning", " Please insert right values", ".message-container");
    }

}