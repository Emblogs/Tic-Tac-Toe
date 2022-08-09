let lastvalue="O"
let display=document.getElementById("display")
display.textContent="Player 1's turnto play"
let boxes=document.querySelector(".box")

for(let box of boxes) {
    box.addEventListener("click",() => {
        if(box.textContent !=="") {
            return;
        }
})
}

if (lastvalue =="O") {
    box.textContent="X"
    lastvalue="X"
    display.textContent="Player 2's turn to play"
}
else{
    box.textContent="O"
    lastvalue="X"
}