let firstBtn = document.getElementById('firstBtn');
let secondBtn = document.getElementById('secondBtn');
let colorCode = document.getElementById('colorCode');
let container = document.getElementById('container');
let copyBtn = document.getElementById('copyBtn');

let rgb1, rgb2;

let handleBtn =function(){
    let value = "0123456789abcdef"
    let str = ''
    for(let i=0; i<6; i++){
       let random = value[Math.floor(Math.random(value) * 16)]
       str += random;
    }
    let hexDecimalCode = '#' + str;
    return hexDecimalCode;
}

let handleBtn1 = function() {
    rgb1 = handleBtn();
    firstBtn.textContent = rgb1;
    if (rgb2) { 
        document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
        colorCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    }else {
        colorCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, <not set>);`;
    }
};

let handleBtn2 = function() {
    rgb2 = handleBtn();
    secondBtn.textContent = rgb2;
    if (rgb1) {
        document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
        colorCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    }else {
        colorCode.innerHTML = `background-image: linear-gradient(to right, <not set>, ${rgb2});`;
    }
};

document.getElementById('copyBtn').addEventListener('click', function() {
    navigator.clipboard.writeText(colorCode.innerHTML).then(() => {
        alert('Copied to clipboard: ' + colorCode.innerHTML);
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
});

firstBtn.addEventListener("click", handleBtn1);
secondBtn.addEventListener("click", handleBtn2);