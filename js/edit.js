import { productsApi } from "./settings/api.js";
import messageDisplay from "./components/messageDisplay.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const urlEdit = productsApi + "/" + id;

console.log(urlEdit);

const form = document.querySelector(".edit-form");
const message = document.querySelector(".message-container");
const idInput = document.querySelector("#id");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const imageFile = document.querySelector("#file-field");
const currentImg = document.querySelector(".current-img-div");

async function getProductDate() {

    try {
        const resp = await fetch(urlEdit);
        const productInfo = await resp.json();

        const productImage = "http://localhost:1337" + productInfo.image.url

        currentImg.innerHTML += `<div class="current-image">
                                    <label for="image">Current image</label>
                                    <div class="current-img" style="background-image: url('${productImage}')";></div>
                                </div>`;

        console.log(productInfo);

        idInput.value = productInfo.id;
        title.value = productInfo.title;
        price.value = productInfo.price;
        description.value = productInfo.description;
        // missing img property 



    } catch (error) {
        console.log(error);
    }
}

getProductDate();

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    message.innerHTML = "";

    const idValue = idInput.value.trim();
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = imageFile.files[0];

    if (idValue.length === 0 || titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return messageDispaly("warning", " Please insert right values", ".message-container");
    }

    productEditUpdate(idValue, titleValue, priceValue, descriptionValue, imageValue);
}


async function productEditUpdate(id, title, price, description) {

    const data = JSON.stringify({ id: id, title: title, price: price, description: description, });

    const keyToToken = "token";

    const token = localStorage.getItem(keyToToken);

    const fixedToken = JSON.parse(token);


    const optionsMethod = {
        method: "PUT",
        body: data,
        headers: {
            Authorization: `Bearer ${fixedToken}`,
        },
    };

    try {
        const resp = await fetch(productsApi, optionsMethod);
        const json = await resp.json();

        if (json.updated_at) {
            messageDisplay("success", "The product is Updated", ".message-container");

        } else {
            messageDisplay("error", json.message, ".message-container");
        }

    } catch (error) {
        console.log(error);
    }

}