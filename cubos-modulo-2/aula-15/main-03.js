const select = document.querySelector("select");
const button = document.querySelector("button");
const email = document.querySelector(".email");
const telefone = document.querySelector(".telefone");

button.addEventListener("click", () => {

    if (select.value === "E-mail") {
        email.toggleAttribute("hidden");
        telefone.toggleAttribute("hidden");
    } else {
        email.toggleAttribute("hidden");
        telefone.toggleAttribute("hidden");
    }
});