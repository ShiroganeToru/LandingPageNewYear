const addMoney = () => {
    const random = (min, max) => Math.random() * (max - min) + min;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let money = new Image();
    money.src = "../assets/img/Wishing/money-red.png";
    money.style.position = 'absolute';
    money.style.top = "-2px";
    money.style.right = random(0, screenWidth) + "px";
    money.style.zIndex = "10";
    const moneyFalling = () => {
        money.style.top = parseInt(money.style.top) + 2 + "px";
        money.style.right = parseInt(money.style.right) + 0 + "px";
        window.requestAnimationFrame(moneyFalling);
    };
    window.requestAnimationFrame(moneyFalling);
    document.body.appendChild(money);
};

export default function callBackMoney() {
    for (let i = 0; i < 80; i++) {
        setTimeout(addMoney, i * 80);
    }
}