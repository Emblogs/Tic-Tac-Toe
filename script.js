let lastvalue="O"
let display=document.getElementById("display")
display.textContent="Player 1's turn to play"
let boxes=document.querySelectorAll(".box")

for(let box of boxes) {
    box.addEventListener("click",() => {
        if(box.textContent !=="") {
            return;
        }
        if (lastvalue =="O") {
            box.textContent="X"
            lastvalue="X"
            display.textContent="Player 2's turn to play"
             checkGameStatus();
            // checkDraw();
        }
        else{
            box.textContent="O"
            lastvalue="O"
            display.textContent="Player 1's turn to play"
             checkGameStatus();
            // checkDraw();
        }
})
}

let ControlBtn=document.getElementById("ControlBtn")
ControlBtn.addEventListener("click",() =>{
    window.location.href="index.html"
})

function checker(first,second,third) {
    if(display.textContent.includes("won the game")) {
        return;
    }
    if(
        boxes[first].textContent =="X" &&
        boxes[second].textContent =="X" &&
        boxes[third].textContent =="X") {
        disableButtonsWhenGameIsWon("Player 1");
        return;
    } else if(
        boxes[first].textContent =="O" &&
        boxes[second].textContent =="O" &&
        boxes[third].textContent =="O" ) {
        disableButtonsWhenGameIsWon("Player 2");
        return; 
    }else {
        checkDraw()
    }
}

function checkGameStatus() {
    checker(0,1,2)
    checker(3,4,5)
    checker(6,7,8)
    checker(0,3,6)
    checker(1,4,7)
    checker(2,5,8)
    checker(0,4,8)
    checker(2,4,6)
}

function disableButtonsWhenGameIsWon(player) {
    for(let box of boxes) {
        if (box.textContent =="") {
            box.toggleAttribute("disabled")
        }
    }
display.textContent=player+"won the game"
}

function checkDraw() {
    for(let box of boxes) {
        if (box.textContent ==""){
            return;
        }
    }
    display.textContent="Draw";
}
