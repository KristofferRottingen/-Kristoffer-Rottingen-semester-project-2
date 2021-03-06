import { getUsername } from "./storage.js";



export default function declearLoggedIn() {

    const username = getUsername();

    const loggedIn = document.querySelector(".dropdown");
    const userIcon = document.querySelector(".nav .nav-icons ul li .fa-user-circle");

    userIcon.addEventListener("click", toggleDropMenu);

    function toggleDropMenu() {
        loggedIn.classList.toggle("show");
    }

    if (username) {

        userIcon.style.color = "green";


        loggedIn.innerHTML = `<p>Hello ${username}</p>
                            <a href="add.html">Add product</a>
                            <a class="log-out" href="index.html">Log out</a>`;


        const logOut = document.querySelector(".log-out");

        logOut.addEventListener("click", clearStorage);

        function clearStorage() {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    }
}
