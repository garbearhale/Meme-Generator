const form = document.querySelector("form");
const makeMeme = document.querySelector("#makeMeme");

const buttons = document.querySelectorAll("img button");

for (let button of buttons) {
    button.addEventListener("click", function(event) {
        event.target.parentElement.remove();
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const newMemeInput = document.querySelector("#meme");
    const newImg = document.createElement("img");
    const newButton = document.createElement("button");
    newLi.innerText = newMemeInput.value;
    newButton.innerText = "Remove";

    newLi.append(newButton);
    makeMeme.append(newImg);
    form.reset();
});