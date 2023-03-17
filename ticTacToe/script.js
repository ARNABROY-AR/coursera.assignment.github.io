console.log("Welcome to tic tac toe");
let backMusic= new Audio("duck.mp3");
let koMusic= new Audio("gameOver.wav");
let turn="X";
let gameOver=false;
const mediaQuery = window.matchMedia('(min-width: 950px)')
let isDisabled = true;

const changeTurn=()=>{
    return turn==="X"? "0":"X"
     
}
// FUNCTION TO CHECK WIN
const checkWin=()=>{
    let boxText= document.getElementsByClassName("boxtext");
    const wins=[
        [0,1,2 ,0,5,0,0,8,0],
        [3,4,5, 0,15,0,0,29,0],
        [6,7,8,0,25,0,,0,48,0],
        [0,3,6,-10,15,90,-20,29,90],
        [1,4,7,0,15,90,0,29,90],
        [2,5,8,10,15,90,20,29,90],
        [0,4,8 ,0,15,45,0,29,45],
        [2,4,6,0,15,135,0,29,135],
    ]
    wins.forEach(e=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText)&&(boxText[e[1]].innerText ===boxText[e[2]].innerText) && ( boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerHTML= boxText[e[0]].innerText +"  WON";
            
            gameOver= true;
            backMusic.pause();
            koMusic.play();
            if(mediaQuery.matches)
            {
            document.querySelector(".line").style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "30vw";
            
            if(boxText[e[0]].innerText==="X")
            {
                
                document.querySelector(".imgBox").getElementsByClassName("xWin")[0].style.width="206px";
            }
            else{
                
                document.querySelector(".imgBox").getElementsByClassName("yWin")[0].style.width="206px";
            }
            }
            else{
                
                document.querySelector(".line").style.transform= `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`;
                document.querySelector(".line").style.width = "60vw";
                if(boxText[e[0]].innerText==="X")
            {
                
                document.querySelector(".imgBox").getElementsByClassName("xWin")[0].style.width="206px";
            }
            else{
                
                document.querySelector(".imgBox").getElementsByClassName("yWin")[0].style.width="206px";
            }
            }
             
        }
        
        })
}

// GAME LOGIC
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector(".boxtext");
    element.addEventListener("click",(e)=>{
        backMusic.play();
        if(boxText.innerText===''){
            boxText.innerText =turn;
            turn=changeTurn();
            checkWin();
            if(!gameOver)
            {
                document.getElementsByClassName("info")[0].innerHTML="Turn For  " + turn;
            }
            // else
            // {
            //     console.log("betichod");
            //     boxes.disabled = isDisabled;
            // //   element.setAttribute("disabled",)
            // }

        }
    })

})
reset.addEventListener("click",()=>{
    backMusic.pause();
    backMusic.currentTime=0;
    let boxTexts= document.querySelectorAll(".boxtext");
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
         });
         turn = "X";
         gameOver=false;
         document.getElementsByClassName("info")[0].innerHTML="Turn For  " + turn;
         document.querySelector(".imgBox").getElementsByClassName("xWin")[0].style.width="0px";
         document.querySelector(".imgBox").getElementsByClassName("yWin")[0].style.width="0px";
         document.querySelector(".line").style.width = "0vw";
        

})