import {waitCountDown, fireworksContainer, FireworksStyle } from "./fireworks.js";
// import {PagodaContainer, PagodaStyle} from "./pagoda.js";
// import {WishingContainer, WishingStyle} from "./wishing.js";
// fadeOut(PagodaContainer, PagodaStyle);
// fadeOut(fireworksContainer, FireworksStyle);
// fadeOut(WishingContainer, WishingStyle);
const style = document.createElement('style');
document.body.appendChild(style);
style.innerHTML = `
    body {
        
    }
    .btn-lft, .btn-rgt {
        width: 4em;
        border: none;
        bottom: .5em;
        position: absolute;
        cursor: pointer;
        z-index: 1000;
    }
    .btn-lft:hover, .btn-rgt:hover {
        transform: scale(.95);
        transition: transform 0.1s ease-in-out;
    }
    .btn-lft {
        left: 1em;
        display: none;
    }
    .btn-rgt {
        right: 1em;
    }
    .slide {
        width: 100%;
        height: 100vh;
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
    .none {
        display: none;
    }
`;

const btnLft = new Image();
const btnRgt = new Image();
btnLft.src = "/assets/img/btn-left.png";
btnRgt.src = "/assets/img/btn-right.png";
btnLft.className = 'btn-lft';
btnRgt.className = 'btn-rgt';
const slide = document.createElement('div');
const slideContent = document.createElement('div');
slide.className = "slide";
slideContent.className = "slide-content";
slideContent.appendChild(btnLft);
slideContent.appendChild(btnRgt);
document.body.appendChild(slide);
slide.appendChild(slideContent);

const slidePage = [
    {
        container: fireworksContainer,
        style: FireworksStyle,
    },
    {
        container: PagodaContainer,
        style: PagodaStyle,
    },
    {
        container: WishingContainer,
        style: WishingStyle,
    },
]
let slideCounter = 0;
function fadeIn(PageContainer, PageStyle) {
    document.body.appendChild(PageContainer);
    document.head.appendChild(PageStyle);
    PageContainer.classList.add("fade-in");
}
function fadeOut(PageContainer, PageStyle) {
    document.body.removeChild(PageContainer);
    document.head.removeChild(PageStyle);
}

btnRgt.addEventListener('click', function() {
    // fadeOut(slidePage[0].container, slidePage[0].style);
})

const startSlider = () => {
    fadeIn(slidePage[0].container, slidePage[0].style);
    waitCountDown();
}
startSlider();