
/*Requirements
[x] A user should be able to click on different squares to make a move.
[x] Every click will alternate between marking an X and O
[x] Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
[x] A cell should not be able to be replayed once marked.
[x] You should not be able to click remaining empty cells after the game is over.
[x] Add a reset button that will clear the contents of the board.
[x] Display a message to indicate which turn is about to be played.
[x] Detect draw conditions (ties/cat's game)
[x] Detect winner: Stop game and declare the winner if one player ends up getting three in a row. 
*/

//Next up
// User can select 3x3, 4x4, or 5x5 grid
    // need to create grids in the DOM
    // erase previous grid
    // maybe use classes so I don't have to rewrite everything? // 3x3 as super class and then build 4x4 and 5x5?
// play against AI

//This is where I test out new ideas and archive old ones so that my code is still readable and I don't accidentally break it trying to be clever
// I forgot to put makeGrid in the DOMContentLoaded part and so a lot of these were returning null and I didn't know why.

// const makeGrid = () => {
    //     const topLeft = document.querySelector('#top-left')
    //     const topMid = document.querySelector('#top-mid')
    //     const topRight = document.querySelector('#top-right')
    //     const centLeft = document.querySelector('#cent-left')
    //     const centMid = document.querySelector('#cent-mid')
    //     const centRight = document.querySelector('#cent-right')
    //     const botLeft = document.querySelector('#bot-left')
    //     const botMid = document.querySelector('#bot-mid')
    //     const botRight = document.querySelector('#bot-right')
    // console.log(topLeft)
    // console.log(topMid)
    // console.log(topRight)
    // console.log(centLeft)
    // console.log(centMid)
    // console.log(centRight)
    // console.log(botLeft)
    // console.log(botMid)
    // console.log(botRight)
    
    //Not sure if this works better as an array or as an object
    // const grid = {
        // topRow: [topLeft,topMid,topRight],
        // centRow: [centLeft,centMid,centRight],
        // botRow: [botLeft,botMid,botRight],
        // leftCol: [topLeft,centLeft,botLeft],
        // midCol: [topMid,centMid,botMid],
        // rightCol: [topRight,centRight,botRight],
        // rightDiag: [botRight,centMid,topLeft],
        // leftDiag: [botLeft,centMid,topRight]
        // }
        
    // const grid = [
    //   topRow= [topLeft,topMid,topRight],
    //   centRow= [centLeft,centMid,centRight],
    //   botRow= [botLeft,botMid,botRight],
    //   leftCol= [topLeft,centLeft,botLeft],
    //   midCol= [topMid,centMid,botMid],
    //   rightCol= [topRight,centRight,botRight],
    //   rightDiag= [botRight,centMid,topLeft],
    //   leftDiag= [botLeft,centMid,topRight]
// ]
            
    //This just turns the keys into a string
    // const locations = Object.keys(grid)
    // console.log(locations)
    // locations.forEach((place)=> {
        //     console.log(place)
        // })
                
// for (const arr in grid) {
//     //this logs the first LETTER?!?
//     //console.log(arr[0])
                    
//     //logs keys as strings
//     // console.log(arr)
                    
//     //logs arrays
//     //console.log(grid[arr])
//     if (grid[arr].every(square => square.classList.contains('x'))) console.log('x wins! - this works')
//     else if (grid[arr].every(square => square.classList.contains('o'))) console.log('o wins! - this works')
                    
                    
//undefined
// console.log(grid.arr)
                    
//from Stackoverflow
// if (grid.hasOwnProperty(arr)) {
    // const square = grid[arr]
    // console.log(square)
// }
                        
//}
                        
//grid is not iterable
// for (const arr of grid) {
//     console.log(arr)
// }
                            
// const testFunction = (arr) => {
//     console.log(arr)
// }
                                
// grid.map(testFunction)
                                
