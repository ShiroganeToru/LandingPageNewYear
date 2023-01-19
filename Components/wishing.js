export const WishingContainer = document.createElement('section');
WishingContainer.setAttribute('class', 'wishing-container');
document.body.appendChild(WishingContainer);

const lionLeft = new Image();
lionLeft.src = "/assets/img/Wishing/lion-left.png";
const lionRight = new Image();
lionRight.src = "/assets/img/Wishing/lion-right.png";
const cloud = new Image();
cloud.src = "/assets/img/Wishing/cloud.png";
const fireworkLeft = new Image();
fireworkLeft.src = "/assets/img/Wishing/firework2.png";
const lanternCenter = new Image();
lanternCenter.src = "/assets/img/Wishing/lantern-1.png";
const lantern2 = new Image();
lantern2.src = "/assets/img/Wishing/lantern-2.png";
const lantern3 = new Image();
lantern3.src = "/assets/img/Wishing/lantern3.png";
const ribbonLeft = new Image();
ribbonLeft.src = "/assets/img/Wishing/ribbon-left.png";
const wishingPaper = new Image();
wishingPaper.src = "/assets/img/Wishing/wishing-paper.png";
const circle = new Image();
circle.src = "/assets/img/Wishing/circle.png";
const sakuraCenter = new Image();
sakuraCenter.src = "/assets/img/Wishing/sakura-wishing-tree.png";

WishingContainer.appendChild(circle);
circle.setAttribute('class', 'circle');
WishingContainer.appendChild(sakuraCenter);
sakuraCenter.setAttribute('class', 'sakura-center');

const LeftContainer = document.createElement("div");
LeftContainer.setAttribute('class', 'left-container');
const CloudContainer = document.createElement("div");
cloud.setAttribute('class', 'cloud');
ribbonLeft.setAttribute('class', 'ribbon-left');
fireworkLeft.setAttribute('class', 'firework-left');
lantern3.setAttribute('class', 'lantern-3');
lantern2.setAttribute('class', 'lantern-2');
LeftContainer.appendChild(cloud);
WishingContainer.appendChild(LeftContainer);
LeftContainer.appendChild(ribbonLeft);
LeftContainer.appendChild(fireworkLeft);
LeftContainer.appendChild(lantern3);
LeftContainer.appendChild(lantern2);

const LanternCenterDiv = document.createElement('div');
LanternCenterDiv.setAttribute('class', 'lantern-center-div');
const LanternCenterContainer = document.createElement('div');
LanternCenterContainer.setAttribute('class', 'lantern-center-container');
const LanternCenterFront = document.createElement('div');
LanternCenterFront.setAttribute('class', 'lantern-side lantern-center-front');
const LanternCenterBack = document.createElement('div');
LanternCenterBack.setAttribute('class', 'lantern-side lantern-center-back');
const LanternCenterLeft = document.createElement('div');
LanternCenterLeft.setAttribute('class', 'lantern-side lantern-center-left');
const LanternCenterRight = document.createElement('div');
LanternCenterRight.setAttribute('class', 'lantern-side lantern-center-right');
LanternCenterContainer.appendChild(LanternCenterFront);
LanternCenterContainer.appendChild(LanternCenterBack);
LanternCenterContainer.appendChild(LanternCenterLeft);
LanternCenterContainer.appendChild(LanternCenterRight);
WishingContainer.appendChild(LanternCenterDiv);
LanternCenterDiv.appendChild(LanternCenterContainer);

const RightContainer = document.querySelector('.left-container').cloneNode(true);
RightContainer.setAttribute('class', 'right-container');
WishingContainer.appendChild(RightContainer);

lionLeft.setAttribute('class', 'lion-left');
lionRight.setAttribute('class', 'lion-right');
WishingContainer.appendChild(lionLeft);
WishingContainer.appendChild(lionRight);

