const GreetingContainer = document.createElement("section");
GreetingContainer.setAttribute("class", "greeting-container");
document.body.appendChild(GreetingContainer);

const ContentContainer = document.createElement("div");
ContentContainer.setAttribute("class", "content-container");
GreetingContainer.appendChild(ContentContainer);

const Hny = document.createElement("h1");
const HnyText = document.createTextNode("Tạo thiệp chúc");
Hny.setAttribute("class", "hny");
Hny.appendChild(HnyText);
ContentContainer.appendChild(Hny);

const distich = document.createElement("p");
const distichText = document.createTextNode(
    "Cung chúc tân xuân - Vạn sự như ý"
);
distich.setAttribute("class", "distich");
distich.appendChild(distichText);
ContentContainer.appendChild(distich);

const buttonCreate = document.createElement("button");
buttonCreate.setAttribute("class", "button-popup");
const buttonIcon = document.createElement("i");
buttonIcon.setAttribute("class", "fa-solid fa-play");
buttonCreate.appendChild(buttonIcon);
buttonCreate.innerText = "Gửi lời chúc";
ContentContainer.appendChild(buttonCreate);

const ground = new Image();
ground.src = "./assets/img/Vector 2.png";
ground.setAttribute("class", "surface");
GreetingContainer.appendChild(ground);

const LanternString = new Image();
LanternString.src = "./assets/img/Vector 1.png";
LanternString.setAttribute("class", "lantern-string");
GreetingContainer.appendChild(LanternString);

const LanternSmall = new Image();
LanternSmall.src = "./assets/img/Artboard 32.png";
LanternSmall.setAttribute("class", "lantern-small");
GreetingContainer.appendChild(LanternSmall);

const LanternMedium = new Image();
LanternMedium.src = "./assets/img/Artboard 32.png";
LanternMedium.setAttribute("class", "lantern-medium");
GreetingContainer.appendChild(LanternMedium);

const LanternLarge = new Image();
LanternLarge.src = "./assets/img/Artboard 32.png";
LanternLarge.setAttribute("class", "lantern-large");
GreetingContainer.appendChild(LanternLarge);

const Bush1 = new Image();
Bush1.src = "./assets/img/Artboard 36 2.png";
Bush1.setAttribute("class", "bush-dark1");
GreetingContainer.appendChild(Bush1);

const Bush2 = new Image();
Bush2.src = "./assets/img/Artboard 36 1.png";
Bush2.setAttribute("class", "bush-dark2");
GreetingContainer.appendChild(Bush2);

const Bush3 = new Image();
Bush3.src = "./assets/img/Artboard 39 1.png";
Bush3.setAttribute("class", "bush-light1");
GreetingContainer.appendChild(Bush3);

const Bush4 = new Image();
Bush4.src = "./assets/img/Artboard 39 2.png";
Bush4.setAttribute("class", "bush-light2");
GreetingContainer.appendChild(Bush4);

const Cat = new Image();
Cat.src = "./assets/img/Cat/Artboard 15.png";
Cat.setAttribute("class", "cat");
GreetingContainer.appendChild(Cat);

const Coin1 = new Image();
Coin1.src = "./assets/img/Artboard 35.png";
Coin1.setAttribute("class", "coin1");
GreetingContainer.appendChild(Coin1);

const Coin2 = new Image();
Coin2.src = "./assets/img/Artboard 35.png";
Coin2.setAttribute("class", "coin2");
GreetingContainer.appendChild(Coin2);

const KiteFirework = new Image();
KiteFirework.src = "./assets/img/Artboard 33.png";
KiteFirework.setAttribute("class", "kite-firework");
GreetingContainer.appendChild(KiteFirework);

const BackgroundPopup = document.createElement("div");
BackgroundPopup.setAttribute("class", "bg-popup");
GreetingContainer.appendChild(BackgroundPopup);

const FormPopup = document.createElement("div");
FormPopup.setAttribute("class", "popup");
BackgroundPopup.appendChild(FormPopup);

const FormTitle = document.createElement("h2");
const FormTitleText = document.createTextNode("Trao gửi yêu thương");
FormTitle.setAttribute("class", "form-title");
FormTitle.appendChild(FormTitleText);
FormPopup.appendChild(FormTitle);

const FormInput = document.createElement("form");
FormPopup.appendChild(FormInput);

const NameInput = document.createElement("input");
NameInput.setAttribute("type", "text");
NameInput.setAttribute("class", "name-input");
NameInput.setAttribute("placeholder", "Họ và tên của bạn...");
FormInput.appendChild(NameInput);

const RecipientInput = document.createElement("input");
RecipientInput.setAttribute("type", "text");
RecipientInput.setAttribute("class", "recipient-input");
RecipientInput.setAttribute("placeholder", "Bạn muốn gửi tới ai...");
FormInput.appendChild(RecipientInput);

