import { getUsername } from "../utils/storage.js";

export function renderProducts(productsToRender) {
    const productsContainer = document.querySelector(".row");
    productsContainer.innerHTML = "";


    const username = getUsername();

    productsToRender.forEach(function (product) {
        const productImage = "http://localhost:1337" + product.image.url

        productsContainer.innerHTML += `<div class="col">
                                            <div class="card">
                                                <div class="card-image" style="background-image: url('${productImage}')";></div>
                                                <div class="product-text">
                                                    <div class="product-icon">
                                                        <a class="edit" style="display: none;" href="edit.html?id=${product.id}"><i class="fas fa-edit"></i></a>
                                                    </div>
                                                    <h3 class="card-title">${product.title}</h3>
                                                    <p class="price">${product.price} kr</p>
                                                    <a href="details.html?id=${product.id}"><button>View Product</button></a>
                                                </div>
                                            </div>
                                        </div>`;
    });

    if (username) {
        const editProduct = document.querySelectorAll(".edit");

        for (let i = 0; i < editProduct.length; i++) {

            const edit = editProduct[i];

            edit.style.display = "block";
        }
    }
}