export const PagodaContainer = document.createElement("section");
PagodaContainer.setAttribute("class", "pagoda-container");
document.body.appendChild(PagodaContainer);

const apricot = new Image();
apricot.src = "/assets/img/Pagoda/apricot.png";
const cat = new Image();
cat.src = "/assets/img/Pagoda/cat.png";
const fortune = new Image();
fortune.src = "/assets/img/Pagoda/fortune.png";
const fortunePray = new Image();
fortunePray.src = "/assets/img/Pagoda/fortune-pray.png";
const handPray = new Image();
handPray.src = "/assets/img/Pagoda/hand-pray.png";
const lanternCenter = new Image();
lanternCenter.src = "/assets/img/Pagoda/lantern-center.png";
const lanternCenter2 = new Image();
lanternCenter2.src = "/assets/img/Pagoda/lantern-center.png";
const sakuraLeft = new Image();
sakuraLeft.src = "/assets/img/Pagoda/sakura-left.png";
const fortunePrayRight = new Image();
fortunePrayRight.src = "/assets/img/Pagoda/fortune-pray.png";
const fireworkRight = new Image();
fireworkRight.src = "/assets/img/Wishing/firework1.png";
fireworkRight.setAttribute("class", "firework-right");
const PagodaIncense = new Image();
PagodaIncense.src = "/assets/img/Pagoda/pagoda-incense.png";

//after pray starts
const haloContainer = document.createElement("div");
const halo = document.createElement("div");
haloContainer.setAttribute("class", "halo-container");
halo.setAttribute("class", "halo");

haloContainer.appendChild(halo);
//after pray ends

const PagodaDiv = document.createElement("div");
PagodaDiv.setAttribute("class", "pagoda-div");
const LayerUnder = document.createElement("div");
LayerUnder.setAttribute("class", "layer-under");
PagodaContainer.appendChild(PagodaDiv);
PagodaContainer.appendChild(LayerUnder);

LayerUnder.appendChild(PagodaIncense);
PagodaIncense.setAttribute("class", "pagoda");
apricot.setAttribute("class", "apricot");
sakuraLeft.setAttribute("class", "sakura-left");
lanternCenter.setAttribute("class", "lantern-center");
lanternCenter2.setAttribute("class", "lantern-center2");
PagodaContainer.appendChild(sakuraLeft);
PagodaContainer.appendChild(apricot);
PagodaContainer.appendChild(lanternCenter);
PagodaContainer.appendChild(lanternCenter2);

const lanternCenter3 = document
    .querySelector(".lantern-center")
    .cloneNode(true);
lanternCenter3.setAttribute("class", "lantern-center3");
PagodaContainer.appendChild(lanternCenter3);
const lanternCenter4 = document
    .querySelector(".lantern-center2")
    .cloneNode(true);
lanternCenter4.setAttribute("class", "lantern-center4");
PagodaContainer.appendChild(lanternCenter4);
PagodaContainer.appendChild(fireworkRight);

// before pray starts
const catContainer = document.createElement("div");
catContainer.setAttribute("class", "cat-container");
cat.setAttribute("class", "cat");
PagodaContainer.appendChild(catContainer);
catContainer.appendChild(cat);
const buttonPrayDiv = document.createElement("div");
buttonPrayDiv.setAttribute("class", "button-pray-div");
PagodaContainer.appendChild(buttonPrayDiv);
const buttonPray = document.createElement("button");
buttonPray.textContent = "Pray";
buttonPray.setAttribute("class", "button-pray");
buttonPrayDiv.appendChild(buttonPray);

fortune.setAttribute("class", "fortune");
PagodaContainer.appendChild(fortune);
// before pray ends

//after pray starts
fortunePray.setAttribute("class", "fortune-pray");
const handPrayDiv = document.createElement("div");
handPrayDiv.setAttribute("class", "hand-pray-div");
handPray.setAttribute("class", "hand-pray");
fortunePrayRight.setAttribute("class", "fortune-pray-right");
const fortunePrayDiv = document.createElement("div");
fortunePrayDiv.setAttribute("class", "fortune-pray-div");
PagodaContainer.appendChild(fortunePrayDiv);
fortunePrayDiv.appendChild(fortunePray);
PagodaContainer.appendChild(handPrayDiv);
handPrayDiv.appendChild(handPray);
PagodaContainer.appendChild(fortunePrayRight);
PagodaContainer.appendChild(haloContainer);
// after pray ends