const MessageInput = document.createElement("textarea");
MessageInput.setAttribute("type", "text");
MessageInput.setAttribute("class", "message-input");
MessageInput.setAttribute("placeholder", "Nhập lời chúc ở đây...");
FormInput.appendChild(MessageInput);

const LimitFucntion = document.createElement("div");
LimitFucntion.setAttribute("class", "alert-frame");
FormPopup.appendChild(LimitFucntion);

const LimitChar = document.createElement("p");
LimitChar.setAttribute("class", "limit");
LimitChar.innerText = "0/200";
LimitFucntion.appendChild(LimitChar);

const Alert = document.createElement("p");
Alert.setAttribute("class", "alert");
Alert.innerText = "Không thể nhập quá 200 ký tự";
LimitFucntion.appendChild(Alert);

const ButtonConfirm = document.createElement("button");
ButtonConfirm.setAttribute("type", "button");
ButtonConfirm.setAttribute("class", "button-confirm");
ButtonConfirm.innerText = "Tạo thiệp";
FormPopup.appendChild(ButtonConfirm);

const ButtonClose = new Image();
ButtonClose.src = "./assets/img/xmark-solid.svg";
ButtonClose.setAttribute("class", "close");
FormPopup.appendChild(ButtonClose);

const Guide = document.createElement("h1");
Guide.innerText = "Click vào tấm thiệp";
Guide.setAttribute('class','guide');
GreetingContainer.appendChild(Guide);

const Card = document.createElement("div");
Card.setAttribute('class','card');
GreetingContainer.appendChild(Card);

const CardInner = document.createElement("div");
CardInner.setAttribute("class","card-inner");
Card.appendChild(CardInner);

const CardFaceFront = document.createElement("div");
CardFaceFront.setAttribute("class","card-face front");
CardInner.appendChild(CardFaceFront);

const CardFaceBack = document.createElement("div");
CardFaceBack.setAttribute("class","card-face back");
CardInner.appendChild(CardFaceBack);

const CardContent = document.createElement("div");
CardContent.setAttribute("class","card-content");
CardFaceBack.appendChild(CardContent);

const CardOutsideFront = new Image();
CardOutsideFront.src = "./assets/img/Artboard 1.png";
CardFaceFront.appendChild(CardOutsideFront);

const FormResults = document.createElement("div");
FormResults.setAttribute("class","form-result");
CardContent.appendChild(FormResults);

const CardInsideBack = new Image();
CardInsideBack.src = "./assets/img/Artboard 2.png";
CardContent.appendChild(CardInsideBack);

const OtherNameResult = document.createElement("p");
OtherNameResult.setAttribute("class","output othername");
OtherNameResult.innerText = "";
FormResults.appendChild(OtherNameResult);

const TextResult = document.createElement("p");
TextResult.setAttribute("class","output greeting-text");
TextResult.innerText = "";
FormResults.appendChild(TextResult);

const NameResult = document.createElement("p");
NameResult.setAttribute("class","output sender-name");
NameResult.innerText = "";
FormResults.appendChild(NameResult);