// if (grid.forEach(arr => arr.every(square => square.classList.contains('x')))) console.log('x wins!')
                                
                                
//this works but it's ridiculous
// if (grid.topRow.every(square => square.classList.contains('x'))) console.log('x wins!') 
// else if (grid.centRow.every(square => square.classList.contains('x'))) console.log('x wins!')
// else if (grid.botRow.every(square => square.classList.contains('x'))) console.log('x wins!')
// else if (grid.leftCol.every(square => square.classList.contains('x'))) console.log('x wins!')
// else if (grid.midCol.every(square => square.classList.contains('x'))) console.log('x wins!')
// else if (grid.rightCol.every(square => square.classList.contains('x'))) console.log('x wins!')
// else if (grid.rightDiag.every(square => square.classList.contains('x'))) console.log('x wins!')
// else if (grid.leftDiag.every(square => square.classList.contains('x'))) console.log('x wins!')
// else if (grid.topRow.every(square => square.classList.contains('o'))) console.log('o wins!') 
// else if (grid.centRow.every(square => square.classList.contains('o'))) console.log('o wins!')
// else if (grid.botRow.every(square => square.classList.contains('o'))) console.log('o wins!')
// else if (grid.leftCol.every(square => square.classList.contains('o'))) console.log('o wins!')
// else if (grid.midCol.every(square => square.classList.contains('o'))) console.log('o wins!')
// else if (grid.rightCol.every(square => square.classList.contains('o'))) console.log('o wins!')
// else if (grid.rightDiag.every(square => square.classList.contains('o'))) console.log('o wins!')
// else if (grid.leftDiag.every(square => square.classList.contai('o'))) console.log('o wins!')
 //}


//Turn Counter                                
let counter = 0
                                
//This function runs after every turn and check for 3 win conditions: X wins, O wins, or Tie    
const winCond = () => {
    const topLeft = document.querySelector('#top-left')
    const topMid = document.querySelector('#top-mid')
    const topRight = document.querySelector('#top-right')
    const centLeft = document.querySelector('#cent-left')
    const centMid = document.querySelector('#cent-mid')
    const centRight = document.querySelector('#cent-right')
    const botLeft = document.querySelector('#bot-left')
    const botMid = document.querySelector('#bot-mid')
    const botRight = document.querySelector('#bot-right')
    
    const grid = {
        topRow: [topLeft,topMid,topRight],
        centRow: [centLeft,centMid,centRight],
        botRow: [botLeft,botMid,botRight],
        leftCol: [topLeft,centLeft,botLeft],
        midCol: [topMid,centMid,botMid],
        rightCol: [topRight,centRight,botRight],
        rightDiag: [botRight,centMid,topLeft],
        leftDiag: [botLeft,centMid,topRight]
    }
    
    const squares = document.querySelectorAll('.square')
    const gameOver = document.querySelector('#game-over')
//Oh look, a tidy little function that does the same thing as all that other code    
if (counter < 9) {
    for (const arr in grid) {
        if (grid[arr].every(square => square.classList.contains('x'))) {
         //   console.log('x wins!')
            squares.forEach(square => square.classList.add('disabled'))
            gameOver.innerText = 'x wins!'
        }
        else if (grid[arr].every(square => square.classList.contains('o'))) {
        //    console.log('o wins!')
            squares.forEach(square => square.classList.add('disabled'))
            gameOver.innerText = 'o wins!'
        }
    }
}   
else if (counter === 9) {
    // Need something to check if one side has won before declaring a tie
    for (const arr in grid) {
        if (grid[arr].every(square => square.classList.contains('x'))) {
         //   console.log('x wins!')
            squares.forEach(square => square.classList.add('disabled'))
            gameOver.innerText = 'x wins!'
        }
        else if (grid[arr].every(square => square.classList.contains('o'))) {
        //    console.log('o wins!')
            squares.forEach(square => square.classList.add('disabled'))
            gameOver.innerText = 'o wins!'
        }
        else {
        //   console.log('It\'s a tie!')
        squares.forEach(square => square.classList.add('disabled'))
        gameOver.innerText = 'It\'s a tie!'
        }
    }
}
}

//This function is the actual gamplay // it runs the winCond function after every turn to see if the game is over
const play = (e) => {
    const xTurn = (e) => e.target.classList.add('x', 'played')
    const oTurn = (e) => e.target.classList.add('o','played')
    const gameOver = document.querySelector('#game-over')
    if (counter % 2 === 0) {
        xTurn(e)
        counter++
        gameOver.innerText = 'o\'s turn!'
    //    console.log(counter)
        winCond()
    } else {
        oTurn(e)
        counter++
        gameOver.innerText = 'x\'s turn!'
    //    console.log(counter)
        winCond()
    }
}


//This function sets the game up by adding event listeners to all the squares and running code for the reset button
const ticTacToe = () => {
    let squares = document.querySelectorAll('.square')
    for (var i = 0; i<squares.length;i++){
        squares[i].addEventListener('click',play)
    }  

    const reset = document.querySelector('#reset')
    reset.addEventListener('click', () => {
        squares.forEach(square => {
            square.setAttribute('class','square')
        })
        document.querySelector('#game-over').innerText = 'Click a square to start playing!'
        counter = 0
    })
}


document.addEventListener('DOMContentLoaded', ()=>{
//    makeGrid()
    ticTacToe()
})

