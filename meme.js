const memesList = document.getElementById('memesList');
const pTag = document.createElement('p');
pTag.innerText = "Hi this is text";
memesList.appendChild(pTag);
const img = document.createElement('img');
// img.src = "https://d.newsweek.com/en/full/1970093/labrador-puppy.jpg";
memesList.appendChild(img);

const imgURL = document.getElementById('imgURL');
console.log(imgURL);