const addMoney = () => {
    const random = (min, max) => Math.random() * (max - min) + min;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let money = new Image();
    money.src = "../assets/img/Wishing/money-red.png";
    money.style.position = "absolute";
    money.style.top = "-2px";
    money.style.right = random(0, screenWidth) + "px";
    money.style.zIndex = "10";
    const moneyFalling = () => {
        money.style.top = parseInt(money.style.top) + 2 + "px";
        money.style.right = parseInt(money.style.right) + 0 + "px";
        window.requestAnimationFrame(moneyFalling);
    };
    window.requestAnimationFrame(moneyFalling);
    PagodaContainer.appendChild(money);
};

function callBackMoney() {
    for (let i = 0; i < 80; i++) {
        setTimeout(addMoney, i * 80);
    }
}
buttonPray.onclick = function () {
    showAfterPray();
    setTimeout(showBeforePray, 12500);
};
function showAfterPray() {
    fortunePray.classList.add("show");
    handPrayDiv.classList.add("show");
    handPrayDiv.style.display = "block";
    fortunePrayRight.classList.add("show");
    haloContainer.classList.add("show");
    callBackMoney();

    buttonPray.classList.add("hide");
    catContainer.classList.add("hide");
    fortune.classList.add("hide");
}

function showBeforePray() {
    fortunePray.classList.remove("show");
    handPrayDiv.classList.remove("show");
    handPrayDiv.style.display = "block";
    fortunePrayRight.classList.remove("show");
    haloContainer.classList.remove("show");

    buttonPray.classList.remove("hide");
    catContainer.classList.remove("hide");
    fortune.classList.remove("hide");
}

