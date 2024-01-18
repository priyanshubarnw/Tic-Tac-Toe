const td = {
    elements: document.querySelectorAll('td'), 
    attribute: '0'
};

const winningPositions = [
     [1,2,3], [4,5,6], [7,8,9], [1,5,9], 
     [3,5,7], [1,4,7], [2,5,8], [3,6,9] 
    ];

let cnt = 1;

Array.from(td.elements).forEach(cell => {
    cell.addEventListener('click', function() {
        handleClick(cell)
    });
});

function handleClick(cell) {
    //placeMark - X when cnt is odd; O when cnt is even
    //Check for Win
    //Check for Draw
    //Switch Turns
    if (cell.attribute === 'x' || cell.attribute === 'o') {
            
    } 
    else if (cnt % 2 === 1) {
        cell.innerHTML = '<i class="fa-solid fa-xmark" style = "color: black;"></i>';
        cell.attribute = 'x';
    } 
    else {
        cell.innerHTML = '<i class="fa-solid fa-o" style = "color: black;"></i>';
        cell.attribute = 'o';
    }
    cnt++;

//Check if x won
function xWin () {
    return winningPositions.some(combination =>{
        return combination.every(position => {
            const tab = document.getElementById(position.toString());
            return tab && (tab.attribute === 'x');
        })
    });
}
if(xWin()) {
    setTimeout(function() {
        alert("X Wins");
    }, 10);
}

//Check if O won
function oWin () {
    return winningPositions.some(combination =>{
        return combination.every(position => {
            const tab = document.getElementById(position.toString());
            return tab && (tab.attribute === 'o');
        })
    });
}
if(oWin()) {
    setTimeout(function() {
        alert("O Wins");
    }, 100);
}


    //Draw
    const allCellsFilled = Array.from(td.elements).every(cell => cell.attribute === 'x' || cell.attribute === 'o');
    if(allCellsFilled) {
        setTimeout(function() {
            alert("Match Draw, Reload Page");
        }, 10);
    }

}