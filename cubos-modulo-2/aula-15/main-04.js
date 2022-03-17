const todosOsElementos = document.querySelector("*");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const p = document.querySelector("p");
const label = document.querySelector("label");
const input = document.querySelector("input");
const button = document.querySelector("button");
const hr = document.querySelector("hr");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const ol = document.querySelector("ol");
const img = document.querySelector("img");

button.addEventListener("click", () => {

    if (input.value === "h1") {

        if (h1.style.border === "2px solid rgb(216, 0, 0)") {
            h1.style.border = "";
        } else {
            h1.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "h2") {

        if (h2.style.border === "2px solid rgb(216, 0, 0)") {
            h2.style.border = "";
        } else {
            h2.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "p") {

        if (p.style.border === "2px solid rgb(216, 0, 0)") {
            p.style.border = "";
        } else {
            p.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "label") {

        if (label.style.border === "2px solid rgb(216, 0, 0)") {
            label.style.border = "";
        } else {
            label.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "input") {

        if (input.style.border === "2px solid rgb(216, 0, 0)") {
            input.style.border = "";
        } else {
            input.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "button") {

        if (button.style.border === "2px solid rgb(216, 0, 0)") {
            button.style.border = "";
        } else {
            button.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "hr") {

        if (hr.style.border === "2px solid rgb(216, 0, 0)") {
            hr.style.border = "";
        } else {
            hr.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "ul") {

        if (ul.style.border === "2px solid rgb(216, 0, 0)") {
            ul.style.border = "";
        } else {
            ul.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "li") {

        if (li.style.border === "2px solid rgb(216, 0, 0)") {
            li.style.border = "";
        } else {
            li.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "ol") {

        if (ol.style.border === "2px solid rgb(216, 0, 0)") {
            ol.style.border = "";
        } else {
            ol.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "img") {

        if (img.style.border === "2px solid rgb(216, 0, 0)") {
            img.style.border = "";
        } else {
            img.style.border = "2px solid rgb(216, 0, 0)";
        };

    } else if (input.value === "*") {

        if (todosOsElementos.style.border === "2px solid rgb(216, 0, 0)") {
            todosOsElementos.style.border = "";
        } else {
            todosOsElementos.style.border = "2px solid rgb(216, 0, 0)";
        };

    };
});