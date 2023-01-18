const LoadingContainer = document.createElement('section');
LoadingContainer.setAttribute('class', 'loading-container');
document.body.appendChild(LoadingContainer);

const LanternString = new Image();
LanternString.src = "/assets/img/Vector 1.png";
LanternString.setAttribute('class','lantern-string');
LoadingContainer.appendChild(LanternString);

const LanternSmall = new Image();
LanternSmall.src = "/assets/img/Artboard 32.png";
LanternSmall.setAttribute('class','lantern-small');
LoadingContainer.appendChild(LanternSmall);

const LanternMedium = new Image();
LanternMedium.src = "/assets/img/Artboard 32.png";
LanternMedium.setAttribute('class','lantern-medium');
LoadingContainer.appendChild(LanternMedium);

const LanternLarge = new Image();
LanternLarge.src = "/assets/img/Artboard 32.png";
LanternLarge.setAttribute('class','lantern-large');
LoadingContainer.appendChild(LanternLarge);

const KiteFirework = new Image();
KiteFirework.src = "/assets/img/Artboard 33.png";
KiteFirework.setAttribute('class','kite-firework');
LoadingContainer.appendChild(KiteFirework);

const Cloud1 = new Image();
Cloud1.src = "/assets/img/Artboard 40.png";
Cloud1.setAttribute('class','cloud1');
LoadingContainer.appendChild(Cloud1);

const Cloud2 = new Image();
Cloud2.src = "/assets/img/Artboard 40.png";
Cloud2.setAttribute('class','cloud2');
LoadingContainer.appendChild(Cloud2);

const Cloud3 = new Image();
Cloud3.src = "/assets/img/Artboard 40.png";
Cloud3.setAttribute('class','cloud3');
LoadingContainer.appendChild(Cloud3);

const LoadingFrame = document.createElement('div');
LoadingFrame.setAttribute('class','frame');
LoadingContainer.appendChild(LoadingFrame);

const Rhombus = document.createElement('div');
Rhombus.setAttribute('class','rhombus');
LoadingFrame.appendChild(Rhombus);

const RhombusBorder = document.createElement('div');
RhombusBorder.setAttribute('class','rhombus-border');
LoadingFrame.appendChild(RhombusBorder);

const LoadingContent = document.createElement('div');
LoadingContent.setAttribute('class','loading-content');
LoadingContainer.appendChild(LoadingContent);

const NewYearTitle = document.createElement('h1');
NewYearTitle.setAttribute('class','ny-title');
NewYearTitle.innerText = "Chúc mừng năm mới";
LoadingContent.appendChild(NewYearTitle);

const NewYearNumber = document.createElement('h1');
NewYearNumber.setAttribute('class','number-year');
NewYearNumber.innerText = "2023";
LoadingContent.appendChild(NewYearNumber);

const LoadingStyle = document.createElement('style');
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

    .cloud1 {
        position: absolute;
        top: 620px;
        left: 870px;
        z-index: 10;
        width: 300px;
    }

    .cloud2 {
        position: absolute;
        top: 260px;
        left: 400px;
        width: 400px;
        z-index: 10;
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
    }
    
    .rhombus {
        width: 500px;
        height: 500px;

        background: #FFBC83;
        transform: rotate(45deg);
    }

    .rhombus-border {
        width: 450px;
        height: 450px;

        background: #FFBC83;
        border: 2px solid #D20000;
        transform: rotate(45deg);
        position: absolute;
    }

    .loading-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        gap: 30px;
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
`;
document.head.appendChild(LoadingStyle);