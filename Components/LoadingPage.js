const LoadingPageContainer = document.createElement("section");
LoadingPageContainer.setAttribute("class", "loading-page-container");
document.body.appendChild(LoadingPageContainer);
const LoadingContainer = document.createElement("div");
LoadingContainer.setAttribute("class", "loading-container");
LoadingPageContainer.appendChild(LoadingContainer);

const LanternString = new Image();
LanternString.src = "./assets/img/Vector 1.png";
LanternString.setAttribute("class", "lantern-string");
LoadingContainer.appendChild(LanternString);

const LanternSmall = new Image();
LanternSmall.src = "./assets/img/Artboard 32.png";
LanternSmall.setAttribute("class", "lantern-small");
LoadingContainer.appendChild(LanternSmall);

const LanternMedium = new Image();
LanternMedium.src = "./assets/img/Artboard 32.png";
LanternMedium.setAttribute("class", "lantern-medium");
LoadingContainer.appendChild(LanternMedium);

const LanternLarge = new Image();
LanternLarge.src = "./assets/img/Artboard 32.png";
LanternLarge.setAttribute("class", "lantern-large");
LoadingContainer.appendChild(LanternLarge);

const KiteFirework = new Image();
KiteFirework.src = "./assets/img/Artboard 33.png";
KiteFirework.setAttribute("class", "kite-firework");
LoadingContainer.appendChild(KiteFirework);

const Cloud3 = new Image();
Cloud3.src = "./assets/img/Artboard 40.png";
Cloud3.setAttribute("class", "cloud3");
LoadingContainer.appendChild(Cloud3);

const LoadingFrame = document.createElement("div");
LoadingFrame.setAttribute("class", "frame");
LoadingContainer.appendChild(LoadingFrame);

const Rhombus = new Image();
Rhombus.src = "./assets/img/Artboard 42.png";
Rhombus.setAttribute("class", "rhombus");
LoadingFrame.appendChild(Rhombus);

const LoadingContent = document.createElement("div");
LoadingContent.setAttribute("class", "loading-content");
LoadingContainer.appendChild(LoadingContent);

const NewYearTitle = document.createElement("h1");
NewYearTitle.setAttribute("class", "ny-title");
NewYearTitle.innerText = "Chúc mừng năm mới";
LoadingContent.appendChild(NewYearTitle);

const NewYearNumber = document.createElement("h1");
NewYearNumber.setAttribute("class", "number-year");
NewYearNumber.innerText = "2023";
LoadingContent.appendChild(NewYearNumber);

const fireworksCanvas = document.createElement("canvas");
fireworksCanvas.setAttribute("id", "fw-canvas");
LoadingPageContainer.appendChild(fireworksCanvas);

window.addEventListener("resize", resizeFireWorksCanvas, false);
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var fCanvas,
  fCtx,
  w,
  h,
  fParticles = [],
  fProbability = 0.04,
  fxPoint,
  fyPoint;

export function waitCountDown() {
  fwLoad();
  playHappyNewYearAudio();
  audioPlayHover();
  setTimeout(addContent, 500);
}

function addContent() {
  LoadingContent.classList.add("show");
  LoadingFrame.classList.add("show");
}
function playHappyNewYearAudio() {
  const happyNewYearAudio = new Audio("./assets/audio/happy_new_year_audio.mp3");
  LoadingContainer.appendChild(happyNewYearAudio);
  happyNewYearAudio.play();
}

function audioPlayHover() {
  document.body.addEventListener("hover", playHappyNewYearAudio);
}
function fwLoad() {
  fCanvas = document.getElementById("fw-canvas");
  fCtx = fCanvas.getContext("2d");
  resizeFireWorksCanvas();
  window.requestAnimationFrame(updateFWWorld);
}

