import { getUsername } from "./storage.js";



export default function declearLoggedIn() {

    const username = getUsername();

    console.log(username);

    const loggedIn = document.querySelector(".dropdown");
    const userIcon = document.querySelector(".nav .nav-icons ul li .fa-user-circle");

    console.log(userIcon);

    if (username) {

        userIcon.style.color = "green";


        loggedIn.innerHTML = `<ul>
                                <li>
                                    <p>Hello ${username}</p>
                                    <a href="login.html">Log in</a>
                                </li>
                            </ul>`;
    }

}
