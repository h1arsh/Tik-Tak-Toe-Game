let boxes=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#reset_btn");

let newbtn=document.querySelector(".new_btn");
let msg_container=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");

let turnO=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const reset = () =>{
    turnO=true;
    enableBoxes();
    msg_container.classList.add("hide");
    newbtn.classList.add("hide");
}

const disableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const draw = () =>
{
    msg.innerText=`Match Draw , please Click New Game Button`;
    msg_container.classList.remove("hide");
    newbtn.classList.remove("hide");
    disableBoxes();

}

const showwinner = (winner) =>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msg_container.classList.remove("hide");
    newbtn.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winpatterns)
    {
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!="")
        {
            if(val1===val2 && val2===val3)
            {
                showwinner(val1);
                return;
            }
        }
    }
    draw1();
}

const draw1 = () => {
    let flag=true;
    for(let pattern of winpatterns)
        {
            let val1=boxes[pattern[0]].innerText;
            let val2=boxes[pattern[1]].innerText;
            let val3=boxes[pattern[2]].innerText;
            if(val1=="" || val2=="" || val3=="")
            {
                flag=false;
                break;
            }
        }
        if(flag)
        {
            draw();
        }
}

newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);