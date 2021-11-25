import { heroApi } from "./settings/api.js";
import { productsApi } from "./settings/api.js";

const heroSection = document.querySelector(".hero-section");
const productCard = document.querySelector(".row");

async function getHeroImage() {

    try {
        const rep = await fetch(heroApi);

        const img = await rep.json();

        console.log(img);

        const heroImage = "http://localhost:1337" + img.hero_banner.url;

        heroSection.style.backgroundImage += `url("${heroImage}")`;

    } catch (error) {
        console.log(error);
    }
}

getHeroImage();

// Get products from API

async function getproducts() {

    try {
        const rep = await fetch(productsApi);

        const data = await rep.json();

        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].image.url)

            const productImage = "http://localhost:1337" + data[i].image.url;

            productCard.innerHTML += `<div class="col">
                <div class="card">
                    <div class="card-image">
                        
                    </div>
                    <div class="product-text">
                        <h3 class="card-title">${data[i].title}</h3>
                        <p class="price">${data[i].price} kr</p>
                    </div>
                </div>
            </div>`;

            const cardImage = document.querySelector(".card-image");

            cardImage.style.backgroundImage += `url("${productImage}")`;
        }

    } catch (error) {
        console.log(error);
    }
}

getproducts();