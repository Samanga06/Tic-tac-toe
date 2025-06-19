let boxes = document.querySelectorAll(".choice");
let rstbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".newgame");

let turn0 = true;
let move = document.querySelector(".msg");
let msg= document.querySelector(".winner");

let turn = 0;

const wincases =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box,index) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText ="O";
            turn0=false;
            move.innerText = `X's move`;

        }else{
            box.innerText="X";
            turn0=true;
            move.innerText = `O's move`;
        }
        box.disabled = true;
        turn++;
        checkWinner();
    
    });
});

const checkWinner = () =>{
    for(let pattern of wincases){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if(p1===p2 && p2===p3 && p1!==""){
            msg.innerText = `The winner is ${p1}`;
            boxes[pattern[0]].classList.add("winnerbox");
            boxes[pattern[1]].classList.add("winnerbox");
            boxes[pattern[2]].classList.add("winnerbox");
            newbtn.style.display="block";
            msg.style.display="block";
        }else if(turn===9){
            msg.innerText = `The game was tie`;
            newbtn.style.display="block";
            msg.style.display="block";
        }
    }
};
    
newbtn.addEventListener("click",() =>{
     boxes.forEach((box)=>{
         box.innerText = "";
         box.disabled = false;
         move.innerText = "move";
         box.setAttribute("class","choice");
     });
     newbtn.style.display="none";
     msg.style.display="none";
    turn=0;
});

rstbtn.addEventListener("click",() =>{
     boxes.forEach((box)=>{
         box.innerText = "";
         box.disabled = false;
         move.innerText = "move";
         box.setAttribute("class","choice");
     });
     newbtn.style.display="none";
     msg.style.display="none";
    turn=0;
});
