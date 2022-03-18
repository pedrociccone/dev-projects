const form = document.querySelector("form");
const input = document.querySelector("form input");
const pending = document.querySelector(".pending");
const done = document.querySelector(".done");

function markAsDone(event) {
    const checkbox = event.target;
    const task = checkbox.closest("li");

    if (checkbox.checked) {
        done.append(task);
    } else {
        pending.append(task);
    };
};

function deleteTask(event) {
    const button = event.target;
    const task = button.closest("li");

    task.remove();
};

form.addEventListener("submit", event => {
    event.preventDefault();

    const task = document.createElement("li");

    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox");

    checkbox.addEventListener("input", markAsDone);

    const text = document.createElement("span");
    text.innerText = input.value;
    text.classList.add("text");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Deletar";

    deleteButton.addEventListener("click", deleteTask);

    task.append(checkbox);
    task.append(text);
    task.append(deleteButton)
    pending.append(task);

    input.value = "";
});