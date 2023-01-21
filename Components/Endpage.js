const EndpageContainer = document.createElement("section");
EndpageContainer.setAttribute("class", "endpage-container");
document.body.appendChild(EndpageContainer);

const ground = new Image();
ground.src = "/assets/img/Vector 2.png";
ground.setAttribute("class", "surface");
EndpageContainer.appendChild(ground);

const LanternString = new Image();
LanternString.src = "/assets/img/Vector 1.png";
LanternString.setAttribute("class", "lantern-string");
EndpageContainer.appendChild(LanternString);

const LanternSmall = new Image();
LanternSmall.src = "/assets/img/Artboard 32.png";
LanternSmall.setAttribute("class", "lantern-small");
EndpageContainer.appendChild(LanternSmall);

const LanternMedium = new Image();
LanternMedium.src = "/assets/img/Artboard 32.png";
LanternMedium.setAttribute("class", "lantern-medium");
EndpageContainer.appendChild(LanternMedium);

const LanternLarge = new Image();
LanternLarge.src = "/assets/img/Artboard 32.png";
LanternLarge.setAttribute("class", "lantern-large");
EndpageContainer.appendChild(LanternLarge);

const Bush1 = new Image();
Bush1.src = "/assets/img/Artboard 36 2.png";
Bush1.setAttribute("class", "bush-dark1");
EndpageContainer.appendChild(Bush1);

const Bush2 = new Image();
Bush2.src = "/assets/img/Artboard 36 1.png";
Bush2.setAttribute("class", "bush-dark2");
EndpageContainer.appendChild(Bush2);

const Bush3 = new Image();
Bush3.src = "/assets/img/Artboard 39 1.png";
Bush3.setAttribute("class", "bush-light1");
EndpageContainer.appendChild(Bush3);

const Bush4 = new Image();
Bush4.src = "/assets/img/Artboard 39 2.png";
Bush4.setAttribute("class", "bush-light2");
EndpageContainer.appendChild(Bush4);

const Cat = new Image();
Cat.src = "/assets/img/Cat/Artboard 12.png";
Cat.setAttribute("class", "cat");
EndpageContainer.appendChild(Cat);

const Coin1 = new Image();
Coin1.src = "/assets/img/Artboard 35.png";
Coin1.setAttribute("class", "coin1");
EndpageContainer.appendChild(Coin1);

const Coin2 = new Image();
Coin2.src = "/assets/img/Artboard 35.png";
Coin2.setAttribute("class", "coin2");
EndpageContainer.appendChild(Coin2);

const KiteFirework = new Image();
KiteFirework.src = "/assets/img/Artboard 33.png";
KiteFirework.setAttribute("class", "kite-firework");
EndpageContainer.appendChild(KiteFirework);

const ContentContainer = document.createElement("div");
ContentContainer.setAttribute("class","content-container");
EndpageContainer.appendChild(ContentContainer);

const Thanks = document.createElement("h1");
Thanks.setAttribute("class","thanks");
Thanks.innerText = "Cảm ơn đã tham gia"
ContentContainer.appendChild(Thanks);

const Subtitle = document.createElement("p");
Subtitle.setAttribute("class","subtitle");
Subtitle.innerText = "Thay mặt đội ngũ dev của CLB F-Code, tụi mình xin gửi lời chúc đến tất cả các bạn có một năm mới An Khang Thịnh Vượng, Mã Đáo Thành Công";
ContentContainer.appendChild(Subtitle);

