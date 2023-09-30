const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$&*_+-*/()%^";

const passBox = document.querySelector('#pass-box');
const totalchar = document.getElementById('number')
const upper = document.getElementById('Uppercase');
const lower = document.getElementById('Lowercase');
const num = document.getElementById('Number');
const sym = document.getElementById('Symbol');
const btn = document.querySelector('#row7');

function getRandom(dataset) {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

function generatePassward(passward = "") {

    if( !(upper.checked) && !(lower.checked) && !(num.checked) && !(sym.checked)){
        passBox.innerText = "Mark atleast one Checked";
    }
    if (upper.checked) {
        passward = passward + getRandom(upperSet);
    }
    if (lower.checked) {
        passward = passward + getRandom(lowerSet);
    }
    if (num.checked) {
        passward = passward + getRandom(numberSet);
    }
    if (sym.checked) {
        passward = passward + getRandom(symbolSet);
    }

    if (passward.length < totalchar.value) {
        return generatePassward(passward);
    }
    passward = truncateString(passward, totalchar.value);

    showPass(passward);

}
btn.addEventListener('click', function () {
    generatePassward();
})

function showPass(passward) {
    passBox.innerText = passward;
}
function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength);
    }
}