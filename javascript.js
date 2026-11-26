const container = document.querySelector("#container");

function getRandomRgb(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function makeFirstGrid(){
    container.style.gridTemplateColumns = "repeat(16, 1fr)";
    container.style.border = "1px solid black";

    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            const row = document.createElement("div");
            row.style.border = "1px solid black"
            row.classList.add("square");
            container.appendChild(row);
        }
    }

    colorOnHover();
}

function colorOnHover() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square =>
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomRgb();
        })
    )
}

function makeGrid(userChoice) {
    container.replaceChildren();

    container.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    container.style.border = "1px solid black";

    for(let i = 0; i < userChoice; i++){
        for(let j = 0; j < userChoice; j++){
            const row = document.createElement("div");
            row.style.border = "1px solid black"
            row.classList.add("square");
            container.appendChild(row);
        }
    }

    colorOnHover();

}

function btnPopUp(){
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
    let userChoice = 0;

        while(userChoice <= 0 || userChoice > 100 || isNaN(userChoice)){
            const input = prompt("Choose how many squares per side (1-100):");
            if (input === null) return;
            userChoice = Number(input);
        }

        makeGrid(userChoice);
    })

}

makeFirstGrid();
btnPopUp();