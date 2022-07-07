const imgURL = document.querySelector("#imgURL");
const imgFile = document.querySelector("#imgFile");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const button = document.querySelector("#button");

const canvas = document.querySelector("#meme");
const form = document.getElementById("form");

image = new Image();

imgFile.addEventListener("change", (e) => {
    const imageDataUrl = URL.createObjectURL(e.target.files[0]);
    image.src = imageDataUrl;
    image.addEventListener("load", () => {
        memeCanvas(canvas, image, topText.value, bottomText.value);
    });
});

imgURL.addEventListener("change", () => {
    if (imgURL.value) image.src = imgURL.value;
    // else alert("Enter a link to an image");
    image.addEventListener("load", () => {
        memeCanvas(canvas, image, topText, bottomText);
    });
});

topText.addEventListener("change", () => {
    if (topText.value) {
        canvas.append(topText.value);
        memeCanvas(canvas, image, topText, bottomText);
    }

});

bottomText.addEventListener("change", () => {
    if (bottomText.value) {
        memeCanvas(canvas, image, topText, bottomText);
    }
});

function memeCanvas(canvas, image, topText, bottomText) {
    // let newMemes = document.querySelector("newMemes");
    // newMemes.addEventListener("submit", function(event) {
    //     event.preventDefault();
    // });

    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 10;

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);
    ctx.topText;
    ctx.bottomText;

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
}