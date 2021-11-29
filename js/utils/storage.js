const keyToToken = "token";
const keyToUser = "user";

export function saveToken(token) {
    pushLocalStorage(keyToToken, token);
}

export function getToken() {
    keyFromStorage(keyToToken);
}

export function saveUser(user) {
    pushLocalStorage(keyToUser, user);
}

export function getUsername() {
    const user = keyFromStorage(keyToUser);

    if (user) {
        return user.username;
    }

    return null;
}



function pushLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function keyFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }

    return JSON.parse(value);
}

