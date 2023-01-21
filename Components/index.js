const style = document.createElement("style");
document.body.appendChild(style);
style.innerHTML = `
    .btn-lft, .btn-rgt {
        width: 4em;
        border: none;
        bottom: .5em;
        position: absolute;
        cursor: pointer;
        z-index: 100;
    }
    .btn-lft:hover, .btn-rgt:hover {
        transform: scale(.95);
        transition: transform 0.1s ease-in-out;
    }
    .btn-lft {
        left: 1em;
        display: none;
    }
    .btn-rgt {
        right: 1em;
    }
    .slide {
        // width: 100%;
        // height:;
    }
    .fade-in {
        animation: fadeIn 1s;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
function scriptLoader(id, path, callback) {
  var script = document.createElement("script");
  script.id = id;
  script.type = "module";
  script.src = path;
  script.async = true;
  script.onload = function () {
    if (typeof callback == "function") callback();
  };
  try {
    var scriptOne = document.getElementsByTagName("script")[0];
    scriptOne.parentNode.insertBefore(script, scriptOne);
  } catch (e) {
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}

function scriptRemove(id) {
  const rms = document.getElementById(id);
  rms.remove();
  const x = document.getElementsByTagName("section")[0];
  document.body.removeChild(x);
}

const slidePage = [
  {
    path: "./Components/Countdown.js",
    id: "script1",
  },
  {
    path: "./Components/LoadingPage.js",
    id: "script2",
  },
  {
    path: "./Components/MainPage.js",
    id: "script3",
  },
  {
    path: "./Components/Pagoda.js",
    id: "script4",
  },
  {
    path: "./Components/Wishing.js",
    id: "script5",
  },
  {
    path: "./Components/GreetingCard.js",
    id: "script6",
  },
];
let slideCounter = 0;

const btnLft = new Image();
const btnRgt = new Image();
btnLft.src = "./assets/img/btn-left.png";
btnRgt.src = "./assets/img/btn-right.png";
btnLft.className = "btn-lft";
btnRgt.className = "btn-rgt";
const slide = document.createElement("div");
const slideContent = document.createElement("div");
slide.className = "slide";
slideContent.className = "slide-content";
slideContent.appendChild(btnLft);
slideContent.appendChild(btnRgt);
document.body.appendChild(slide);
slide.appendChild(slideContent);
const startSlider = () => {
  scriptLoader(slidePage[0].id, slidePage[0].path);
};

btnRgt.addEventListener("click", function () {
  if (slideCounter === slidePage.length - 2) {
    btnRgt.style.display = "none";
  }
  scriptRemove(slidePage[slideCounter].id);
  scriptLoader(
    slidePage[slideCounter + 1].id,
    slidePage[slideCounter + 1].path
  );
  slideCounter++;
});

// btnLft.addEventListener("click", function() {
//     if (slideCounter === 0) {
//         btnLft.style.display = "none";
//     }
//     scriptRemove(slidePage[slideCounter].id);
//     console.log(slidePage[slideCounter].id);
//     scriptLoader(slidePage[slideCounter - 1].id, slidePage[slideCounter - 1].path);
//     console.log(slideCounter);
//     slideCounter--;
//     console.log(slideCounter);
// })

startSlider();
