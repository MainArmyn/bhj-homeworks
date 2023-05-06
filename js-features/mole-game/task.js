function getHole(idx) {
    let el = document.getElementById(`hole${idx}`);
    return el;
}

function CheckWin(win,lost) {
            if (Number(win.textContent)===10) {
                alert("Вы выиграли!");
                return true;
            } else if (Number(lost.textContent)===5) {
                alert("Вы проиграли!");
                return true;
            }        
}

function GameCheck() {
    let win=document.querySelector("#dead");
    let lost=document.querySelector("#lost");
    for (let i=1;i<10;i++) {
        let hole=getHole(i);
        hole.onclick = function() {
            if (hole.classList.contains("hole_has-mole")) {
                if (CheckWin(win,lost)) {
                    return;
                } 
                win.textContent=Number(win.textContent)+1;
            } else {
                if (CheckWin(win,lost)) {
                    return;
                } 
                lost.textContent=Number(lost.textContent)+1;
        }
        };
    }
}
GameCheck();

