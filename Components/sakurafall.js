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
        if(parseInt(sakura.style.top) > screenHeight) {
            sakura.style.opacity = 0;
            sakura.style.transition = "opacity 500ms";
        }
        window.requestAnimationFrame(sakuraFalling);
    };
    window.requestAnimationFrame(sakuraFalling);
    document.body.appendChild(sakura);
};

function callBackSakura() {
    for (let i = 0; i < 100; i++) {
        setTimeout(addSakura, i * 100);
    }
}
export default function callSakuraFalling() {
    callBackSakura();
    setInterval(callBackSakura, 11500);
}