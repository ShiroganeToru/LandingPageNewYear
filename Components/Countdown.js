// HTML Tag
const CountdownContainer = document.createElement('section');
CountdownContainer.setAttribute('class','countdown-container');
document.body.appendChild(CountdownContainer);

const CountdownLayout = document.createElement('div');
CountdownLayout.setAttribute('class','countdown-layout');
CountdownContainer.appendChild(CountdownLayout);

const CountdownDay = document.createElement('div');
CountdownDay.setAttribute('class','number');
CountdownLayout.appendChild(CountdownDay);
const CountdownDayDisplay = document.createElement('p');
CountdownDayDisplay.setAttribute('id','days');
CountdownDayDisplay.innerText = "00";
CountdownDay.appendChild(CountdownDayDisplay);
const CountdownDayText = document.createElement('span');
CountdownDayText.innerText = "Ngày";
CountdownDay.appendChild(CountdownDayText);

const CountdownHour = document.createElement('div');
CountdownHour.setAttribute('class','number');
CountdownLayout.appendChild(CountdownHour);
const CountdownHourDisplay = document.createElement('p');
CountdownHourDisplay.setAttribute('id','hours');
CountdownHourDisplay.innerText = "00";
CountdownHour.appendChild(CountdownHourDisplay);
const CountdownHourText = document.createElement('span');
CountdownHourText.innerText = "Giờ";
CountdownHour.appendChild(CountdownHourText);

const CountdownMinute = document.createElement('div');
CountdownMinute.setAttribute('class','number');
CountdownLayout.appendChild(CountdownMinute);
const CountdownMinuteDisplay = document.createElement('p');
CountdownMinuteDisplay.setAttribute('id','minutes');
CountdownMinuteDisplay.innerText = "00";
CountdownMinute.appendChild(CountdownMinuteDisplay);
const CountdownMinuteText = document.createElement('span');
CountdownMinuteText.innerText = "Phút";
CountdownMinute.appendChild(CountdownMinuteText);

const CountdownSecond = document.createElement('div');
CountdownSecond.setAttribute('class','number');
CountdownLayout.appendChild(CountdownSecond);
const CountdownSecondDisplay = document.createElement('p');
CountdownSecondDisplay.setAttribute('id','seconds');
CountdownSecondDisplay.innerText = "00";
CountdownSecond.appendChild(CountdownSecondDisplay);
const CountdownSecondText = document.createElement('span');
CountdownSecondText.innerText = "Giây";
CountdownSecond.appendChild(CountdownSecondText);

const SceneBackground = document.createElement('div');
SceneBackground.setAttribute('class','scene');
CountdownContainer.appendChild(SceneBackground);

// CSS Style
const CountdownStyle = document.createElement('style');
CountdownStyle.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }

    body {
        background: #201E2C;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    .countdown-container {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        // background: linear-gradient(#111425,#201E2C);
        background-attachment: fixed;
    }

    .countdown-layout {
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 50px;
    }

    .countdown-layout .number {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .countdown-layout div p {
        color: #FFEC8A;
        width: 156px;
        
        font-style: normal;
        font-weight: 700;
        font-size: 125px;
        line-height: 156px;
        text-align: center;
    }

    .countdown-layout div span {
        color: #FFEC8A;
        
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        text-align: center;
    }

    .scene {
        width: 100%;
        height: 100vh;
    }
    
    .scene i {
        position: absolute;
        background: white;
        border-radius: 50%;
    }

    @media only screen and (max-width: 390px) {
        .countdown-layout {
            flex-direction: column;
            gap: 10px;
        }

        .countdown-layout div p {
            font-size: 100px;
        }

        .countdown-layout div span {
            font-size: 36px;
        }
    }
`;
document.head.appendChild(CountdownStyle);

// JavaScript Function
const CountdownDate = new Date("Jan 22, 2023 00:00:00").getTime();
const x = setInterval(function(){
    const now = new Date().getTime();
    const distance = CountdownDate- now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    CountdownDayDisplay.innerText = "" + days;
    CountdownHourDisplay.innerText = "" + hours;
    CountdownMinuteDisplay.innerText = "" + minutes;
    CountdownSecondDisplay.innerText = "" + seconds;

    if(distance < 0) {
        clearInterval(x);
        CountdownDayDisplay.innerText = "00";
        CountdownHourDisplay.innerText = "00";
        CountdownMinuteDisplay.innerText = "00";
        CountdownSecondDisplay.innerText = "00";
    }
},1000);

function star() {
    let count = 500;
    let scene = document.querySelector('.scene');
    let i = 0;

    while (i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        scene.appendChild(star);
        i++;
    }
}

star();