const GreetingStyle = document.createElement("style");
GreetingStyle.innerHTML = `
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

    .hny {
        margin-top: 50px;

        font-style: normal;
        font-weight: 700;
        font-size: 90px;
        line-height: 100px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #D20000;
    }
    
    .distich {
        width: 720px;
        height: 55px;

        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0.02em;

        color: #FF9B71;
    }

    .button-popup {
        width: 160px;
        height: 50px;

        background-color: #FA9B20;
        border: none;
        border-radius: 20px;
        color: white;

        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
    }

    .content-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    .bg-popup {
        background: rgba(0, 0, 0, 0.5);

        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 9;

        display: none;
        align-items: center;
        justify-content: center;
    }
    
    .popup {
        box-sizing: border-box;

        width: 50%;
        height: 65%;
        z-index: 10;

        background: #BB2649;
        border-radius: 10px;
        border: 2px solid #FA9B20;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    .form-title {
        color: white;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 38px;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 25px;
    }

    .name-input, .recipient-input {
        background: #79162D;
        border-radius: 10px;
        border: none;
        padding: 15px;
        color: white;
        font-size: 24px;

        width: 850px;
        height: 55px;
    }

    .message-input {
        background: #79162D;
        border-radius: 10px;
        border: none;
        padding: 15px;
        color: white;
        font-size: 24px;
        work-break: break-word;

        width: 850px;
        height: 250px;
        text-align: left;
    }

    .alert-frame {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 850px;
    }
    
    .alert {
        display: none;
        color: red;
    }
    
    .limit {
        color: white;
    }

    .button-confirm {
        width: 160px;
        height: 40px;

        background-color: #FA9B20;
        border: none;
        border-radius: 20px;
        color: white;

        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        opacity: 1;
        
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
    }

    .close {
        width: 30px;
        height: 30px;

        position: absolute;
        top: 190px;
        left: 1390px;

        cursor: pointer;
    }

    .guide {
        margin-top: 50px;

        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 100px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #D20000;
        display: none;
    }

    .card {
        width: 438px;
        height: 613px;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        perspective: 1200px;
        transition: 1s;
        display: none;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
    }

    .card-inner.is-flipped {
        transform: rotateY(180deg);
    }

    .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        overflow: hidden;
        border-radius: 16px;
        box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
    }

    .front {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-face.back {
        transform: rotateY(180deg);
    }

    .form-result {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        gap: 20px;
    }
    
    .card-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .output {
        width: 90%;
        color: #D20000;
        font-style: bold;
    }

    .othername, .greeting-text {
        text-align: left;
    }

    .othername {
        font-weight: 700;
    }

    .sender-name {
        text-align: right;
        font-weight: 700;
    }

    .download {
        padding: 10px;
        background: #d20000;
        color: white;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 700px;
        font-size: 24px;
        display: none;
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

        .content-container {
            padding-top: 50px;
        }

        .name-input, .recipient-input {
            width: 650px;
        }

        .message-input {
            width: 650px;
        }

        .alert-frame {
            width: 650px;
        }

        .close {
            left: 1030px;
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
            padding-top: 150px;
        }

        .hny {
            font-size: 60px;
            line-height: 80px;
        }

        .year {
            font-size: 160px;
        }

        .name-input, .recipient-input {
            width: 470px;
        }

        .message-input {
            width: 470px;
        }

        .alert-frame {
            width: 470px;
        }

        .close {
            left: 720px;
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
            padding-top: 200px;
        }

        .hny {
            font-size: 60px;
            line-height: 80px;
        }

        .year {
            font-size: 160px;
        }

        .popup {
            width: 80%
        }
        .name-input, .recipient-input {
            width: 570px;
        }

        .message-input {
            width: 570px;
        }

        .alert-frame {
            width: 570px;
        }

        .close {
            left: 650px;
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

        .popup {
            width: 90%
        }
        
        .name-input, .recipient-input {
            width: 340px;
        }

        .message-input {
            width: 340px;
        }

        .alert-frame {
            width: 340px;
        }

        .close {
            left: 365px;
        }
    }
`;
document.head.appendChild(GreetingStyle);

//Javascript Function

//Popup
document.querySelector(".button-popup").addEventListener("click", function () {
    document.querySelector(".bg-popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".bg-popup").style.display = "none";
});

//Limit Character
var MyText = document.querySelector(".message-input");
var Limit = document.querySelector(".limit");
var Requirement = 200;
Limit.textContent = 0 + "/" + 200;

MyText.addEventListener("input", function () {
    var textLength = MyText.value.length;
    Limit.textContent = textLength + "/" + Requirement;

    if (textLength > Requirement) {
        document.querySelector(".alert").style.display = "inline";
        Limit.style.color = "red";
        document.querySelector(".button-confirm").style.cursor = "not-allowed";
        document.querySelector(".button-confirm").style.opacity = "0.5";
    } else {
        document.querySelector(".alert").style.display = "none";
        Limit.style.color = "white";
        document.querySelector(".button-confirm").style.cursor = "pointer";
        document.querySelector(".button-confirm").style.opacity = "1";
    }
});

//Greeting Card
document.querySelector(".button-confirm").addEventListener("click", function () {
    document.querySelector(".card").style.display = "block";
    document.querySelector(".guide").style.display = "block";
    document.querySelector(".download").style.display = "block";
});

const cardflip = document.querySelector(".card-inner");

cardflip.addEventListener("click", function (e) {
  cardflip.classList.toggle('is-flipped');
});

//print results
FormInput.addEventListener("submit", (e) => {
    e.preventDefault();
})
ButtonConfirm.addEventListener("click", function (e) {
    e.preventDefault();
    const yname = NameInput.value;
    const otherName = RecipientInput.value;
    const message = MessageInput.value;

    FormPopup.style.display = 'none';
    BackgroundPopup.style.display = 'none';
    ContentContainer.style.display = 'none';
    Cat.style.display = 'none';
    Coin1.style.display = 'none';
    Coin2.style.display = 'none';

    NameResult.innerText = yname;
    OtherNameResult.innerText = "Gửi đến " + otherName;
    TextResult.innerText = message;
});

//Download Image
const test = document.createElement("a");
test.setAttribute("class","download");
test.innerText = "Tải thiệp về nè";
test.id = "download";
GreetingContainer.appendChild(test);
test.style.position = "absolute";
test.style.bottom = "50px";
test.style.zIndex = "10";
CardContent.id = "cardContent";
GreetingContainer.onload = function autoClick() {
    $("#download").click();
}

$(document).ready(function () {
    var element = $("#cardContent");

    $("#download").on('click', function () {
        html2canvas(element, {
            onrendered: function (canvas) {
                var imageData = canvas.toDataURL("image/jpg");
                var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
                $("#download").attr("download", "card.jpg").attr("href", newData);
            }
        });

    });
});

