const imageFileInput = document.querySelector("#imageFileInput");
const imgURL = document.querySelector("#imgURL");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const canvas = document.querySelector("#canvas");
const button = document.getElementById("button");
const form = document.getElementById("form");
const memeArea = document.getElementById("memeArea");
const memeArea2 = document.getElementById("memeArea2");
const memeArea3 = document.getElementById("memeArea3");
const memeButton = document.getElementById("memeButton");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const textButton = document.getElementById("textButton");

let image = new Image();

imageFileInput.addEventListener("change", (e) => {
    const imageDataUrl = URL.createObjectURL(e.target.files[0]);
    let image = new Image();
    image.src = imageDataUrl;
    const newCanvas = document.createElement("canvas");
    newCanvas.id = "newCanvas";
    image.addEventListener("load", () => {
        updateMemeCanvas(newCanvas, image, topTextInput.value, bottomTextInput.value);
    });
});

form.addEventListener("submit", () => {
    const newCanvas = document.createElement("canvas");
    newCanvas.id = "newCanvas";
    if (imgURL.value) {
        let image = new Image();
        image.id = "newImage";
        image.src = imgURL.value;
        image.addEventListener("load", () => {
            updateMemeCanvas(newCanvas, image, topTextInput.value, bottomTextInput.value);
        });
    }
});

form3.addEventListener("submit", () => {
    const newCanvas = document.getElementById("newCanvas");
    memeArea3.append(newCanvas);
});


function updateMemeCanvas(canvas, image, topText, bottomText) {
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 10;

    memeArea.append(canvas);
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);
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
    ctx.strokeText(bottomText, width / 2, height - yOffset);
    ctx.fillText(bottomText, width / 2, height - yOffset);
    form.reset();
}