const heading = document.createElement("h1");
const headingText = document.createTextNode("Chúc mừng năm mới");
heading.appendChild(headingText);
document.body.appendChild(heading);

const year = document.createElement("h1");
const yearNumber = document.createTextNode("2023");
heading.appendChild(yearNumber);
document.body.appendChild(year);

const MainpageStyle = document.createElement('style');
MainpageStyle.innerHTML = `
    body {
        background: #FFDEAB;
        font-family: 'Quicksand', sans-serif;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        color: #D20000;
        
        width: 450px;
        height: 160px;

        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 80px;
        text-align: right;
        letter-spacing: 0.02em;
    }
`;
document.head.appendChild(MainpageStyle);