const gameBoard = document.getElementById("gameBoard")

for (let i = 0; i<9; i++) {
    let boardBox = document.createElement("div")
    boardBox.className = "boxes"
    gameBoard.appendChild(boardBox)
}