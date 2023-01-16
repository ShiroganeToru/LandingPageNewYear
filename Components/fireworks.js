const fireworksContainer = document.createElement('section');
const fireworksCanvas = document.createElement('canvas');
fireworksCanvas.setAttribute('id', 'fw-canvas');
fireworksContainer.appendChild(fireworksCanvas);
document.body.append(fireworksContainer);
fireworksContainer.style.width = '100%';
const FireworksStyle = document.createElement('style');
FireworksStyle.innerHTML = `
    body {
        margin: 0;
        overflow: hidden;
        background: #d20000;
        font-family: sans-serif;
    }
    #fw-canvas {
        // background: #d20000;
        width: 100%;
    }
    .text-container {
        width: 100vw;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .happy-new-year-text {
        font-family: 'Montserrat', sans-serif; 
        font-size: 6em;
        color: #FDEEBD;
        font-weight: bold;
        // text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
        opacity: 0;
        transition: all 300ms;
        margin-bottom: 0.5em;
        margin-top: -0.25em;
    }
    .year-text {
        font-size: 18em;
        opacity: 0;
        transition: all 300ms;
        margin-bottom: 0;
        height: fit-content;
    }
    .description-new-year {
        font-family: 'Comforter Brush', cursive;
        font-size: 3em;
        color: #F5B41C;
        font-weight: 500;
        opacity: 0;
        transition: all 300ms;
    }
    .show {
        opacity: 1;
        transition: opacity 300ms;
    }
    @media only screen and (max-width: 1100px) {
        .happy-new-year-text {
            font-size: 4em;
        }
        .year-text {
            font-size: 16em;
        }
        .description-new-year {
            font-size: 2em;
        }
    }
    @media only screen and (max-width: 800px) {
        .happy-new-year-text {
            font-size: 3em;
        }
        .year-text {
            font-size: 10em;
        }
        .description-new-year {
            font-size: 1.25em;
        }
    }
    @media only screen and (max-width: 460px) {
        .happy-new-year-text {
            font-size: 2em;
        }
        .year-text {
            font-size: 8em;
        }
        .description-new-year {
            font-size: 1em;
        }
    }
    @media only screen and (max-width: 375px) {
        .happy-new-year-text {
            font-size: 1.25em;
        }
        .year-text {
            font-size: 5em;
        }
        .description-new-year {
            font-size: .65em;
        }
    }
`;
document.head.appendChild(FireworksStyle);

window.addEventListener('resize', resizeFireWorksCanvas, false);
waitCountDown();
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || 
function (callback) {
    window.setTimeout(callback, 1000/60);
};

var fCanvas, fCtx, w, h, fParticles = [], fProbability = 0.04, fxPoint, fyPoint;

function waitCountDown() {
    setTimeout(fwLoad, 3000);
    setTimeout(playHappyNewYearAudio, 3000);
    setTimeout(audioPlayHover, 3000);
    setTimeout(addText, 4000);
}

function addText() {
    happyNewYearText.classList.add("show");
    yearText.classList.add("show");
    descriptionNewYear.classList.add("show");
}
function removeText() {
    happyNewYearText.classList.remove("show");
    yearText.classList.remove("show");
    descriptionNewYear.classList.remove("show");
}
function playHappyNewYearAudio() {
    const happyNewYearAudio = new Audio('/assets/audio/happy_new_year_audio.mp3');
    happyNewYearAudio.play();
}

function audioPlayHover() {
    document.body.addEventListener('hover', playHappyNewYearAudio);
}
function fwLoad() {
    fCanvas = document.getElementById('fw-canvas');
    fCtx = fCanvas.getContext("2d");
    resizeFireWorksCanvas();
    window.requestAnimationFrame(updateFWWorld);
}

function resizeFireWorksCanvas() {
    if(!!fCanvas) {
        w = fCanvas.width = window.innerWidth;
        h = fCanvas.height = window.innerHeight;
    }
}

function updateFWWorld() {
    updateFW();
    paintFW();
    window.requestAnimationFrame(updateFWWorld);
}

function updateFW() {
    if(fParticles.length < 500 && Math.random() < fProbability) {
        createFirework();
    }
    const alive = [];
    for (let i = 0; i < fParticles.length; i++) {
        if(fParticles[i].move()) {
            alive.push(fParticles[i]);
        }
    }
    fParticles = alive;
}

function paintFW() {
    fCtx.globalCompositeOperation = 'source-over';
    fCtx.fillStyle = 'rgba(210, 0, 0, 0.2)';
    fCtx.fillRect(0, 0, w, h);
    fCtx.globalCompositeOperation = 'lighter';
    for(let i = 0; i < fParticles.length; i++) {
        fParticles[i].draw(fCtx);
    }
}

function createFirework() {
    fxPoint = Math.random() * (w-200) + 100;
    fyPoint = Math.random() * (h-200) + 100;
    const nFire = Math.random() * 50 + 100;
    const c = "rgb("+(~~(Math.random()*200+55))+","
                +(~~(Math.random()*200+55)) + "," + (~~(Math.random()*200+55)) + ")";
    for(let i = 0; i < nFire; i++) {
        const particle = new Particle();
        particle.color = c;
        const vy = Math.sqrt(25-particle.vx*particle.vx);
        if(Math.abs(particle.vy) > vy) {
            particle.vy = particle.vy > 0 ? vy: -vy;
        }
        fParticles.push(particle);
    }
}

function Particle() {
    this.w = this.h = Math.random() *4 + 1;
    this.x = fxPoint-this.w/2;
    this.y = fyPoint-this.h/2;
    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;
    this.alpha = Math.random()*.5 + .5;
    this.color;
}

Particle.prototype = {
    gravity: 0.05,
    move: function() {
        this.x += this.vx;
        this.vy += this.gravity;
        this.y += this.vy;
        this.alpha -= 0.01;
        if(this.x <= -this.w || this.x >= screen.width || this.y >= screen.height || this.alpha <= 0) {
            return false;
        }
        return true;
    },
    draw: function(c) {
        c.save();
        c.beginPath();
        c.translate(this.x + this.w/2, this.y + this.h/2);
        c.arc(0,0,this.w,0,Math.PI*2);
        c.fillStyle = this.color;
        c.globalAlpha = this.alpha;
        c.closePath();
        c.fill();
        c.restore();
    }
}

//text 
const happyNewYearText = document.createElement('div');
happyNewYearText.className = 'happy-new-year-text';
happyNewYearText.innerText = "Happy New Year";

const yearText = document.createElement('div');
yearText.setAttribute('class', 'happy-new-year-text year-text');
yearText.innerText = "" + new Date().getFullYear();

const descriptionNewYear = document.createElement('div');
descriptionNewYear.setAttribute('class', 'happy-new-year-text description-new-year');
descriptionNewYear.innerText = "May this new year brings you and your family prosperity, health, and happiness";

const textContainer = document.createElement('div');
textContainer.setAttribute('class', 'text-container');
textContainer.appendChild(yearText);
textContainer.appendChild(happyNewYearText);
textContainer.appendChild(descriptionNewYear);
fireworksContainer.appendChild(textContainer);