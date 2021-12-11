import { heroApi } from "./settings/api.js";
import { productsApi } from "./settings/api.js";
import declearLoggedIn from "./utils/loggedIn.js";
import { getUsername } from "./utils/storage.js";

declearLoggedIn();

const heroSection = document.querySelector(".hero-section");
const productCard = document.querySelector(".row");


async function getHeroImage() {

    try {
        const rep = await fetch(heroApi);

        const img = await rep.json();

        const heroImage = "http://localhost:1337" + img.hero_banner.url;

        heroSection.style.backgroundImage += `url("${heroImage}")`;

    } catch (error) {
        console.log(error);
    }
}

getHeroImage();

// Get products from API

const username = getUsername();

console.log(username);

async function getproducts() {



    try {
        const rep = await fetch(productsApi);

        const data = await rep.json();

        console.log(data);


        for (let i = 0; i < data.length; i++) {

            if(i === 4){
                break;
            };

            const productImage = "http://localhost:1337" + data[i].image.url

            productCard.innerHTML += `  <div class="col">
                                            <div class="card">
                                                <div class="card-image" style="background-image: url('${productImage}')";>
                                                </div>
                                                <div class="product-text">
                                                    <div class="product-icon">
                                                        <a class="edit" style="display: none;" href="edit.html?id=${data[i].id}"><i class="fas fa-edit"></i></a>
                                                    </div>
                                                    <h3 class="card-title">${data[i].title}</h3>
                                                    <p class="price">${data[i].price} kr</p>
                                                    <a href="details.html?id=${data[i].id}" ><button>View Product</button></a>
                                                </div>
                                            </div>
                                        </div>`;
        }

        if (username) {
            const editProduct = document.querySelectorAll(".edit");

            for (let i = 0; i < editProduct.length; i++) {

                const edit = editProduct[i];

                edit.style.display = "block";
            }
        }



    } catch (error) {
        console.log(error);
    }
}

getproducts();


