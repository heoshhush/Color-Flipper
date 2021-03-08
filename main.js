

const body = document.querySelector('body');
const myColorText = document.querySelector('.myColorText');
const buttons = document.querySelector('.buttons');
const changeColorBtn = document.querySelector('.changeColorBtn');
const simpleBtn = document.querySelector('.simpleBtn');
const hexBtn = document.querySelector('.hexBtn');

const simpleColor = ['red', 'green', 'blue', 'yellow', 'rgb(255, 244, 50)', '#ff9705'];
const hexColor = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

let simpleClicked = true;
let hex = '#';

buttons.addEventListener('click', (event) => {
    const target = event.target;

    if(target.matches('.simpleBtn')){
        changeSimpleColor(simpleColor, genRandomNum(simpleColor));
        simpleClicked = true
    } else if(target.matches('.hexBtn')){
        changeHexColor();
        simpleClicked = false;
    }
})

changeColorBtn.addEventListener('click', () => {
    if(simpleClicked){
        changeSimpleColor(simpleColor, genRandomNum(simpleColor));
    }
    else if(!simpleClicked){
        changeHexColor();
    }
})


function genRandomNum(array){
    return Math.floor(Math.random() * array.length)
}

function changeSimpleColor(array,num){
    body.style.backgroundColor = array[num];
    myColorText.innerText = array[num];
    myColorText.style.color = array[num];
    simpleBtn.style.color = array[num];
    hexBtn.style.color = 'black';
}

function changeHexColor(){
    hex = '#';
    for(let i = 0 ; i < 6 ; i++){
        hex += hexColor[genRandomNum(hexColor)];
    }
    body.style.backgroundColor = hex;
    myColorText.innerText = hex;
    myColorText.style.color = hex;
    hexBtn.style.color = hex;
    simpleBtn.style.color = 'black';
}

//1)  +=를 활용한 문자열 합치기
//2) simpleClicked = true를 활용한 현재 상태 확정시키기