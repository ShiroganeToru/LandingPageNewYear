const MainpageContainer = document.createElement('section');
MainpageContainer.setAttribute('class', 'mainpage-container');
document.body.appendChild(MainpageContainer);

const ground = new Image();
ground.src = "/assets/img/Vector 2.png";
ground.setAttribute('class','surface')
MainpageContainer.appendChild(ground);

const LanternString = new Image();
LanternString.src = "/assets/img/Vector 1.png";
LanternString.setAttribute('class','lantern-string');
MainpageContainer.appendChild(LanternString);

const LanternSmall = new Image();
LanternSmall.src = "/assets/img/Artboard 32.png";
LanternSmall.setAttribute('class','lantern-small');
MainpageContainer.appendChild(LanternSmall);

const LanternMedium = new Image();
LanternMedium.src = "/assets/img/Artboard 32.png";
LanternMedium.setAttribute('class','lantern-medium');
MainpageContainer.appendChild(LanternMedium);

const LanternLarge = new Image();
LanternLarge.src = "/assets/img/Artboard 32.png";
LanternLarge.setAttribute('class','lantern-large');
MainpageContainer.appendChild(LanternLarge);

const Bush1 = new Image();
Bush1.src = "/assets/img/Artboard 36 2.png";
Bush1.setAttribute('class','bush-dark1');
MainpageContainer.appendChild(Bush1);

const Bush2 = new Image();
Bush2.src = "/assets/img/Artboard 36 1.png";
Bush2.setAttribute('class','bush-dark2');
MainpageContainer.appendChild(Bush2);

const Bush3 = new Image();
Bush3.src = "/assets/img/Artboard 39 1.png";
Bush3.setAttribute('class','bush-light1');
MainpageContainer.appendChild(Bush3);

const Bush4 = new Image();
Bush4.src = "/assets/img/Artboard 39 2.png";
Bush4.setAttribute('class','bush-light2');
MainpageContainer.appendChild(Bush4);

const Cat = new Image();
Cat.src = "/assets/img/Cat/Artboard 14.png";
Cat.setAttribute('class','cat');
MainpageContainer.appendChild(Cat);

const Coin1 = new Image();
Coin1.src = "/assets/img/Artboard 35.png";
Coin1.setAttribute('class','coin1');
MainpageContainer.appendChild(Coin1);

const Coin2 = new Image();
Coin2.src = "/assets/img/Artboard 35.png";
Coin2.setAttribute('class','coin2');
MainpageContainer.appendChild(Coin2);

const KiteFirework = new Image();
KiteFirework.src = "/assets/img/Artboard 33.png";
KiteFirework.setAttribute('class','kite-firework');
MainpageContainer.appendChild(KiteFirework);

const Hny = document.createElement('h1');
const HnyText = document.createTextNode("Chúc mừng năm mới")
Hny.setAttribute('class','hny');
Hny.appendChild(HnyText);
MainpageContainer.appendChild(Hny);

const Year = document.createElement('h1');
const YearNumber = document.createTextNode("2023")
Year.setAttribute('class','year');
Year.appendChild(YearNumber);
MainpageContainer.appendChild(Year);

const distich = document.createElement('p');
const distichText = document.createTextNode("Cung chúc tân xuân - Vạn sự như ý");
distich.setAttribute('class','distich');
distich.appendChild(distichText);
MainpageContainer.appendChild(distich);

const buttonGo = document.createElement('button');
buttonGo.setAttribute('class', 'button-go');
const buttonIcon = document.createElement('i');
buttonIcon.setAttribute('class','fa-solid fa-play');
buttonGo.appendChild(buttonIcon);
buttonGo.innerText = "Đi thắp hương đầu năm nào!";
MainpageContainer.appendChild(buttonGo);

const MainpageStyle = document.createElement('style');
MainpageStyle.innerHTML = `
    body {
        background: #FFDEAB;
        font-family: 'Quicksand', sans-serif;

        background: #FFDEAB;
    }

    .mainpage-container {
        width: 100%;
        height: 100%;
    }

    .surface {
        width: 100%;
        height: 35%;
        position: absolute;
        left: 0;
        top: 603px;
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
        top: 642px;
        left: 1536px;
        z-index: 2;
    }

    .bush-dark2 {
        width: 20%;
        position: absolute;
        top: 612px;
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
        top: 612px;
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
        left: 1440px;
    }

    .hny {
        position: absolute;
        width: 600px;
        height: 160px;
        left: 300px;
        top: 20px;

        font-style: normal;
        font-weight: 700;
        font-size: 90px;
        line-height: 100px;
        text-align: right;
        letter-spacing: 0.02em;
        color: #D20000;
    }

    .year {
        position: absolute;
        width: 600px;
        height: 160px;
        left: 820px;
        top: 118px;;
        margin: 0;

        font-style: normal;
        font-weight: 700;
        font-size: 210px;
        line-height: 160px;
        text-align: right;
        letter-spacing: 0.02em;
        color: #D20000;
    }

    .distich {
        position: absolute;
        width: 720px;
        height: 102px;
        left: 575px;
        top: 295px;

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
`;
document.head.appendChild(MainpageStyle);