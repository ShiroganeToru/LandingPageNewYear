const MainpageContainer = document.createElement("section");
MainpageContainer.setAttribute("class", "mainpage-container");
document.body.appendChild(MainpageContainer);

const BackgroundContainer = document.createElement('div');
BackgroundContainer.setAttribute('class','bg-container');
MainpageContainer.appendChild(BackgroundContainer);

const ground = new Image();
ground.src = "./assets/img/Vector 2.png";
ground.setAttribute('class','surface')
BackgroundContainer.appendChild(ground);

const LanternString = new Image();
LanternString.src = "./assets/img/Vector 1.png";
LanternString.setAttribute('class','lantern-string');
BackgroundContainer.appendChild(LanternString);

const LanternSmall = new Image();
LanternSmall.src = "./assets/img/Artboard 32.png";
LanternSmall.setAttribute('class','lantern-small');
BackgroundContainer.appendChild(LanternSmall);

const LanternMedium = new Image();
LanternMedium.src = "./assets/img/Artboard 32.png";
LanternMedium.setAttribute('class','lantern-medium');
BackgroundContainer.appendChild(LanternMedium);

const LanternLarge = new Image();
LanternLarge.src = "./assets/img/Artboard 32.png";
LanternLarge.setAttribute('class','lantern-large');
BackgroundContainer.appendChild(LanternLarge);

const Bush1 = new Image();
Bush1.src = "./assets/img/Artboard 36 2.png";
Bush1.setAttribute('class','bush-dark1');
BackgroundContainer.appendChild(Bush1);

const Bush2 = new Image();
Bush2.src = "./assets/img/Artboard 36 1.png";
Bush2.setAttribute('class','bush-dark2');
BackgroundContainer.appendChild(Bush2);

const Bush3 = new Image();
Bush3.src = "./assets/img/Artboard 39 1.png";
Bush3.setAttribute('class','bush-light1');
BackgroundContainer.appendChild(Bush3);

const Bush4 = new Image();
Bush4.src = "./assets/img/Artboard 39 2.png";
Bush4.setAttribute('class','bush-light2');
BackgroundContainer.appendChild(Bush4);

const Cat = new Image();
Cat.src = "./assets/img/Cat/Artboard 14.png";
Cat.setAttribute('class','cat');
BackgroundContainer.appendChild(Cat);

const Coin1 = new Image();
Coin1.src = "./assets/img/Artboard 35.png";
Coin1.setAttribute('class','coin1');
BackgroundContainer.appendChild(Coin1);

const Coin2 = new Image();
Coin2.src = "./assets/img/Artboard 35.png";
Coin2.setAttribute('class','coin2');
BackgroundContainer.appendChild(Coin2);

const KiteFirework = new Image();
KiteFirework.src = "./assets/img/Artboard 33.png";
KiteFirework.setAttribute('class','kite-firework');
BackgroundContainer.appendChild(KiteFirework);

const ContentContainer = document.createElement('div');
ContentContainer.setAttribute('class','content-container');
MainpageContainer.appendChild(ContentContainer);

const TitleContainer = document.createElement('div');
TitleContainer.setAttribute('class','title-container');
ContentContainer.appendChild(TitleContainer);

const Hny = document.createElement("h1");
const HnyText = document.createTextNode("Chúc mừng năm mới");
Hny.setAttribute("class", "hny");
Hny.appendChild(HnyText);
TitleContainer.appendChild(Hny);

const Year = document.createElement("h1");
const YearNumber = document.createTextNode("2023");
Year.setAttribute("class", "year");
Year.appendChild(YearNumber);
TitleContainer.appendChild(Year);

const distich = document.createElement("p");
const distichText = document.createTextNode(
  "Cung chúc tân xuân - Vạn sự như ý"
);
distich.setAttribute("class", "distich");
distich.appendChild(distichText);
ContentContainer.appendChild(distich);

const buttonGo = document.createElement("button");
buttonGo.setAttribute("class", "button-go");
const buttonIcon = document.createElement("i");
buttonIcon.setAttribute("class", "fa-solid fa-play");
buttonGo.appendChild(buttonIcon);
buttonGo.innerText = "Đi thắp hương đầu năm nào!";
MainpageContainer.appendChild(buttonGo);

const MainpageStyle = document.createElement("style");
MainpageStyle.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        background: #FFDEAB;
        font-family: 'Quicksand', sans-serif;
        overflow: hidden;
        background: #FFDEAB;
    }

    .mainpage-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .bg-container {
        width: 100%;
        height: 100vh;
        position: absolute;
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
        left: 0px;
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
        width: 30%;
        position: absolute;
        top: 323px;
        left: 650px;
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
        left: 1550px;
        transform: rotate(-45deg);
    }
    .content-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding-top: 100px;
    }

    .title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .hny {
        width: 500px;
        font-style: normal;
        font-weight: 700;
        font-size: 90px;
        line-height: 100px;
        text-align: right;
        letter-spacing: 0.02em;
        color: #D20000;
    }

    .year {
        font-style: normal;
        font-weight: 700;
        font-size: 210px;
        line-height: 160px;
        text-align: right;
        letter-spacing: 0.02em;
        color: #D20000;
    }

    .distich {
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0.02em;

        color: #FF9B71;
    }

    .button-go {
        width: 220px;
        height: 90px;

        background-color: #FA9B20;
        border: none;
        border-radius: 20px;
        color: white;
        padding: 8px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;

        position: absolute;
        top: 420px;
        left: 1200px;
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
            top: 400px;
            left: 500px;
        }

        .kite-firework {
            top: -50px;
            left: 1240px;
        }

        .content-container {
            padding-top: 150px;
        }

        .button-go {
            top: 500px;
            left: 1000px;
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

        .content-container {
            padding-top: 200px;
        }

        .hny {
            width: 335px;
            font-size: 60px;
            line-height: 80px;
        }

        .year {
            font-size: 160px;
        }

        .button-go {
            top: 500px;
            left: 700px;
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

        .content-container {
            padding-top: 280px;
        }

        .hny {
            width: 335px;
            font-size: 60px;
            line-height: 80px;
        }

        .year {
            font-size: 160px;
        }

        .button-go {
            top: 520px;
            left: 300px;
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

        .hny {
            width: 400px;
            font-size: 70px;
            line-height: 60px;
            text-align: center;
        }

        .year {
            font-size: 140px;
            line-height: 100px;
        }

        .distich {
            width: 400px;
            line-height: 32px;
        }

        .button-go {
            top: 570px;
            left: 100px;
        }
    }
`;
document.head.appendChild(MainpageStyle);
