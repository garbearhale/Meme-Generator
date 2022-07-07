const imageFileInput = document.querySelector("#imageFileInput");
const imgURL = document.querySelector("#imgURL");
// const imgURL2 = document.querySelector("#imgURL2");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const canvas = document.querySelector("#meme");
const button = document.getElementById("button");
const form = document.getElementById("form");
const newMemes = document.getElementById("newMemes");

let image;

imageFileInput.addEventListener("change", (e) => {
    const imageDataUrl = URL.createObjectURL(e.target.files[0]);
    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener("load", () => {
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
    }, { once: true });
});

button.addEventListener("click", () => {
    if (imgURL.value) image.src = imgURL.value;
    image.addEventListener("load", () => {
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
    }, { once: true });
});

imgURL.addEventListener("change", () => {
    image = new Image();
    image.onload = function() {
        document.getElementById("imgURL").src = image.src;
    };
    image.addEventListener("change", () => {
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
    }, { once: true });
});


topTextInput.addEventListener("change", () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

bottomTextInput.addEventListener("change", () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});


function updateMemeCanvas(canvas, image, topText, bottomText) {
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 10;

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);
    // memeArea.append(image);
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    ctx.textBaseLine = "top";
    ctx.strokeText(topText, width / 2, yOffset);
    ctx.fillText(topText, width / 2, yOffset);

    ctx.textBaseLine = "bottom";
    ctx.strokeText(bottomText, width / 2, (height + 25) - yOffset);
    ctx.fillText(bottomText, width / 2, (height + 25) - yOffset);

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let image = new Image();
        image.src = imgURL.value;
        newMemes.appendChild(image);
    });
}