function resizeFireWorksCanvas() {
  if (!!fCanvas) {
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
  if (fParticles.length < 500 && Math.random() < fProbability) {
    createFirework();
  }
  const alive = [];
  for (let i = 0; i < fParticles.length; i++) {
    if (fParticles[i].move()) {
      alive.push(fParticles[i]);
    }
  }
  fParticles = alive;
}

function paintFW() {
  fCtx.globalCompositeOperation = "source-over";
  fCtx.fillStyle = "rgba(255, 222, 173, 0.2)";
  fCtx.fillRect(0, 0, w, h);
  fCtx.globalCompositeOperation = "lighter";
  for (let i = 0; i < fParticles.length; i++) {
    fParticles[i].draw(fCtx);
  }
}

function createFirework() {
  fxPoint = Math.random() * (w - 200) + 100;
  fyPoint = Math.random() * (h - 200) + 100;
  const nFire = Math.random() * 50 + 100;
  const c =
    "rgb(" +
    ~~(Math.random() * 200 + 55) +
    "," +
    ~~(Math.random() * 200 + 55) +
    "," +
    ~~(Math.random() * 200 + 55) +
    ")";
  for (let i = 0; i < nFire; i++) {
    const particle = new Particle();
    particle.color = c;
    const vy = Math.sqrt(25 - particle.vx * particle.vx);
    if (Math.abs(particle.vy) > vy) {
      particle.vy = particle.vy > 0 ? vy : -vy;
    }
    fParticles.push(particle);
  }
}

function Particle() {
  this.w = this.h = Math.random() * 4 + 1;
  this.x = fxPoint - this.w / 2;
  this.y = fyPoint - this.h / 2;
  this.vx = (Math.random() - 0.5) * 10;
  this.vy = (Math.random() - 0.5) * 10;
  this.alpha = Math.random() * 0.5 + 0.5;
  this.color;
}

Particle.prototype = {
  gravity: 0.05,
  move: function () {
    this.x += this.vx;
    this.vy += this.gravity;
    this.y += this.vy;
    this.alpha -= 0.01;
    if (
      this.x <= -this.w ||
      this.x >= screen.width ||
      this.y >= screen.height ||
      this.alpha <= 0
    ) {
      return false;
    }
    return true;
  },
  draw: function (c) {
    c.save();
    c.beginPath();
    c.translate(this.x + this.w / 2, this.y + this.h / 2);
    c.arc(0, 0, this.w, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.globalAlpha = this.alpha;
    c.closePath();
    c.fill();
    c.restore();
  },
};
waitCountDown();

const LoadingStyle = document.createElement("style");
LoadingStyle.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }

    body {
        background: #FFDEAB;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
    }
    .loading-page-container {
        width: 100%;
        height: 100%;
    }
    .loading-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }

    #fw-canvas {
        width: 100%;
    }

    .lantern-string {
        width: 15%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    }

    .lantern-large {
        width: 17.5%; 
        position: absolute;
        top: 132px;
        left: -200px; 
        z-index: 2;
    }

    .lantern-medium {
        width: 12.5%;
        position: absolute;
        top: 80px;
        left: 50px;  
    }

    .lantern-small {
        width: 7.5%;
        position: absolute;
        top: 20px;
        left: 200px; 
    }

    .kite-firework {
        width: 500px;
        position: absolute;
        top: 450px;
        left: 1350px;
        transform: rotate(-30deg);
    }

    .cloud3 {
        position: absolute;
        top: -200px;
        left: 1500px;
        width: 600px;
        z-index: 10;
        transform: rotate(180deg);
    }

    .frame {
        width: 100%;
        height: 100vh;
        
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
    }
    
    .rhombus {
        width: 50%;
    }

    .loading-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        gap: 30px;
        opacity: 0;
    }
    
    .ny-title {
        width: 400px;
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 70px;
        text-align: center;
        color: #D20000;
    }

    .number-year {
        width: 350px;
        font-style: normal;
        font-weight: 700;
        font-size: 110px;
        line-height: 60px;
        text-align: center;
        color: #D20000;
    }

    .show {
        opacity: 1;
        transition: opacity 300ms;
    }

    @media only screen and (max-width: 1440px) {
        .lantern-string {
            width: 25%;
        }

        .lantern-large {
            width: 25%;
            top: 180px;
            left: -200px;
        }

        .lantern-medium {
            width: 20%;
            top: 110px;
            left: 50px;
        }

        .lantern-small {
            width: 15%;
            top: 15px;
            left: 240px;
        }

        .rhombus {
            width: 70%;
        }

        .cloud3 {
            top: -200px;
            left: 1000px;
        }

        .kite-firework {
            top: 500px;
            left: 1000px;
        }
    }

    @media only screen and (max-width: 1024px) {
        .lantern-string {
            width: 30%;
        }

        .lantern-large {
            width: 20%;
            top: 140px;
            left: -80px;
        }

        .lantern-medium {
            width: 15%;
            top: 90px;
            left: 90px;
        }

        .lantern-small {
            width: 10%;
            top: 40px;
            left: 220px;
        }

        .cloud3 {
            top: -200px;
            left: 700px;
        }

        .kite-firework {
            width: 40%;
            top: 500px;
            left: 700px;
        }

        .rhombus {
            width: 80%;
        }

        .rhombus-border {
            width: 400px;
            height: 400px;
        }

        .ny-title {
            width: 300px;
            font-size: 56px;
            line-height: 60px;
        }

        .number-year {
            font-size: 96px;
        }
    }
    
    @media only screen and (max-width: 768px) {
        .lantern-string {
            width: 40%;
        }

        .lantern-large {
            width: 30%;
            top: 135px;
            left: -70px;
        }

        .lantern-medium {
            width: 25%;
            top: 80px;
            left: 90px;
        }

        .lantern-small {
            width: 20%;
            top: 15px;
            left: 220px;
        }
        
        .kite-firework {
            width: 400px;
            top: 650px;
            left: 550px;
            transform: rotate(-15deg);
        }

        .cloud3 {
            width: 400px;
            top: -130px;
            left: 550px;
        }

        .loading-content {
            gap: 10px;
        }
        
        .rhombus {
            width: 100%;
        }

        .ny-title {
            width: 400px;
            font-size: 60px;
            line-height: 60px;
        }

        .number-year {
            font-size: 100px;
        }
    }

    @media only screen and (max-width: 412px) {
        .lantern-string {
            width: 50%;
        }

        .lantern-large {
            width: 40%;
            top: 92px;
            left: -70px;
        }

        .lantern-medium {
            width: 30%;
            top: 57px;
            left: 50px;
        }

        .lantern-small {
            width: 20%;
            top: 20px;
            left: 140px;
        }
        
        .kite-firework {
            width: 300px;
            top: 700px;
            left: 200px;
            transform: rotate(-15deg);
        }

        .cloud3 {
            width: 400px;
            top: 0px;
            left: 250px;
        }

        .loading-content {
            gap: 10px;
        }
        
        .rhombus {
            width: 120%;
        }

        .ny-title {
            width: 200px;
            font-size: 30px;
            line-height: 35px;
        }

        .number-year {
            font-size: 65px;
        }
    }

    @media only screen and (max-width: 390px) {
        .lantern-string {
            width: 50%;
        }

        .lantern-large {
            width: 40%;
            top: 92px;
            left: -70px;
        }

        .lantern-medium {
            width: 30%;
            top: 57px;
            left: 50px;
        }

        .lantern-small {
            width: 20%;
            top: 20px;
            left: 140px;
        }
        
        .kite-firework {
            width: 300px;
            top: 600px;
            left: 200px;
            transform: rotate(-15deg);
        }

        .cloud3 {
            width: 400px;
            top: 0px;
            left: 250px;
        }

        .loading-content {
            gap: 10px;
        }

        .rhombus-border {
            width: 225px;
            height: 225px;
        }

        .ny-title {
            width: 200px;
            font-size: 30px;
            line-height: 35px;
        }

        .number-year {
            font-size: 65px;
        }
    }
`;
document.head.appendChild(LoadingStyle);