const EndpageStyle = document.createElement("style");
EndpageStyle.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }

    body {
        background: #FFDEAB;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    .greeting-container {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    .bg-container {
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 0;
    }

    .surface {
        width: 100%;
        height: 35%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 0;
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

    .bush-dark1 {
        width: 20%;
        position: absolute;
        bottom: 0;
        left: 1536px;
        z-index: 2;
    }

    .bush-dark2 {
        width: 20%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
    }

    .bush-light1 {
        width: 15%;
        position: absolute;
        top: 650px;
        left: 1450px;
        z-index: 1;
    }

    .bush-light2 {
        width: 15%;
        position: absolute;
        bottom: 0;
        left: 25px;
        z-index: 1;
    }

    .cat {
        width: 25%;
        position: absolute;
        top: 370px;
        left: 700px;
        z-index: 3;
    }

    .coin1 {
        width: 15%;
        position: absolute;
        top: 600px;
        left: 400px;
    }

    .coin2 {
        width: 15%;
        position: absolute;
        top: 550px;
        left: 370px;
    }

    .kite-firework {
        width: 20%;
        position: absolute;
        top: 0px;
        left: 1500px;
    }

    .content-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    
    .thanks {
        margin-top: 50px;

        font-style: normal;
        font-weight: 700;
        font-size: 90px;
        line-height: 110px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #D20000;
    }
    
    .subtitle {
        width: 660px;
        height: 55px;

        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.02em;

        color: #FF9B71;
    }

    @media only screen and (max-width: 1440px) {
        .lantern-large {
            width: 15%;
            top: 100px;
            left: -100px;
        }

        .lantern-medium {
            width: 10%;
            top: 60px;
        }

        .lantern-small {
            width: 5%;
            top: 30px;
            left: 150px;
        }
        
        .bush-light1 {
            top: 700px;
            left: 1140px;
        }

        .bush-dark1{
            left: 1152px;
        }

        .coin1 {
            left: 300px;
        }

        .coin2 {
            top: 560px;
            left: 270px;
        }

        .cat {
            width: 30%;
            top: 400px;
            left: 500px;
        }

        .kite-firework {
            top: -50px;
            left: 1240px;
        }
    }

    @media only screen and (max-width: 1024px) {
        .surface {
            height: 25%;
        }
        
        .lantern-string {
            width: 25%;
        }
        
        .lantern-large {
            width: 15%;
            top: 120px;
            left: -60px;
        }

        .lantern-medium {
            width: 12%;
            top: 80px;
            left: 60px;
        }

        .lantern-small {
            width: 9%;
            top: 45px;
            left: 160px;
        }
        
        .bush-light1 {
            top: 750px;
            left: 840px;
        }

        .bush-dark1{
            left: 852px;
        }

        .coin1 {
            top: 700px;
            left: 180px;
        }

        .coin2 {
            top: 680px;
            left: 150px;
        }

        .cat {
            width: 40%;
            top: 500px;
            left: 320px;
        }

        .kite-firework {
            top: -30px;
            left: 800px;
        }
    }

    @media only screen and (max-width: 768px) {
        .surface {
            height: 20%;
        }
        
        .lantern-string {
            width: 30%;
        }
        
        .lantern-large {
            width: 20%;
            top: 108px;
            left: -60px;
        }

        .lantern-medium {
            width: 15%;
            top: 73px;
            left: 60px;
        }

        .lantern-small {
            width: 10s%;
            top: 35px;
            left: 160px;
        }
        
        .bush-light1 {
            top: 800px;
            left: 600px;
        }

        .bush-dark1{
            left: 615px;
        }

        .coin1 {
            top: 750px;
            left: 130px;
        }

        .coin2 {
            top: 730px;
            left: 120px;
        }

        .cat {
            width: 40%;
            top: 600px;
            left: 240px;
        }

        .kite-firework {
            width: 40%;
            top: -30px;
            left: 500px;
        }
    }

    @media only screen and (max-width: 425px) {
        .surface {
            height: 15%;
        }
        
        .lantern-string {
            width: 30%;
        }
        
        .lantern-large {
            width: 30%;
            top: 60px;
            left: -60px;
        }

        .lantern-medium {
            width: 20%;
            top: 33px;
            left: 40px;
        }

        .lantern-small {
            width: 10%;
            top: 10px;
            left: 100px;
        }
        
        .bush-light1 {
            top: 800px;
            left: 600px;
        }

        .bush-dark1{
            width: 40%;
            left: 280px;
        }

        .bush-dark2 {
            width: 40%;
        }

        .coin1 {
            top: 800px;
            left: 50px;
        }

        .coin2 {
            top: 790px;
            left: 40px;
        }

        .cat {
            width: 60%;
            top: 670px;
            left: 100px;
        }

        .kite-firework {
            width: 50%;
            top: -30px;
            left: 250px;
        }

        .content-container {
            padding-top: 220px;
        }

        .title-container {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(EndpageStyle);

//Function

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
    MainpageContainer.appendChild(sakura);
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