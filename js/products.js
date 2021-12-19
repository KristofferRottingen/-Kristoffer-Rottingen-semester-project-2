import { productsApi } from "./settings/api.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import messageDispaly from "./components/messageDisplay.js";
import declearLoggedIn from "./utils/loggedIn.js";

declearLoggedIn();

const message = document.querySelector(".message-container");
message.innerHTML = "";

async function getProducts() {
    
    try {
        const resp = await fetch(productsApi);
        const json = await resp.json();
        
        renderProducts(json);
        searchProducts(json);

    } catch (error) {
        console.log(error);
        messageDispaly("error", "An error has occured please conatct us", ".message-container");
    }
}

getProducts()