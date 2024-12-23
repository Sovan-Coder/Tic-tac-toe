let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");

let msgcontainer=document.querySelector(".msg-containar")
let news=document.querySelector(".new");
let msg=document.querySelector("#msg");
let turno=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach(box => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turno){
            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X"
            turno=true
        }
        box.disabled=true;
        checkwinner();
    })
});
const disabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabled=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabled();
};
const checkwinner=()=>{
    for(pattern of winpatterns){
        let pos1val1=boxes[pattern[0]].innerText;
        let pos1val2=boxes[pattern[1]].innerText;
        let pos1val3=boxes[pattern[2]].innerText;
        if(pos1val1 !=""&&pos1val2!=""&&pos1val3!=""){
            if(pos1val1===pos1val2&&pos1val2===pos1val3){
                console.log("Winner",pos1val1);
                showwinner(pos1val1);
            }
        }

    }
};
const resetGame=()=>{
turno=true;
enabled();
msgcontainer.classList.add("hide");
};
news.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);