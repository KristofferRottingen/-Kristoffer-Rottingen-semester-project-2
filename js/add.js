import messageDispaly from "./components/messageDisplay.js";
import { productsApi } from "./settings/api.js";


const form = document.querySelector(".add-form");
const message = document.querySelector(".message-container");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const imageFile = document.querySelector("#file-field");

form.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = imageFile.files[0];
    console.log(imageValue);

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return messageDispaly("warning", " Please insert right values", ".message-container");
    }

    productsAdd(titleValue, priceValue, descriptionValue, imageValue);

}

async function productsAdd(title, price, description, image) {

    const formData = new FormData();
    formData.append("files.image", image, image.name)
    const data = JSON.stringify({ title: title, price: price, description: description, });
    formData.append("data", data);
    const keyToToken = "token";

    const token = localStorage.getItem(keyToToken);

    const fixedToken = JSON.parse(token);


    const optionsMethod = {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${fixedToken}`,
        },
    };



    try {
        const resp = await fetch(productsApi, optionsMethod);
        const json = await resp.json();

        if (json.updated_at) {
            messageDispaly("success", "The product is added", ".message-container");

            form.reset();
        } else {
            messageDispaly("error", json.message, ".message-container");
        }

        console.log(json);

    } catch (error) {
        console.log(error);
    }

}