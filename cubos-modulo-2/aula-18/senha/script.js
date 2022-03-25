const input = document.querySelector("input");
const button = document.querySelector("button");

// button.addEventListener("click", () => {

//     if (input.hasAttribute("type")){
//         input.removeAttribute("type");
//     } else {
//         input.setAttribute("type", "password");
//     }

// });

input.addEventListener("focus", () => {
    input.removeAttribute("type");
})

input.addEventListener("blur", () => {
    input.setAttribute("type", "password");
})