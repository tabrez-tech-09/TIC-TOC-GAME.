let boxs = document.querySelectorAll(".box");
let clear = document.querySelector("#resetgame");
let truno = true;

let newbtn = document.querySelector("#newgame");
let containerbtn = document.querySelector(".messgaecontainer");
let msg = document.querySelector("#message");
const Winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7]
];

let winnerFound = false; 

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.classList.contains("disabled")) {
            box.innerText = truno ? "O" : "X";
            box.style.color = truno ? "green" : "blue";
            truno = !truno;
            box.classList.add("disabled");
            checkwinner();
        }
    });
});

const checkwinner = () => {
    for (let pattern of Winpattern) {
        let pos = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if (pos !== "" && pos2 !== "" && pos3 !== "" && pos === pos2 && pos2 === pos3) {
            winnerFound = true;
            showWinner(pos);
            return;
        }
    }

    const allFilled = [...boxs].every(box => box.innerText !== "");
    if (allFilled && !winnerFound) {
        showWinner("No winner");
    }
};

const showWinner = (winner) => {
    msg.innerText = winner === "No winner" ? "It's a draw!" : `Winner: ${winner}`;
    containerbtn.classList.remove("hide");
    disable();
};

const disable = () => {
    boxs.forEach(box => box.classList.add("disabled"));
};

const enable = () => {
    boxs.forEach(box => {
        box.classList.remove("disabled");
        box.innerText = "";
        box.style.color = ""; 
    });
    winnerFound = false; 
};

const resetgame = () => {
    truno = true;
    enable();
    containerbtn.classList.add("hide");
    alert("Welcome to a new Game");
};

newbtn.addEventListener("click", resetgame);
clear.addEventListener("click", resetgame);


