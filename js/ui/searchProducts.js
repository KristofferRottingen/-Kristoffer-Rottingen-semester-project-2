import { renderProducts } from "./renderProducts.js";

export function searchProducts(products) {

    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        
        const valueSearch = event.target.value.trim().toLowerCase();

        const searchedProducts = products.filter(function (product) {
            if (product.title.toLowerCase().startsWith(valueSearch)) {
                return true;
            }
        });


        renderProducts(searchedProducts);
    };
}