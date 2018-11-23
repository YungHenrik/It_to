const rBtn = document.getElementById("rBtn");
const vBtn = document.getElementById("vBtn");

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

let bildeListe = ["Bilder/Bilde1.jpg", "Bilder/Bilde2.jpg", "Bilder/Bilde3.jpg", "Bilder/Bilde4.jpg", "Bilder/Bilde5.jpg", ];

let n = 0;

rBtn.onclick = function () {
    n++;
    if (n >= bildeListe.length) {
        n = 0
    }
    document.body.style.backgroundImage = `url(${bildeListe[n]})`
};

vBtn.onclick = function () {
    n--;
    if (n < 0) {
        n = 4
    }
    document.body.style.backgroundImage = `url(${bildeListe[n]})`
};

