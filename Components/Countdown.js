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
CountdownLayout.appendChild(SceneBackground);

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
    }

    .countdown-container {
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(#111425,#201E2C);
        background-attachment: fixed;
        overflow: hidden;
    }

    .countdown-layout {
        display: flex;
        flex-direction: row;
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
        position: relative;
        left: -1390px;
        width: 100%;
        height: 100vh;
    }
    
    .scene i {
        position: absolute;
        background: white;
        border-radius: 50%;
    }
`;
document.head.appendChild(CountdownStyle);

// JavaScript Function
var CountdownDate = new Date("Jan 22, 2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = CountdownDate- now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
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
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        scene.appendChild(star);
        i++;
    }
}

star();