//money-red starts
const MoneyRedContainer = document.createElement('div');
MoneyRedContainer.setAttribute('class', 'sakura-center money-red-container');
WishingContainer.appendChild(MoneyRedContainer);
const moneyReds = [];
for (let i = 0; i < 35; i++) {
    const moneyRed = createMoneyRed(i);
    moneyReds.push(moneyRed);
}
function createMoneyRed(i) {
    const newMoneyRed = new Image();
    newMoneyRed.src = "/assets/img/Wishing/money-red.png";
    newMoneyRed.setAttribute("style", "position: absolute");
    MoneyRedContainer.appendChild(newMoneyRed);
    newMoneyRed.className = 'new-money-red';
    let xy = getRandomPosition(newMoneyRed);
    newMoneyRed.style.top = (xy[0]) + 'px';
    newMoneyRed.style.left = xy[1] + 'px';
}
function getRandomPosition(moneyRed) {
    let x = (MoneyRedContainer.offsetWidth / 3) / 3;
    let y = (MoneyRedContainer.offsetWidth / 3) / 1.9;
    let randomX = Math.floor(Math.random() * x);
    let randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

const TopMoneyRedContainer = document.querySelector('.money-red-container').cloneNode(true);
TopMoneyRedContainer.setAttribute('class', 'sakura-center top-money-red-container');
WishingContainer.appendChild(TopMoneyRedContainer);
//money-red ends

const buttonWish = document.createElement('button');
WishingContainer.appendChild(buttonWish);
buttonWish.setAttribute('class', 'button-wish');
buttonWish.innerText = "Wish";

//form wish
const formWishContainer = document.createElement('div');
formWishContainer.className = 'form-wish-container';
const formWishLayer = document.createElement('div');
formWishLayer.className = 'form-wish-layer';
formWishContainer.appendChild(formWishLayer);
const formWish = document.createElement('form');
formWish.className = 'form-wish';
formWishContainer.appendChild(formWish);
const formClose = document.createElement('div');
formClose.className = 'form-close';
const formCloseIcon = new Image();
formCloseIcon.src = "/assets/img/Wishing/close.png";
formCloseIcon.className = 'form-i';
formClose.appendChild(formCloseIcon);
formWish.appendChild(formClose);
const formCat = new Image();
formCat.src = '/assets/img/Wishing/cat-fortune-form.png';
formCat.className = 'cat-fortune-form';
formWish.appendChild(formCat);
const formInput = document.createElement('textarea');
formWish.appendChild(formInput);
formInput.setAttribute('rows', '5');
formInput.setAttribute('cols', '50');
formInput.setAttribute('class', 'form-input');
formInput.setAttribute('placeholder', 'Nhập nguyện ước của bạn tại đây...');
const formSubmit = document.createElement('button');
formSubmit.setAttribute('type', 'button');
formSubmit.setAttribute('class', 'form-submit');
formSubmit.innerText = "Ước nguyện";
formWish.appendChild(formSubmit);
WishingContainer.appendChild(formWishContainer);

formSubmit.addEventListener("click", function () {
    formInput.value = "";
})

// event click button wish
buttonWish.onclick = function () {
    fadeIn(formWish);
}

formSubmit.onclick = function () {
    fadeOut(formWish);
}

formClose.onclick = function () {
    fadeOut(formWish);
}

function fadeIn(el) {
    formWishContainer.classList.add("open");
    el.classList.add("show-form");
}
function fadeOut(el) {
    formWishContainer.classList.remove("open");
    el.classList.remove("show-form");
}

//sakura-fall
const addSakura = () => {
    const random = (min, max) => Math.random() * (max - min) + min;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let sakura = document.createElement('div');
    sakura.style.position = 'absolute';
    sakura.style.top = "-2px";
    sakura.style.right = random(0, screenWidth) + "px";
    sakura.style.width = "10px";
    sakura.style.height = "10px";
    sakura.style.backgroundColor = "#EBBEC8";
    sakura.style.borderRadius = "30% 70% 70% 30% / 30% 30% 70% 70%";
    sakura.style.zIndex = "10";
    const sakuraFalling = () => {
        sakura.style.top = parseInt(sakura.style.top) + 2 + "px";
        sakura.style.right = parseInt(sakura.style.right) + 1 + "px";
        if (parseInt(sakura.style.top) > screenHeight) {
            sakura.style.opacity = 0;
            sakura.style.transition = "opacity 500ms";
        }
        window.requestAnimationFrame(sakuraFalling);
    };
    window.requestAnimationFrame(sakuraFalling);
    WishingContainer.appendChild(sakura);
};

function callBackSakura() {
    for (let i = 0; i < 100; i++) {
        setTimeout(addSakura, i * 100);
    }
}
function callSakuraFalling() {
    callBackSakura();
    setInterval(callBackSakura, 11500);
}
callSakuraFalling();

export const WishingStyle = document.createElement('style');
document.head.appendChild(WishingStyle);
WishingStyle.innerHTML = `
    body {
        margin: 0;
        padding: 0;
        background: #EDB46A;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
    .wishing-container {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: #EDB46A;
    }
    .cloud {
        position: absolute;
        top: 1em;
    }
    .left-container {
        position: relative;
        top: 0.05em;
    }
    .ribbon-left, .firework-left, .lantern-3, .lantern-2  {
        position: absolute;
        top: 0.05em;
    }
    .firework-left {
        top: 6.7em;
        left: 8.5em;
        width: 2em;
        transform-origin: 50% 0;
        animation: sway 3.5s ease-in-out forwards infinite;
    }
    .lantern-3 {
        top: 4em;
        left: 15.5em;
        width: 1.25em;
        transform-origin: 50% 0;
        animation: sway 3.5s ease-in-out forwards infinite;
    }
    .lantern-2 {
        top: 0.02em;
        left: 20.5em;
        transform-origin: 50% 0;
        animation: sway 3s ease-in-out forwards infinite;
        z-index: 1;
    }
    .right-container {
        transform: scale(-1, 1);
    }
    .lantern-center-div {
        position: absolute;
        top: 0;
        width: 14em;
        perspective: 12em;
        perspective-origin: top right;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);
    }
    .lantern-center-container {
        width: 4.5em;
        height: 7.5em;
        position: relative;
        transform-style: preserve-3d;
        animation: rotation 3s infinite linear;
    }
    .lantern-side {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .lantern-center-front, .lantern-center-back, .lantern-center-left, .lantern-center-right {
        background-image: url("/assets/img/Wishing/lantern-1.png");
    }
    .lantern-center-front {
        transform: translateZ(1em);
    }
    .lantern-center-left {
        transform: rotateY(90deg) translateZ(1em);
    }
    .lantern-center-right {
        transform: rotateY(-90deg) translateZ(1em);
    }
    .lantern-center-back {
        transform: translateZ(-1em);
    }
    .circle {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 16%);
        width: 580px;
        top: 0;
    }
    .sakura-center {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, 14%);
        width: 580px;
    }
    @keyframes rotation {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(360deg); }
    }
    @keyframes sway {
        0%{transform: rotate(10deg);}
        50%{transform: rotate(-5deg)}
        100%{transform: rotate(10deg);}
    }
    .lion-left {
        position: absolute;
        top: 50%;
    }
    .lion-right {
        position: absolute;
        top: 60%;
        right: 0;
    }
    .money-red-container {
        width: 350px;
        height: 150px;
        z-index: 3;
        transform: translate(-50%, 197%);
    }
    .top-money-red-container {
        width: 280px;
        height: 60px;
        z-index: 3;
        transform: translate(-50%, 390%);
    }
    .new-money-red {
        transform-origin: 50% 0;
        animation: sway 5s ease-in-out forwards infinite;
    }
    .button-wish {
        position: absolute;
        left: 51%;
        top: 90%;
        transform: translate(-50%, 40%);
        width: 60px;
        height: 30px;
        color: white;
        font-family: Quicksand;
        background: #C70000;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: all 200ms;
        font-weight: bold;
    }
    .button-wish:hover {
        opacity: 0.8;
    }

    .form-wish-container {
        width: 0;
        height: 0;
    }
    .form-wish-layer {
        position: relative;
        width: 100%;
        height: 100vh;
        background: #000;
        opacity: 0.6;
        filter: alpha(opacity=60);
        z-index: 6;
    }
    .form-wish {
        position: absolute;
        width: 50%;
        height: 50%;
        background: #812126;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 2em;
        z-index: 8;
        opacity: 0;
        transition: opacity 600ms;
    }
    .cat-fortune-form {
        position: absolute;
        width: 40%;
        top: 1%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .form-input {
        position: absolute;
        width: 80%;
        height: 115px;
        border: none;
        top: 53%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        outline: none;
        color: #812126;
        border-bottom: 3px solid #eee;
        font-size: 1.3em;
        z-index: 7;
        border-radius: 0.3em;
        padding: 0.9em;
        resize: none;
    }
    .form-submit {
        position: absolute;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #FDE726;
        cursor: pointer;
        border: none;
        border-radius: 0.3em;
        width: 150px;
        height: 40px;
        border-color: #ffa260;
        font-weight: bold;
        font-size: 1.1em;
        color: #812126;
        transition: all 200ms;
    }
    .form-submit:hover {
        background: #EBD617;
    }
    .form-i {
        position: absolute;
        width: 2em;
        top: 1em;
        right: 1em;
        cursor: pointer;
        transform: rotate(0deg);
        transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .form-i:hover {
        transform: rotate(360deg);
        width: 2.5em;
    }
    .form-wish-container.open {
        width: 100vw;
        height: 100vh;
        transition: all 700ms;
    }
    .show-form {
        opacity: 1;
        transition: opacity 700ms;
    }
    .hide-form {
        opacity: 0;
        transition: opacity 600ms;
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

    @media only screen and (max-width: 920px) {
        .form-wish {
            width: 85%;
        }
    }
    @media only screen and (max-width: 500px) {
        .circle {
            width: 300px;
            transform: translate(-50%, 60%);
        }
        .sakura-center {
            width: 270px;
            transform: translate(-50%, 70%);
        }
        .lion-left, .lion-right {
            width: 150px;
            bottom: 0em;
        }
        .lion-right {
            bottom: 0em;
        }
        .cloud {
            width: 110px;
            margin-top: 5%;
        }
        .lantern-3 {
            width: 1em;
            left: 7em;
            display: none;
        }
        .lantern-2 {
            width: 2.025em;
            left: 5em;
            margin-top: 3em;
        }
        .ribbon-left {
            width: 11em;
        }
        .firework-left {
            position: absolute;
            width: 2em;
            top: 4em;
            left: 3em;
        }
        .new-money-red {
            display: none;
        }
        .form-wish {
            width: 90%;
        }
    }
    @media only screen and (max-width: 290px) {
        .lion-left {
            top: 75%;
        }
        .lion-right {
            top: 80%;
        }
        .circle {
            width: 270px;
            transform: translate(-50%, 70%);
        }
        .button-wish {
            top: 73%;
        }
    }
`;