const LoadingContainer = document.createElement('section');
LoadingContainer.setAttribute('class', 'loading-container');
document.body.appendChild(LoadingContainer);

const LanternString = new Image();
LanternString.src = "/asset/Component/Vector 1.png";
LanternString.setAttribute('class','lantern-string');
LoadingContainer.appendChild(LanternString);

const LanternSmall = new Image();
LanternSmall.src = "/asset/Component/Artboard 32.png";
LanternSmall.setAttribute('class','lantern-small');
LoadingContainer.appendChild(LanternSmall);

const LanternMedium = new Image();
LanternMedium.src = "/asset/Component/Artboard 32.png";
LanternMedium.setAttribute('class','lantern-medium');
LoadingContainer.appendChild(LanternMedium);

const LanternLarge = new Image();
LanternLarge.src = "/asset/Component/Artboard 32.png";
LanternLarge.setAttribute('class','lantern-large');
LoadingContainer.appendChild(LanternLarge);

const KiteFirework = new Image();
KiteFirework.src = "/asset/Component/Artboard 33.png";
KiteFirework.setAttribute('class','kite-firework');
LoadingContainer.appendChild(KiteFirework);

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
    }

    .loading-container {
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
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
        width: 20%;
        position: absolute;
        top: 0px;
        left: 1500px;
`;
document.head.appendChild(LoadingStyle);