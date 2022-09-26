// console.log("Hello from typescript");
// console.log("test 2");

const board = document.querySelector(".game-container") as HTMLElement;
const button = document.querySelector('.button') as HTMLElement;
const winMessage = document.querySelector(".winner") as HTMLElement;

type Turn = "X" | "O" | ""

let turn: Turn = "X"

function listenBoard(): void{
    board.addEventListener('click', runGame)
}

function main(): void {
    createBoard();
    listenBoard();
}

function runGame(e: Event): void {
    //console.log("board clicked");//when we click on the board we get the runGame function
    const boxId: string | null = (<HTMLElement>e.target).id; //This helps us know wher we click, which box
    console.log(boxId);//box-1, box-2
    if (boxId === null ) return;
    const box: HTMLElement | null = document.querySelector(`#${boxId}`);
    if (box === null || box.textContent!== "") return;
    box.textContent = turn;
    changeBoxBackground(box);
    const winner: boolean = checkWinner();
    if(!winner) switchPlayer();
    else{
        //alert("There is a WINNER")
        endGame();
    }
}

function changeBoxBackground(box: HTMLElement) : void{
    if ( turn === 'X') box.classList.replace('box', 'x');//it changes the color to what's instructed in CSS
    else box.classList.replace('box', 'o'); //it changes the color to what's instructed in CSS
}

function endGame(): void{
    board.removeEventListener("click", runGame);
    button.addEventListener('click', resetGame);
    if(winMessage === null) return;
    winMessage.textContent = `The Winner is ${turn}!!!`;
    winMessage.setAttribute('dixplay', 'block');// when there's a winner, we get the message
    button.style.visibility = 'visible';// when there's a winner we make the button visible
}

function resetGame(): void{
    //console.log("RESET"); // RESET
    turn = "X";
    resetBoxes();
    button.style.visibility = 'hidden'; //When the game is reset, we want to hide the play again button. 
    winMessage.textContent = "";
    board.addEventListener('click', runGame);
}

function resetBoxes(): void {
    for(let i = 0; i<= 8; i++){
        const box = document.querySelector(`#box-${i}`) as HTMLElement;
        box.textContent= "";
        //resetting animation 
        const boxClass: string = box.className;
        box.classList.remove(boxClass);
        void box.offsetWidth;
        box.classList.add("box");
    }
}
function checkWinner(): boolean{
    const boxes: string[]= getBoxes();
    return (
        (boxes[0] === boxes[1] && boxes[1]=== boxes[2] && boxes[0]!== "") ||
        (boxes[3] === boxes[4] && boxes[4]=== boxes[5] && boxes[3]!== "") ||
        (boxes[6] === boxes[7] && boxes[7]=== boxes[8] && boxes[6]!== "") ||
        (boxes[0] === boxes[4] && boxes[4]=== boxes[8] && boxes[0]!== "") ||
        (boxes[2] === boxes[4] && boxes[4]=== boxes[6] && boxes[2]!== "") ||
        (boxes[1] === boxes[4] && boxes[4]=== boxes[7] && boxes[1]!== "") ||
        (boxes[0] === boxes[3] && boxes[3]=== boxes[6] && boxes[0]!== "") ||
        (boxes[2] === boxes[5] && boxes[5]=== boxes[8] && boxes[2]!== "")
    );
}

function getBoxes(): string[] {
    const boxesContent: string[] = [];
    for(let i = 0; i <= 8; i++){
        const box= document.querySelector(`#box-${i}`) as HTMLElement;
        const boxContent: string | null = box.textContent;
        if(boxContent === null) boxesContent.push("")
        else{
            boxesContent.push(boxContent)
        }
    }
    return boxesContent;
}
function switchPlayer () : void{
    if (turn === "X"){
        turn = "O";
    } else {
        turn = "X";
    }
}

function createBoard(): void{
    for(let i=0; i<9; i++) makeBox(i) //Generating boxes
}

function makeBox(i: number): void{
    const box: HTMLDivElement= document.createElement("div");
    box.className= 'box';
    box.id=`box-${i}` //with the loop it helps us giving a number to each box
    box.textContent= '';
    board.append(box);

}

main()