export const PagodaStyle = document.createElement("style");
document.head.appendChild(PagodaStyle);
PagodaStyle.innerHTML = `
    body {
        margin: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: #FCEFD9;
    }
    section {
        width: 100%;
        height: 100%;
        background-color: #FCEFD9;
    }
    .pagoda-div {
        position: relative;
    }
    .layer-under {
        position: absolute;
        left: 50%;
        z-index: 3;
        top: 9%;
    }
    .pagoda {
        position: relative;
        left: -50%;
        width: 500px;
        height: 400px;
        top: -50%;
    }
    .sakura-left {
        position: absolute;
        left: 0.005em;
        z-index: 6;
        top: 0.05em;
    }
    .apricot {
        position: absolute;
        right: 0.005em;
        top: 0.05em;
        z-index: 6;
    }
    .lantern-center {
        position: absolute;
        left: 1.6em;
        top: 4.35em;
        transform-origin: 50% 0;
        animation: sway 3.5s ease-in-out forwards infinite;
        z-index: 6;
    }
    .lantern-center2 {
        position: absolute;
        top: 4.55em;
        left: 5.5em;
        transform-origin: 50% 0;
        animation: sway 3.5s ease-in-out forwards infinite;
        z-index: 6;
    }
    .lantern-center3 {
        position: absolute;
        right: 1.7em;
        top: 6.8em;
        transform-origin: 50% 0;
        animation: sway 3.5s ease-in-out forwards infinite;
        z-index: 6;
    }
    .firework-right {
        position: absolute;
        right: 10em;
        top: 2.6em;
        width: 4.5em;
        transform-origin: 50% 0;
        animation: sway 3.5s ease-in-out forwards infinite;
        z-index: 6;
    }
    .lantern-center4 {
        position: absolute;
        top: 6.15em;
        right: 5.8em;
        transform-origin: 50% 0;
        animation: sway 3.5s ease-in-out forwards infinite;
    }
    .cat-container {
        position: absolute;
        z-index: 6;
        left: 5px;
        top: 20%;
    }
    .cat {
        position: relative;
        width: 15em;
        z-index: 6;
        left: 0;
    }
    .fortune {
        position: absolute;
        right: 0.095em;
        width: 12em;
        z-index: 6;
        top: 60%;
    }
    .fortune-pray-div {
        position: absolute;
        left: 1%;
        top: 60%;
        z-index: 6;
    }
    .button-pray-div {
        position: absolute;
        left: 50%;
        z-index: 6;
        top: 90%;
    }
    .button-pray {
        position: relative;
        width: 8em;
        height: 3em;
        left: -50%;
        background-color: #C70000;
        z-index: 6;
        font-size: .75em;
        color: #FFFFFF;
        font-weight: bold;
        background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
        transition: box-shadow .2s ease-in-out;
        cursor: pointer;
        border-radius: 1em;
        border: none;
    }
    .button-pray:hover,  .button-pray:focus {
        box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
    }
    .hand-pray-div {
        position: absolute;
        left: 50%;
        z-index: 6;
        top: 85%;
        opacity: 0;
        display: none;
        transition: opacity 300ms;
    }
    .hand-pray {
        position: relative;
        height: 4em;
        left: -50%;
    }
    .fortune-pray {
        position: relative;
        width: 15em;
        width: fit-content;
        z-index: 6;
        opacity: 0;
        transition: opacity 300ms;
    }
    .fortune-pray-right {
        position: absolute;
        width: 15em;
        right: 1em;
        width: fit-content;
        z-index: 6;
        top: 60%;
        opacity: 0;
        transition: opacity 300ms;
    }
    .halo-container {
        position: absolute;
        left: 50%;
        z-index: 0;
        top: 9%;
        opacity: 0;
        transition: opacity 300ms;
    }
    .halo {
        position: relative;
        left: -50%;
        background-color: rgba(255,255,0, 0.3);
        width: 27em;
        height: 23em;
        top: 1.85em;
        border-radius: 50%;
        box-shadow: 0 0 1rem rgb(255,255,0), -.125rem -.125rem 3rem rgb(255,255,0), .125rem .125rem 5rem rgb(255,255,0);
    }
    .show {
        opacity: 1;
        transition: opacity 300ms;
    }
    .hide {
        opacity: 0;
        transition: opacity 300ms;
    }
    .fade-in {
        animation: fadeIn 1s;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes sway {
        0%{transform: rotate(10deg);}
        50%{transform: rotate(-5deg)}
        100%{transform: rotate(10deg);}
    }
    @media only screen and (max-width: 1281px) {
        .button-pray-div {
            top: 80%;
        }
        .cat-container {
            top: 30%;
        }
        .fortune {
            top: 70%;
        }
        .hand-pray-div {
            top: 70%;
        }
    }
    @media only screen and (max-width: 1024px) {
        .button-pray-div {
            top: 90%;
        }
        
        .cat-container {
            top: 10%;
        }
        .fortune {
            top: 60%;
        }
        .hand-pray-div {
            top: 85%;
        }
    }
    @media only screen and (max-width: 999px) {
        .layer-under {
            top: 15%;
        }
        .pagoda {
            width: 450px;
            height: 400px;
        }
        .halo-container {
            top: 15%;
        }
        .halo {
            width: 26em;
            height: 23em;
            top: -50%;
        }
    }
    @media only screen and (max-width: 913px) {
        .cat-container {
            top: 37%;
        }
        .button-pray-div {
            top: 50%;
        }
        .hand-pray-div {
            top: 65%;
        }
    }
    @media only screen and (max-width: 900px) {
        .cat-container {
            top: 33%;
        }
        .pagoda {
            width: 400px;
            height: 380px;
        }
        .halo {
            width: 26em;
            height: 23em;
        }
    }
    @media only screen and (max-width: 840px) {
        .cat-container {
            top: 33%;
        }
        .pagoda {
            width: 380px;
            height: 360px;
        }
        .halo {
            width: 24em;
            height: 21em;
        }
    }
    @media only screen and (max-width: 769px) {
        .cat-container {
            top: 28%;
        }
        .button-pray-div {
            top: 60%;
        }
    }
    @media only screen and (max-width: 760px) {
        .layer-under {
            top: 22%;
        }
        .pagoda {
            width: 350px;
            height: 340px;
        }
        .halo-container {
            top: 22%;
        }
        .halo {
            width: 22em;
            height: 19em;
        }
        .apricot {
            width: 18em;
        }
        .firework-right {
            top: 2.6em;
            right: 8em;
            width: 3.7em;
        }
        .lantern-center, .lantern-center2, .lantern-center3, .lantern-center4 {
            width: 3em;
        }
        .lantern-center3 {
            top: 5.5em;
        }
        .lantern-center4 {
            top: 5.3em;
            right: 4.8em;
            z-index: 2;
        }
        .cat {
            width: 13em;
        }
        .fortune {
            width: 10em;
        }
    }
    @media only screen and (max-width: 690px) {
        .pagoda {
            width: 320px;
            height: 310px;
        }
        .halo {
            width: 19em;
            height: 17em;
        }
    }
    @media only screen and (max-width: 630px) {
        .pagoda {
            width: 300px;
            height: 290px;
        }
        .halo {
            width: 18em;
            height: 16em;
        }
    }
    @media only screen and (max-width: 594px) {
        .layer-under {
            top: 30%;
        }
        .pagoda {
            width: 280px;
            height: 270px;
        }
        .halo-container {
            top: 30%;
        }
        .halo {
            width: 18em;
            height: 16em;
        }
    }
    @media only screen and (max-width: 565px) {
        .pagoda {
            width: 250px;
            height: 240px;
        }
        .halo {
            width: 16em;
            height: 14em;
        }
        .apricot {
            width: 14em;
        }
        .sakura-left {
            width: 11em;
        }
        .lantern-center, .lantern-center2, .lantern-center3, .lantern-center4 {
            width: 2.4em;
            top: 3em;
        }
        .lantern-center2 {
            left: 4.3em;
        }
        .lantern-center3 {
            top: 4.15em;
            right: 1em;
        }
        .lantern-center4 {
            top: 4.13em;
            right: 3.64em;
            z-index: 2;
        }
        .firework-right {
            top: 2em;
            right: 6.8em;
            width: 3em;
        }
        .cat {
            width: 11em;
        }
        .fortune {
            width: 8em;
        }
    }
    @media only screen and (max-width: 540px) {
        .button-pray-div {
            top: 70%;
        }
        
        .cat-container {
            top: 30%;
        }
        .fortune {
            top: 75%;
        }
    }
    @media only screen and (max-width: 500px) {
        .pagoda {
            width: 220px;
            height: 210px;
        }
        .halo {
            width: 14em;
            height: 12em;
        }
    }
    @media only screen and (max-width: 450px) {
        .pagoda {
            width: 180px;
            height: 170px;
        }
        .halo {
            width: 11em;
            height: 10em;
        }
    }
    @media only screen and (max-width: 415px) {
        .cat-container {
            top: 38%;
        }
        .fortune {
            top: 75%;
        }
        .button-pray-div {
            top: 60%;
        }
        .hand-pray-div {
            top: 53%;
        }
    }
    @media only screen and (max-width: 412px) {
        .cat-container {
            top: 38%;
        }
        .fortune {
            top: 75%;
        }
        .button-pray-div {
            top: 60%;
        }
        .hand-pray-div {
            top: 50%;
        }
    }
    @media only screen and (max-width: 376px) {
        .layer-under, .halo-container {
            top: 35%;
        }
        .pagoda {
            width: 150px;
            height: 140px;
        }
        .halo {
            width: 9em;
            height: 8em;
        }
        .button-pray {
            width: 7em;
            height: 2.8em;
        }
        .apricot {
            width: 11em;
        }
        .sakura-left {
            width: 11em;
        }
        .lantern-center, .lantern-center2, .lantern-center3, .lantern-center4 {
            width: 2.4em;
            top: 2.2em;
        }
        .lantern-center {
            left: 1em;
        }
        .lantern-center2 {
            left: 3.8em;
            top: 3.2em;
        }
        .lantern-center3 {
            top: 3.1em;
            right: 0.6em;
        }
        .lantern-center4 {
            top: 2.8em;
            right: 3em;
            z-index: 2;
        }
        .firework-right {
            top: 2em;
            right: 5em;
        }
        .cat-container {
            left: 50%;
            top: 30%;
        }
        .fortune-pray-div {
            top: 70%;
            left: 50%;
        }
        .cat, .fortune-pray {
            left: -50%;
            width: 10em;
        }
        .fortune, .fortune-pray-right {
            width: 0;
        }
        .button-pray-div, .hand-pray-div {
            top: 60%;
        }
    }
`;
