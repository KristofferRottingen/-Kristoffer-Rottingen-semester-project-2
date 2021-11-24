import { heroApi } from "./settings/api.js";
import { peroductsApi } from "./settings/api.js";

const heroSection = document.querySelector(".hero-section");

async function getHeroImage() {

    try {
        const rep = await fetch(heroApi);

        const img = await rep.json();

        console.log(img);

        heroSection.innerHTML += `<div class="hero-image">
        <img src="${img.hero_banner.formats.large.name}" alt="${img.hero_banner_alt_text}">
        </div>`;

    } catch (error) {
        console.log(error);
    }
}

getHeroImage();