import { getExistingProduct } from "./cartFunctions.js";

export function toggleProduct() {
    const detailsButton = document.querySelectorAll(".atc-button");

    for (let i = 0; i < detailsButton.length; i++) {
        const button = detailsButton[i];

        button.addEventListener("click", handleClick);

        function handleClick() {

            const id = this.dataset.id;
            const title = this.dataset.title;
            const price = this.dataset.price;
            const image = this.dataset.image;

            const currentCart = getExistingProduct();

            const existingProduct = currentCart.find(function (prod) {
                return prod.id === id;
            });

            if(existingProduct === undefined){
                const product = { id: id, title: title, price: price, image: image };

                currentCart.push(product);
            
                saveToStorage(currentCart);
            } else{
                const newProd = currentCart.filter((prod) => prod.id !== id);
                saveToStorage(newProd);
            }

            location.href = "cart.html";

        
        }
    }

    function saveToStorage(product) {
        localStorage.setItem("cart", JSON.stringify(product));
    }
}