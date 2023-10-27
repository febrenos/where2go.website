export function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }

    return null;
}

export function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${expirationDate.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}
