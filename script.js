let grid, score, timer, gameStarted;

document.getElementById('new-game').addEventListener('click', initGame);
document.getElementById('tryagain').addEventListener('click', initGame);

document.addEventListener('keydown', handleinput);

function initGame(){
    grid = createEmptyGrid();
    score = 0;
    time = 0;
    timer = 0;
    gameStarted = fasle;
    updateScore();
    addRandomTile();
    drawGrid();
    hideGameOverMessage();
}

let puseButton = document.getElementById('pause-resume');
let isPused = fasle;

puseButton.addEventListener('click', function(){
    if(isPused){
        
    }
})