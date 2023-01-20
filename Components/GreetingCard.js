const GreetingContainer = document.createElement("section");
GreetingContainer.setAttribute("class", "greeting-container");
document.body.appendChild(GreetingContainer);

const ground = new Image();
ground.src = "/assets/img/Vector 2.png";
ground.setAttribute("class", "surface");
GreetingContainer.appendChild(ground);

const LanternString = new Image();
LanternString.src = "/assets/img/Vector 1.png";
LanternString.setAttribute("class", "lantern-string");
GreetingContainer.appendChild(LanternString);

const LanternSmall = new Image();
LanternSmall.src = "/assets/img/Artboard 32.png";
LanternSmall.setAttribute("class", "lantern-small");
GreetingContainer.appendChild(LanternSmall);

const LanternMedium = new Image();
LanternMedium.src = "/assets/img/Artboard 32.png";
LanternMedium.setAttribute("class", "lantern-medium");
GreetingContainer.appendChild(LanternMedium);

const LanternLarge = new Image();
LanternLarge.src = "/assets/img/Artboard 32.png";
LanternLarge.setAttribute("class", "lantern-large");
GreetingContainer.appendChild(LanternLarge);

const Bush1 = new Image();
Bush1.src = "/assets/img/Artboard 36 2.png";
Bush1.setAttribute("class", "bush-dark1");
GreetingContainer.appendChild(Bush1);

const Bush2 = new Image();
Bush2.src = "/assets/img/Artboard 36 1.png";
Bush2.setAttribute("class", "bush-dark2");
GreetingContainer.appendChild(Bush2);

const Bush3 = new Image();
Bush3.src = "/assets/img/Artboard 39 1.png";
Bush3.setAttribute("class", "bush-light1");
GreetingContainer.appendChild(Bush3);

const Bush4 = new Image();
Bush4.src = "/assets/img/Artboard 39 2.png";
Bush4.setAttribute("class", "bush-light2");
GreetingContainer.appendChild(Bush4);

const Cat = new Image();
Cat.src = "/assets/img/Cat/Artboard 15.png";
Cat.setAttribute("class", "cat");
GreetingContainer.appendChild(Cat);

const Coin1 = new Image();
Coin1.src = "/assets/img/Artboard 35.png";
Coin1.setAttribute("class", "coin1");
GreetingContainer.appendChild(Coin1);

const Coin2 = new Image();
Coin2.src = "/assets/img/Artboard 35.png";
Coin2.setAttribute("class", "coin2");
GreetingContainer.appendChild(Coin2);

const KiteFirework = new Image();
KiteFirework.src = "/assets/img/Artboard 33.png";
KiteFirework.setAttribute("class", "kite-firework");
GreetingContainer.appendChild(KiteFirework);

const Hny = document.createElement("h1");
const HnyText = document.createTextNode("Tạo thiệp chúc");
Hny.setAttribute("class", "hny");
Hny.appendChild(HnyText);
GreetingContainer.appendChild(Hny);

const distich = document.createElement("p");
const distichText = document.createTextNode(
  "Cung chúc tân xuân - Vạn sự như ý"
);
distich.setAttribute("class", "distich");
distich.appendChild(distichText);
GreetingContainer.appendChild(distich);

const buttonCreate = document.createElement("button");
buttonCreate.setAttribute("class", "button-popup");
const buttonIcon = document.createElement("i");
buttonIcon.setAttribute("class", "fa-solid fa-play");
buttonCreate.appendChild(buttonIcon);
buttonCreate.innerText = "Gửi lời chúc";
GreetingContainer.appendChild(buttonCreate);

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
ButtonClose.src = "/assets/img/xmark-solid.svg";
ButtonClose.setAttribute("class", "close");
FormPopup.appendChild(ButtonClose);

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
        width: 750px;
        height: 100px;
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
        height: 75px;

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