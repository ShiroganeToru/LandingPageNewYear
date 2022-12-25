const fireworksContainer = document.createElement('div');
const fireworksCanvas = document.createElement('canvas');
fireworksCanvas.setAttribute('id', 'fw-canvas');
fireworksContainer.appendChild(fireworksCanvas);
document.body.append(fireworksContainer);

const FireworksStyle = document.createElement('style');
FireworksStyle.innerHTML = `
    body {
        margin: 0;
        overflow: hidden;
        background: #d20000;
    }
    #fw-canvas {
        // background: #d20000;
    }
`;
document.head.appendChild(FireworksStyle);

window.addEventListener('resize', resizeFireWorksCanvas, false);
window.addEventListener('DOMContentLoaded', waitCountDown);
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || 
function (callback) {
    window.setTimeout(callback, 1000/60);
};

var fCanvas, fCtx, w, h, fParticles = [], fProbability = 0.04, fxPoint, fyPoint;

function waitCountDown() {
    let timeout = setTimeout(fwLoad, 3000);
    let audioPlay = setTimeout(playHappyNewYearAudio, 3000);
    let audioHover = setTimeout(audioPlayHover, 3000);
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