export default function messageDispaly(messageType, message, target) {
    const targetElement = document.querySelector(target);

    targetElement.innerHTML = `<div class="message ${messageType}">${message}</div`;
};