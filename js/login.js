import messageDisplay from "./components/messageDisplay.js";
import { apiUrl } from "./settings/api.js";
import { saveToken, saveUser } from "./utils/storage.js";


const form = document.querySelector(".login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");


form.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault();

    message.innerHTML = "";

    const valueOfUsername = username.value.trim();
    const valueOfPassword = password.value.trim();

    if (valueOfUsername.length === 0 || valueOfPassword.length === 0) {
        return messageDisplay("warning", "Please insert right values", ".message-container");
    }

    login(valueOfUsername, valueOfPassword);

}


async function login(username, password) {

    const url = apiUrl + "auth/local";

    const dataNeeded = JSON.stringify({ identifier: username, password: password });

    const optionsMethod = {
        method: "POST",
        body: dataNeeded,
        headers: {
            "Content-Type": "application/json",
        },

    };

    try {
        const resp = await fetch(url, optionsMethod);

        const json = await resp.json();

        console.log(json);

        if (json.user) {

            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "/";
        }

        if (json.error) {
            messageDisplay("warning", "Login details is invalid", ".message-container");
        }

    }
    catch (error) {
        console.log(error);
    }
}