console.log("TicTacToe")
let music = new Audio("ting.mp3.mp3");
let audioTurn = new Audio("ting.mp3.mp3");
let gameOver= new Audio("ting.mp3.mp3");
let isgameover = false

let turn = "X"

const changeTurn = () =>{

    return turn === "X"?"0":"X";
}


const checkWin = () =>{
    let boxText= document.getElementsByClassName('boxText')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && ( boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxText[e[0]].innerText+ "Won"
            isgameover = true
            document.querySelector('.imageBox').getElementsByClassName('src')[0].style.width = "300px"
        }
    }

    )
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click' , ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            audioTurn.play();
            turn = changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn For " +turn;
            }
            

        }
    })
})


reset.addEventListener('click' , ()=>{
    let boxTexts= document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element =>{
        element.innerText="";
    })
    turn = "X";
    isgameover= false;
    if(!isgameover){
        document.getElementsByClassName("info")[0].innerText = "Turn For " +turn;
    }
    document.querySelector('.imageBox').getElementsByClassName('src')[0].style.width = "0px"
})

